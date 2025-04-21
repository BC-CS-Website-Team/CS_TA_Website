#!/bin/bash

# Function to create directory and file
create_file() {
    local dir=$(dirname "$1")
    local file="$1"

    echo "Creating directory: $dir"
    mkdir -p "$dir" || { echo "Failed to create directory: $dir"; exit 1; }

    echo "Creating file: $file"
    touch "$file" || { echo "Failed to create file: $file"; exit 1; }
}

# Main script execution
echo "Starting script execution..."

# Create new pages for Career Development
create_file "src/pages/career-dev/career-resources.html"
create_file "src/pages/career-dev/internship-opportunities.html"
create_file "src/pages/career-dev/conferences.html"

# Create new page for Creative Space
create_file "src/pages/creative-space/workshops.html"

# Create new pages for Diversity in STEM
create_file "src/pages/diversity/diversity-resources.html"
create_file "src/pages/diversity/world-map.html"

# Create component files
create_file "src/components/footer.html"
create_file "src/components/header.html"
create_file "src/components/navigation.html"

echo "Script execution completed successfully!"