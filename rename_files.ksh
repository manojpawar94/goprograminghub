#!/bin/bash

# Find all .md files recursively and rename them to .mdx
find /Users/manojpawar/Workspace/virtuai-project/goprograminghub/_posts -type f -name "*.mdx.md" | while read file; do
    # Get the directory and filename without extension
    dir=$(dirname "$file")
    base=$(basename "$file" .mdx.md)
    
    # Rename the file
    mv "$file" "$dir/$base.md"
    
    echo "Renamed: $file to $dir/$base.md"
done

echo "All .md files have been renamed to .mdx"