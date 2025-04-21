#!/bin/bash

# Create output directory if it doesn't exist
mkdir -p optimized_images

# Loop through all image files
for img in images/*; do
    if [[ -f "$img" ]]; then
        filename=$(basename "$img")
        echo "Optimizing $filename..."
        
        # Skip SVG files as they are already optimized
        if [[ "$filename" == *.svg ]]; then
            echo "Skipping SVG file $filename"
            continue
        fi
        
        # Optimize the image
        # -strip removes metadata to reduce file size
        # -quality 85 provides good balance between quality and size
        # -resize keeps the image under 1200px width/height while maintaining aspect ratio
        convert "$img" -strip -quality 85 -resize "1200x1200>" "images/optimized_$filename"
    fi
done

echo "Optimization complete! Check the images/ directory for optimized files with 'optimized_' prefix"
