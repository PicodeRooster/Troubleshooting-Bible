cat << description
Copy latest screenshot from PC to destination folder.
description

dir= "/media/saurian-rebel/Coco/Troubleshooting Bible/scratch/imgs"

cd ~/Pictures/Screenshots
newest=$(ls -Art | tail -n 1)
cp "$newest" "$dir"
