read -p "Enter a name for this vocabulary entry: " -r title
read -p "Enter target directory (press Enter for default): " -r dir

dir="${dir:-/media/pico/Coco/Troubleshooting Bible/docs/Software}"

echo "Paste your definition below. When finished, type END on a new line and press Enter:"
definition=""
while IFS= read -r line; do
    [[ "$line" == "END" ]] && break
    definition+="$line"$'\n'
done

{
    printf '%s\n' "$definition"
    echo "*CompTIA A+*"
} >> "$dir/$title.md"
