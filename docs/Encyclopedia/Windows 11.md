---
title: Windows 11
type: encyclopedia
tags:
  - windows
  - operating-systems
sources:
  - CompTIA A+
---
The most widely used desktop OS, known for its extensive application compatibility, strong enterprise features, and gaming support. Ideal for mixed-use environments but can be resource-intensive and more vulnerable to malware if not secured properly.

## Microsoft Saved Console
Files with the `.msc` extension are administrative tools in Windows with a GUI environment. They can all be launched with the Run dialogue. 

**Performance Monitor** | `perfmon`
An advanced utility for long-term performance tracking and analysis. It enables the creation of Data Collector Sets and real-time monitoring sessions that can log detailed metrics like CPU queue length, disk I/O latency, and memory commit limits. Ideal for diagnosing intermittent performance drops or for validating the impact of software updates or hardware upgrades.

**Registry Editor** |  `regedit`
The Registry stores wide-system and user specific settings. Editing registry keys can fix deep issues or enable hidden features, but small mistakes can render systems unstable. or unbootable. Regedit is use for advanced tasks like removing malware remnants, adjusting system defaults and enforcing configuration policies.

**Services** | `services.msc`
Offers granular control over Windows services that silently keep the system functional. From Bluetooth support to print spoolers, services are the unsung heroes of the OS. With this tool, you can diagnose why a service isn’t starting, adjust its startup behaviour (Automatic, Manual, or Disabled), and optimize resource use by disabling unnecessary background tasks.

**System Configuration** | `msconfig`
Bridges troubleshooting and performance optimization. While Task Manager now handles many startup responsibilities , misconfig remains relevant for boot management. It allows you to enable diagnostic startups, select Safe Boot options, and identify conflicts caused by third-party services or startup apps. The “Boot” tab can control timeout settings and advanced options like the number of processors used during startups.

Task manager handles most startup configs today; msconfig is the classic and og. for deeper startup diagnostics and boot customization. Particularly useful when system boots into black screen, reboots repeatedly or freezes before login. Often used alongside Safe Mode or Clean Boot to determine whether a problem stems from core Windows services or external software.

Here, admins can:

- Enable Diagnostics startup, which loads basic drivers and services only.
- Use Boot tab to configure Safe Boot, reduce boot timeouts or enable logging
- Access the Services tab disable non-Microsoft services
- Launch Task Manager (Windows 10+)

Pro Tip: After troubleshooting, always return `msconfig` to Normal Startup mode to avoid unintended behavior.

---
## Common Windows OS Problems

### Application Crashes
Frequent application crashes can indicate a broader problem with the system.  These errors can range in symptoms, including:

 - Apps suddenly closing without error messages
 - "Program has stopped working" popups
 -  Laggy or glitchy interfaces, esp. during video playback or rendering tasks
- Crashes when opening certain file types or using particular plugins

**Root causes:**

- **Incompatible software versions:** Apps not designed for the OS or hardware.
- Missing dependencies: Such as the correct v. of .NET Framework, Visual C++ Redistributables, or DirectX.
- **User permission issues:** Apps may crash if they can't access needed files or registry keys.
- **Corrupted installations:** Often due to interrupted downloads or disk errors.

**Resolution steps:**

- Use Event Viewer to check application logs and identify crashing modules or fault offsets.
- **Reliability Monitor:** Navigate to Control Panel > Security and Maintenance > Reliability Monitor for a graphical timeline of failures.
- Launch apps in **Compatibility Mode** or as administrator to bypass basic limitations.
- Run System File Checker (`sfc /scannow`) to ensure system integrity.
- Try **Repair** from "Apps & Features" or "Programs & Features" interface.

If the issue persists across installations or in multiple machines, consider contacting the developer or checking for known bugs.

Pro Tip: For legacy apps that no longer receive updates, consider virtualization through Hyper-V, Windows Sandbox, or third party tools. Keeps them functional % compromising main OS.
### Boot Errors
Can prevent Windows from loading properly. Common error messages:
- “Missing Operating System”
- “Bootmgr is missing, Press Ctrl +Alt+Del to restart”
- “No boot device found”
- Endless reboots during POST or right after splash screen
    
Root causes:
- **Incorrect boot order:** BIOS or UEFI may be pointing to wrong disk or partition
- **Corrupted boot configuration data (BCD):** Can happen after improper shutdowns, power failures, or malware infections. 
- Faulty SSD/HDD or disconnected boot drive
- Incomplete OS installations or failed system migrations
- Filesystem damage due to drive failure or power surges

