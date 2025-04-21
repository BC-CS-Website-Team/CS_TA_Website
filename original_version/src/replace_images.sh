#!/bin/bash

# Move optimized images to replace originals
for img in images/optimized_*; do
    if [[ -f "$img" ]]; then
        # Get the original filename by removing the "optimized_" prefix
        original_name=${img#images/optimized_}
        echo "Replacing $original_name with optimized version..."
        mv "$img" "images/$original_name"
    fi
done

echo "All images have been replaced with their optimized versions."
echo "Original images are backed up in the images_backup directory."
