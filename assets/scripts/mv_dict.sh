#!/bin/bash
dir_one="/media/pico/Coco/Troubleshooting Bible/assets/references/kb/Security"
dir_two="/media/pico/Coco/Troubleshooting Bible/docs/Dictionary"

if [ -f "$dir_one/$1.md" ]; then
    if [ -f "$dir_two/$1.md" ]; then
        echo "A file with the same name already exists in the target directory. Please choose a different name or remove the existing file."
        exit 1
    else
        cp "$dir_one/$1.md" "$dir_two"
        echo "Copied $1.md to $dir_two"
    fi
else
    result=$(find "$dir_one" -name "*$1*" -type f)
    if [ -n "$result" ]; then
        cp "$result" "$dir_two"
        echo "Copied $1.md to $dir_two"
    else
        echo "File not found in current directory. Please check the name and try again."
        echo "File not found in $dir_one. Please check the name and try again."
    fi
fi