**Troubleshooting toolkit:**

- **Startup Repair:** from Windows Recovery Environment (WinRE)
- **CLI utilities:** /bootrec /fixmbr /rebuildbcd for rebuilding the BCD
- **CHKDSK** and diskpart to check for disk integrity and partition health
- **BIOS diagnostics:** Press F12 or ESC while system runs POST - many systems offer built-in hardware tests


**Pro Tip:** NVMe & RAID systems need the proper drives loaded in WinRE and BIOS settings has right disk type. 

**Proer Tip:** If Safe Mode is accessible, try performing a clean boot or rolling back recent updates to isolate if a failed update driver is to blame.

### BSOD (Blue Screen of Death)
Windows is informing the user that something has gone catastrophically wrong at the system level! Halts the entire OS to prevent further system damage and provides a STOP code with a specific error code number and a descriptive name. It is best practice to always record this code to diagnose the problem.

Common causes include:

- Faulty or outdated drivers
- Failing hardware
- Corrupted system files
- Overheating, unstable clocks or voltage regularities
- Software conflicts


For deeper diagnosis:

- **Event Viewer:** Windows Logs > System - review crash details, driver failures and disk errors
- **Minidump files:** (C:\Windows\Minidump) - small memory dumps created at the time of crash. Use third-party tools to analyze.
- **Windows Reliability Monitor:** Provides history of system stability and failures.
  
Pro Tip: If BSOD is random and error codes vary, suspect failing PSU or RAM.

### Corrupted User Profiles
Logging into Windows and find a bare desktop, missing shortcuts, or apps that won't open correctly. These systems trace to a corrupted user profile or misconfigured system settings.

Corrupted Profiles occur after forced shutdowns, failed updates or malware activity. Signs include:

- Desktop icons and files missing
- Default background and theme reloaded
- Applications behaving as if opened for the first time
- Errors like "You've been signed in with a temporary profile"

Resolution strategies:

- Try logging in with a different user profile to confirm profile corruption
- Use C:\Users to verify the OG profile folder exists
- Copy needed data to new local profile and removed damaged one

### Device Not Recognized
When you input a device and nothing happens, it often boils down to a missing or incompatible driver. If Windows doesn't recognize a device, it may appear in Device Manager with a yellow warning triangle, labeled as an "Unknown device," and sometimes it will not appear at all. The first step should be to look for signs of failure under the appropriate category or in the "Other devices" section. The second step is to uninstall any drives with yellow triangles.

To solve, update or rollback drivers from official manufacturer's website. Note that a new driver  always runs the risk of  introducing new bugs and compatibility issues.

**Update**
To update drivers, navigate to Device Manager:

1. Right-click device > Update driver
2. Choose "Search automatically" or "Browse my computer" for manual install.

**Rollback**
If problems began *after* an update, rollback to restore the previous working driver version:

- Device manager > Properties of device
- Go to the Driver tab
- Click Roll Back Driver (if available) - if greyed out, manually download from manufacturer's website

### Driver Signature Errors
Driver Signature Enforcement: Windows require drivers be digitally signed for security. When attempting to install legacy or third party drivers without proper signature, you may encounter errors like:

- "Windows cannot verify the digital signature for this file."
- Code 52 or Code 39 in Device Manager

Solutions:

- Check manufacturer's website for update, signed drivers
- Temp disable driver signature enforcement (use with precaution and only for trusted software)
- Booting into Advanced Startup > Troubleshoot > Startup Settings > Disable driver signature enforcement

Never install unsigned drivers unless absolutely certain of the source! This compromises system integrity and security.

### System Performance Issues
Sluggish or unresponsive system is often a matter of mismanagement or background load. Understanding what's consuming resources and why is key.

**Performance red flags:**
- Lag between input and output
- Slow application launch or file navigation
- High CPU usage even at idle
- Loud fans and excess heat

**Probable culprits:**

- Startup overload: Too many background apps launching at boot. Cleanup via Task Manager > Startup tab
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

---
## Troubleshooting Tools
### Control Panel
Offers deep, granular tools for managing legacy and enterprise-level system features. It uses hierarchical structure which requires some familiarity, but provides detailed control over every aspect of the OS. Some of the features found here include: 

- **Device Manager** - A Windows utility tool that acts as a dashboard for your computer’s hardware. It lists every device connected - network adapters, disk drives, graphic cards, and more - along with their operational status. Yellow triangles with exclamation marks flag driver conflicts or hardware malfunctions. From this console, you can update drivers, roll them back, disable or uninstall devices, and delve into driver details and power management settings.
  
