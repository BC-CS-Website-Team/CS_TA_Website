import os
import shutil
import re
from pathlib import Path


class WebsiteBuilder:
    def __init__(self, repo_name='CS_TA_Website'):
        self.repo_name = repo_name
        self.source_dir = Path('.')
        self.build_dir = Path('docs')
        self.patterns_to_update = [
            # CSS file paths
            (r'href=["\']\.\./css/', f'href="/{repo_name}/css/'),
            (r'href=["\']\.\.\/\.\.\/css/', f'href="/{repo_name}/css/'),
            # JavaScript file paths
            (r'src=["\']\.\./js/', f'src="/{repo_name}/js/'),
            (r'src=["\']\.\.\/\.\.\/js/', f'src="/{repo_name}/js/'),
            # Image file paths
            (r'src=["\']\.\./images/', f'src="/{repo_name}/images/'),
            (r'src=["\']\.\.\/\.\.\/images/', f'src="/{repo_name}/images/'),
            # Component paths
            (r'fetch\(["\']\.\.\/components\/', f'fetch("/{repo_name}/components/'),
            (r'fetch\(["\']\.\.\/\.\.\/components\/', f'fetch("/{repo_name}/components/'),
        ]

    def create_build_directory(self):
        """Create a clean docs directory."""
        if self.build_dir.exists():
            shutil.rmtree(self.build_dir)
        self.build_dir.mkdir()

    def copy_static_assets(self):
        """Copy static assets to docs directory."""
        # Copy directories
        dirs_to_copy = ['css', 'js', 'images', 'components']
        for dir_name in dirs_to_copy:
            src_dir = self.source_dir / 'src' / dir_name
            if src_dir.exists():
                dest_dir = self.build_dir / dir_name
                shutil.copytree(src_dir, dest_dir)

        # Copy root files
        root_files = ['index.html', 'README.md']
        for file_name in root_files:
            src_file = self.source_dir / file_name
            if src_file.exists():
                shutil.copy2(src_file, self.build_dir)

    def update_file_paths(self, content):
        """Update relative paths to absolute paths with repository name."""
        for pattern, replacement in self.patterns_to_update:
            content = re.sub(pattern, replacement, content)
        return content

    def process_html_files(self):
        """Process all HTML files, updating paths and copying to docs directory."""
        # Process root index.html
        root_index = self.source_dir / 'index.html'
        if root_index.exists():
            self.process_single_html_file(root_index, self.build_dir / 'index.html')

        # Process all HTML files in src/pages
        pages_dir = self.source_dir / 'src' / 'pages'
        if pages_dir.exists():
            for html_file in pages_dir.rglob('*.html'):
                # Preserve directory structure under pages/
                rel_path = html_file.relative_to(pages_dir)
                dest_path = self.build_dir / 'pages' / rel_path
                dest_path.parent.mkdir(parents=True, exist_ok=True)
                self.process_single_html_file(html_file, dest_path)

    def process_single_html_file(self, src_path, dest_path):
        """Process a single HTML file, updating paths and saving to docs directory."""
        with open(src_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # Update paths
        updated_content = self.update_file_paths(content)

        # Save updated file
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        with open(dest_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)

    def build(self):
        """Run the complete docs process."""
        print(f"🚀 Starting docs process for {self.repo_name}")

        print("📁 Creating docs directory...")
        self.create_build_directory()

        print("📦 Copying static assets...")
        self.copy_static_assets()

        print("🔄 Processing HTML files...")
        self.process_html_files()

        print("✅ Build complete! Files are ready in the 'docs' directory")
        print(f"📋 Deploy the contents of the 'docs' directory to GitHub Pages")


if __name__ == "__main__":
    builder = WebsiteBuilder()
    builder.build()