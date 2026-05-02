System Performance Issues: Freezing, High CPU/Ram Usage

Sluggish or unresponsive system is often a matter of management or bg load. Understanding what's consuming resources and why is key.

Performance red flags:

- Startup overload: Too many bg apps launching at boot. Cleanup via Taskmanager > Startup tab
- Resource hogs: Some processes like Chrome or antivirus scans can monopolize CPU or memory. Use Resource Monitor for deeper insight
- Insufficient RAM: Systems c/ less than 8GB may suffer under multitasking or heavy browsers.
- Malware or PUPs: Silently drain resources or degrade performance.
- Thermal throttling: Dusty fans, poor airflow, or failing thermal paste can cause CPUs to downclock.

Additional considerations:

- Run DISM: Use DISM /Online /Cleanup-Image /RestoreHealth to fix deeper corruption
- Free up storage: SSDs near full capacity can experience severe slowdowns. Aim to keep at least 15-20% free
- Switch power plan: On desktops, change from "Power Saver" to "High Performance"

Pro Tip: Windows' built-in Performance Troubleshooter (via Control Panel) can automate basic fixes.

If system frequently freezes while idle or wakes from sleep abnormally, inspect scheduled tasks, hybrid sleep settings, and device power management in Device Manager.

*CompTIA A+*
