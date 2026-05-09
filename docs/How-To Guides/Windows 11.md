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
---
### Settings App
Designed to be more intuitive and user friendly. Focused on common access features like customization, display, resolution, etc. The layout is more visual and accessible to everyday users.

**Note**: About 80% of what you use daily will live in the settings app. The remaining 20% is usually critical in enterprise or recovery scenarios.

---




### Troubleshooting toolkit:


- **Startup Repair:** from Windows Recovery Environment (WinRE)
- **CLI utilities:** /bootrec /fixmbr /rebuildbcd for rebuilding the BCD
- **CHKDSK** and diskpart to check for disk integrity and partition health
- **BIOS diagnostics:** Press F12 or ESC while system runs POST - many systems offer built-in hardware tests


**Pro Tip:** NVMe & RAID systems need the proper drives loaded in WinRE and BIOS settings has right disk type. 

**Pro Tip:**If Safe Mode is accessible, try performing a clean boot or rolling back recent updates to isolate if a failed update driver is to blame.


### Control Panel
Offers deep, granular tools for managing legacy and enterprise-level system features. It uses hierarchical structure which requires some familiarity, but provides detailed control over every aspect of the OS. Some of the features found here include: 

- Device Manager
- Administrative Tools
- Network
- Sharing Center
- System Properties

Legacy Windows OSs used the Control Panel as a central hub for configurations, both for simple setting changes (adjusting the screen brightness)to advanced configurations (uninstalling programs). By Windows 8, Microsoft began to move some features from the Control Panel to a dedicated [Settings](Settings%20App.md) app.

### Device Manager

A Windows utility tool that acts as the control panel for your computer’s hardware. It lists every device connected - network adapters, disk drives, graphic cards, and more - along with their operational status. Yellow triangles with exclamation marks flag driver conflicts or hardware malfunctions. From this console, you can update drivers, roll them back, disable or uninstall devices, and delve into driver details and power management settings.

### Effective Permissions
The process ensuring access controls are established with precision, security and policy enforcements in mind. In Windows, NFTS and Share are two main permission systems that work in unison, often overlapping, but have very specific differences. When both NTFS and Share permissions have been applied, the most restrictive of the two takes precedence. If NTFS allows full control, but Share only allows Read access, Read is all the user gets. 

**NTFS:** operate at the file system level, applied directly to files and folders stored on NTFS-formatted drives. Permissions stay with the data, even if the file is moved to a different folder on the same partition. Includes permissions like read, write, modify, execute and take full control of a file or directory. 

**Share:** Come into play when a folder is made available over a network. Less detailed - limited to Read, Change or Full-Control-and affect only users connected remotely. 

**Best practice:** Apply Full Control at the Share level for all users, the enforce restrictions through NTFS permissions. This provides clarity and centralized control. When in the doubt, use the Effective Access tab under folder properties to verify what a specific user can actually do.

### EFS

The Encryption File System (EFS) provides an additional level of security for files and directories. It provides cryptographic protection of individual files on NTFS file system volumes using a public-key system. Designed with low portability, tied to NTFS and the user, it is ideal for local security and protecting confidentiality.

- Native to NTFS volumes, EFS encrypts files using keys tied to user’s Windows account.
- Seamless for the owner- once logged in, encryption is decoded on files
- Unreadable if copied to another system or user account w/o encryption certificate.
- Enable: Right-click file > Properties > Advanced > Check “Encrypt contents to secure data”

### Event Viewer

A Windows utility tool that functions as a forensic logbook of the system’s life - recording every boot, warning, crash and success story. Events are categorized as Application, Security, Setup, and System -  with timestamped entries that contain error codes and detailed messages. Allows administrators to retrace errors leading to system failures or subtle misconfigurations.

Powerful for digital forensics. Logs everything from user logins and driver failures to software crashes and system reboots. Each entry includes a timestamp, event ID, severity level and source. Use filters to isolate specific issues and custom views to track recurring problems across multiple machines. The Details tab in log entries often includes the actual file or process responsible for the issue. Cross-reference time stamps with user reports to diagnose the what and the when.

- **System**: Logs OS-level events like service failures, shutdowns or driver load errors.
- **Application**: Tracks software crashes, configuration errors, and user-level faults.
- **Security**: Monitors logins, audit failures, and access control events.

### Network Settings
Splits settings controls between the Control Panel and the Settings app:

- **Settings App**: manage Wi-Fi and Ethernet connections, enable or disable network adapters, configure IP settings, set up a proxy, and launch troubleshooters.

- **Control Panel**: Network and Sharing Center allows more advanced control over adapter properties, DNS configurations, and network profiles.

An advanced utility for long-term performance tracking and analysis. It enables the creation of Data Collector Sets and real-time monitoring sessions that can log detailed metrics like CPU queue length, disk I/O latency, and memory commit limits. Ideal for diagnosing intermittent performance drops or for validating the impact of software updates or hardware upgrades.

### Programs & Features
Allows you to view, modify, uninstall or repair installed programs. Also, the gateway to managing Windows Features.

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

### Troubleshooter
Found in the Settings app, designed for fast automatic detection of issues. Runs diagnostics, applies applicable fixes and logs the outcome - great for first line solutions. This tool covers:
  
- Internet and network problems
- Printer connectivity
- Audio playback failures
- Windows Update errors
- Bluetooth and peripheral troubleshooting

### User Accounts
Enables the creation, modification and deletion of local user profiles. In corporate settings, it also ties into credential management and enforcement of group policies. Found in Settings >  **Accounts**. 