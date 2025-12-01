#!/usr/bin/env python3
"""
批量修复 VitePress 死链接脚本
自动查找并替换 markdown 文件中的死链接为正确的文件名
"""

import re
from pathlib import Path

DOCS_DIR = Path(__file__).parent / "docs"

# 死链接列表 (dead_link, source_file)
DEAD_LINKS = [
    ("./tech-spec", "Advanced/05-product/5.2-prd-basics/index.md"),
    ("./api", "Advanced/05-product/5.2-prd-basics/index.md"),
    ("./4.5.1-version-control", "Basic/04-practice-0-to-1/4.5-debug-guide/index.md"),
    ("./4.5.2-deployment", "Basic/04-practice-0-to-1/4.5-debug-guide/index.md"),
    ("./4.5.3-security", "Basic/04-practice-0-to-1/4.5-debug-guide/index.md"),
    ("./4.5.4-limitations", "Basic/04-practice-0-to-1/4.5-debug-guide/index.md"),
    ("./4.5.5-content", "Basic/04-practice-0-to-1/4.5-debug-guide/index.md"),
    ("./4.2.1-no-feature-creep", "Basic/04-practice-0-to-1/4.2-static-page/index.md"),
    ("./4.2.2-mvp-thinking", "Basic/04-practice-0-to-1/4.2-static-page/index.md"),
    ("./4.2.3-soul-questions", "Basic/04-practice-0-to-1/4.2-static-page/index.md"),
    ("./4.2.4-practice-example", "Basic/04-practice-0-to-1/4.2-static-page/index.md"),
    ("./4.2.5-content", "Basic/04-practice-0-to-1/4.2-static-page/index.md"),
    ("./1.4.1-env-setup", "Basic/01-awakening/1.4-tools-guide/index.md"),
    ("./1.4.2-static-page", "Basic/01-awakening/1.4-tools-guide/index.md"),
    ("./1.4.3-logic-interaction", "Basic/01-awakening/1.4-tools-guide/index.md"),
    ("./1.4.4-data-storage", "Basic/01-awakening/1.4-tools-guide/index.md"),
    ("./1.4.5-debug-guide", "Basic/01-awakening/1.4-tools-guide/index.md"),
    ("./1.3.1-prompt-engineering", "Basic/01-awakening/1.3-busting-myths/index.md"),
    ("./1.1.1-coder-to-commander", "Basic/01-awakening/1.1-coder-to-commander/index.md"),
    ("./1.1.2-vibe-vs-spec", "Basic/01-awakening/1.1-coder-to-commander/index.md"),
    ("./1.1.3-busting-myths", "Basic/01-awakening/1.1-coder-to-commander/index.md"),
    ("./1.1.4-tools-guide", "Basic/01-awakening/1.1-coder-to-commander/index.md"),
    ("./0.1-for-whom", "Basic/00-preface/index.md"),
    ("./0.2-checklist", "Basic/00-preface/index.md"),
    ("./0.3-outcomes", "Basic/00-preface/index.md"),
]

# 无法自动匹配的链接，需要删除或手动处理
LINKS_TO_REMOVE = [
    ("./tech-spec.md", "Advanced/05-product/5.2-prd-basics/index.md"),
    ("./api.md", "Advanced/05-product/5.2-prd-basics/index.md"),
]


def extract_prefix(link: str) -> str | None:
    """
    提取链接中的数字前缀，如 '0.1', '1.4.1', '4.2.1'
    """
    link_name = link.lstrip("./").replace(".md", "")
    # 匹配数字前缀模式
    match = re.match(r'^(\d+(?:\.\d+)+)', link_name)
    if match:
        return match.group(1)
    return None


def find_matching_file(dead_link: str, source_file: str) -> str | None:
    """
    根据死链接查找同目录下匹配的实际文件名
    """
    source_path = DOCS_DIR / source_file
    source_dir = source_path.parent
    
    # 提取链接中的数字前缀
    prefix = extract_prefix(dead_link)
    
    if not prefix:
        return None
    
    # 在同目录下查找以该前缀开头的 .md 文件
    for file in source_dir.iterdir():
        if file.is_file() and file.suffix == ".md" and file.name != "index.md":
            if file.stem.startswith(prefix + "-") or file.stem == prefix:
                return f"./{file.name}"
    
    return None


def fix_dead_links():
    """
    修复所有死链接
    """
    # 按源文件分组
    file_fixes = {}
    for dead_link, source_file in DEAD_LINKS:
        if source_file not in file_fixes:
            file_fixes[source_file] = []
        file_fixes[source_file].append(dead_link)
    
    for source_file, dead_links in file_fixes.items():
        source_path = DOCS_DIR / source_file
        
        if not source_path.exists():
            print(f"[跳过] 文件不存在: {source_file}")
            continue
        
        content = source_path.read_text(encoding="utf-8")
        original_content = content
        
        for dead_link in dead_links:
            # 查找匹配的实际文件
            real_file = find_matching_file(dead_link, source_file)
            
            if real_file:
                # 构建替换模式 - 处理带和不带 .md 后缀的情况
                old_pattern_md = dead_link + ".md"
                old_pattern_no_md = dead_link
                
                if old_pattern_md in content:
                    content = content.replace(old_pattern_md, real_file)
                    print(f"[替换] {source_file}: {old_pattern_md} -> {real_file}")
                elif old_pattern_no_md in content:
                    content = content.replace(old_pattern_no_md, real_file)
                    print(f"[替换] {source_file}: {old_pattern_no_md} -> {real_file}")
            else:
                print(f"[警告] 找不到匹配文件: {dead_link} in {source_file}")
        
        # 写回文件
        if content != original_content:
            source_path.write_text(content, encoding="utf-8")
            print(f"[保存] {source_file}")


def remove_invalid_links():
    """
    删除无法匹配的死链接行
    """
    for link, source_file in LINKS_TO_REMOVE:
        source_path = DOCS_DIR / source_file
        
        if not source_path.exists():
            continue
        
        content = source_path.read_text(encoding="utf-8")
        lines = content.split('\n')
        new_lines = []
        
        for line in lines:
            if link in line:
                print(f"[删除] {source_file}: 包含 {link} 的行")
                continue
            new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        if new_content != content:
            source_path.write_text(new_content, encoding="utf-8")
            print(f"[保存] {source_file}")


def main():
    print("=" * 60)
    print("VitePress 死链接修复脚本")
    print("=" * 60)
    
    print("\n[步骤1] 替换死链接为正确的文件名...")
    fix_dead_links()
    
    print("\n[步骤2] 删除无法匹配的链接...")
    remove_invalid_links()
    
    print("\n" + "=" * 60)
    print("完成！请重新运行 pnpm build 检查是否还有其他死链接")
    print("=" * 60)


if __name__ == "__main__":
    main()