- **Administrative Tools** - Such as "Change User Account Control settings." **User Accounts** enables the creation, modification and deletion of local user profiles. In corporate settings, it also ties into credential management and enforcement of group policies. 
  
- **Network** - An advanced utility for long-term performance tracking and analysis. It enables the creation of Data Collector Sets and real-time monitoring sessions that can log detailed metrics like CPU queue length, disk I/O latency, and memory commit limits. Ideal for diagnosing intermittent performance drops or for validating the impact of software updates or hardware upgrades.
  
- **Sharing Center** - Allows for more advanced control over adapter properties, DNS configurations, and network profiles.
  
- **System Properties:** Appearance and Personalization, Clock and Region, Ease of Access, and more.

Legacy Windows operating systems used the Control Panel as a central hub for configurations, both for simple setting changes (adjusting the screen brightness)to advanced configurations (uninstalling programs). By Windows 8, Microsoft began to move some features from the Control Panel to a dedicated Settings app.

### Event Viewer
A Windows utility tool that functions as a forensic logbook of the system’s life - recording every boot, warning, crash and success story. Events are categorized as Application, Security, Setup, and System -  with timestamped entries that contain error codes and detailed messages. Allows administrators to retrace errors leading to system failures or subtle misconfigurations.

Powerful for digital forensics. Logs everything from user logins and driver failures to software crashes and system reboots. Each entry includes a timestamp, event ID, severity level and source. Use filters to isolate specific issues and custom views to track recurring problems across multiple machines. The Details tab in log entries often includes the actual file or process responsible for the issue. Cross-reference time stamps with user reports to diagnose the what and the when.

- **System**: Logs OS-level events like service failures, shutdowns or driver load errors.
- **Application**: Tracks software crashes, configuration errors, and user-level faults.
- **Security**: Monitors logins, audit failures, and access control events.

### Recovery Options
Provides a robust system repair mechanism:
  
- **System Restore**: Reverts system to known good state, preserving user data while rolling back system files and settings.
- **Reset this PC**: Re-installs the OS and offers the option to retain personal files or remove everything.
- **Advanced Startup**: Lets you boot into the recovery environment, access command prompt, perform image restores or initiate startup repair sequences.

**Note**: *System reset* reinstalls OS and wipes system files. *Factory reset* restores the device to its original out-of-the-box condition, often reinstalling OEM bloatware and original drivers.
### Reliability Monitor
Provides a graphical timeline of system events and errors. Access via Control Panel or Start menu search. Assigns a "stability index" and logs application crashes, hardware failures and critical updates. Esp. helpful to identify when a problem started and whether it's recurring.

### Resource Monitor
Live diagnostics tool that groups resource usage by process, shows which applications are over-consuming CPU or which service is hogging the disk. The “Network” tab is handy for spotting suspicious outbound connections or traffic spikes.  More detailed view of resource usage, breaking down resource usage by service, application, or process:

- Tracks processes consuming excessive RAM or CPU
- Applications locking a file or causing disk I/O spikes
- Unexpected outbound network connections (potential malware activity)

### Task Manager  
Task Manager (Ctrl + Shift + Esc) is a Windows utility tool that provides comprehensive, real-time overview of everything happening under the hood. It shows running applications and background processes, along with performance graphs on CPU, memory, disk and network usage. You can terminate unresponsive programs with End Task, detect memory leaks or diagnose bottlenecks in real time. The Start-Up tab also provides control of applications that launch during boot. Shows CPU, memory and disk, and network usage. See processes hogging up resources, terminate unresponsive programs and disable unnecessary startup tabs in the Startup tab.

### Settings App
Designed to be more intuitive and user friendly, about 80% of what you use daily will live in the settings app. Focused on common access features like customization, display, resolution, etc., the layout is more visual and accessible to everyday users. Within the Settings app, you can now find common configuration features:

 - **Apps:** Change default applications, adjust programs that launch at startup, add or remove programs, and more.
 - **Network & internet:**  Manage Wi-Fi and Ethernet connections, enable or disable network adapters, configure IP settings, set up a proxy, and launch troubleshooters.
 - **Troubleshoot:** Designed for fast automatic detection of issues. Runs diagnostics, applies applicable fixes and logs the outcome - great for first line solutions. This tool covers internet and network problems, printer connectivity, audio playback failures, Windows Update errors and Bluetooth and peripheral troubleshooting.
 - See your device info, customize OS experience, change Accessibility settings, etc. 