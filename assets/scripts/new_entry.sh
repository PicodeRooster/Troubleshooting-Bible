#!/bin/bash
input_path="/media/pico/Coco/Troubleshooting Bible/assets/references"
output_path="/media/pico/Coco/Troubleshooting Bible/docs"

usage(){
    echo "Usage: $0 <source_file_name> <target_file_name>"
    echo "Enter a source and a target output file to cat text from source to output."
}

if [ $# -eq 0 ]; then
    usage
    exit 1
fi

if [ -z "$2" ]; then
    usage
    exit 1
fi

if [ -f "$input_path/$1" ]; then
        if [ -f "$output_path/$2" ]; then
            printf '\n' >> "$output_path/$2" && cat "$input_path/$1" >> "$output_path/$2"
            echo "Appended $1 to $output_path/$2"
        else
            echo "File not found: $output_path/$2"
            exit 2
        fi
else
    echo "File not found: $input_path/$1"
    exit 2
fi