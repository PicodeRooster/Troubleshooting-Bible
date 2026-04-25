# 

# 

# Core 2

## Chapters 6-9

# **Chapter 6: Operating Systems**

* ## OS Types and Purposes

  * ### Workstation OS vs Server OS vs Mobile OS

    OS come in many shapes and forms, and in three distinct categories:  
      
    * **Workstation OS \-** Designed for end-user productivity, optimized for GUIs, software compatibility and user interactivity. Prioritizes responsiveness, application support and local resource management.   
      *Examples:*  
      *Microsoft Windows 11, macOS, Ventura, Ubuntu Linux*  
        
    * **Server OS \-** Engineered to manage network resources, host services and support multiple concurrent connections. Server systems often operate headlessly (no GUI), are optimized for uptime and scalability and include advanced features like Active Directory, web services and file/print sharing.   
      *Examples:*  
      *Windows Server 2022, Red Hat Enterprise Linux, Ubuntu Server*

      
    * **Mobile OS \-** Streamlined for touchscreen interfaces, battery efficiency and app-based environments. They restrict background processes to preserve resources and use sandboxing to enhance security. Mobile OSs are deeply integrated with hardware, cellular networks and app ecosystems, offering simplified but secure computing experience.  
      *Examples:*  
      *Android, iOS*  
        
      sandboxing \- Each app runs in its own isolated environment: it can’t see or touch other apps’ data, it can’t access system resources unless the OS explicitly allows it and if an app crashes or goes rogue, the damage is contained.

      

  * ### Windows, macOS, Linux, ChromeOS, Android, iOS \- Comparison

    Each platform offers pros and trade-offs.

    * **Windows \-** The most widely used desktop OS, known for its extensive application compatibility, strong enterprise features, and gaming support. Ideal for mixed-use environments but can be resource-intensive and more vulnerable to malware if not secure properly.

    * **macOS \-** Exclusive to Apple hardware, is praised for its seamless integration, polished user experience, and robust multimedia tools. It’s favored by creatives and professionals, but lacks native compatibility with certain third-party software and games.

    * **Linux \-** Open source and highly customizable, with distributions tailored to everything from desktops (Ubuntu, Fedora) to servers (Debian, CentOS). It offers excellent stability and security, but a steeper learning curve for new users. 

    * **ChromeOS \-** Built on the Linux kernel, is a lightweight OS designed for cloud-first users. With a simplified interface and reliance on web apps, it excels in education and budget-conscious environments. However, the offline functionalities and app support are limited compared to traditional OSs. 

    * **Android \-** The dominant mobile OS, is open source and widely used on smartphones and tablets. It’s highly customizable and supports a vast app ecosystem, though device fragmentation can pose compatibility issues. 

    * **iOS \-** Apple’s mobile OS, tightly integrated with Apple hardware and the App Store. It delivers a consistent, secure experience with controlled updates, but is more restricted in terms of customization and cross-platform flexibility.

  * ### 32-bit vs 64-bit OS Application Compatibility


    A key architectural difference in computing is the distinction between 32-bit and 64-bit operating systems.

    

    * **32-bit OS:** Can address up to 4GB of RAM, which limits its ability to run memory-intensive applications or support multitasking efficiency. These systems are generally found on older machines and are becoming increasingly rare.

    

    * **64-bit OS:** Can theoretically address over 17 billion GB of RAM (depending on OS limits), allowing for better performance, enhanced security features and compatibility with modern applications. In modern IT environments, these systems are the standard.

    

    * **Application Compatibility:** 64-bit systems can run both 64-bit and 32-bit software, while 32-bit OS is limited to 32-bit applications. Device drivers must match the OS architecture \- you can’t use a 64-bit driver on a 32-bit system.

    

    

  * ### Open Source vs Commercial Operating Systems


    These are the two broad licensing categories for operating systems:

    

    * **Open Source:** Offers source code access, allowing users to inspect, modify and redistribute the software. This offers transparency, community-driven development, and often lower costs. Prevalent in academic, scientific and server environments where customization and stability are critical. This model encourages innovation and control.  
      *Examples:*  
      *Linux, FreeBSD*  
        
    * **Commercial:** Developed by private companies and required purchased license, these systems are backed up by dedicated support, polished user interfaces and extensive hardware and software compatibility. Commonly used in business and consumer markets where ease of use and vendor support are important. This model offers streamlined experience and professional support. 

    

    

* ## Windows Installation and Configuration

  * ### Clean Install, Upgrade, and Multiboot Scenarios


    When deploying or refreshing an operating system, it’s important to understand the different installation scenarios available. 

    

    * **Clean Install:** Wiping the storage drive entirely and installing a fresh copy of the OS. Ideal when moving to a new version of Windows or troubleshooting persistent system issues. It ensures that no residual files, malware, or corrupted settings remain \-  but it also requires a full back-up of personal data as everything will be deleted.

    * **Upgrade Installation:** Keeps user files, applications and most settings intact while replacing the core OS with a newer version. Faster and more convenient than clean install, but can carry over existing issues like registry corruption, outdated drivers or malware. Before upgrades, always check for sufficient disk space and back-up critical data. 

    * **Multiboot Configurations:** Allows multiple OSs on the same device. By partitioning the drive and installing different operating systems, users can choose which system to load at startup through a boot menu. The downside is that it demands precise partitioning , bootloader configuration, and a clear understanding of each OSs requirements to avoid conflicts or accidental data loss. 

  * ### Partition and Formatting: NTFS, FAT32, exFAT

    Before installing an OS and or storing files, drives must be partitioned and formatted. During installation, choosing the correct format ensures a stable and accessible OS environment. Selecting the right file system affects performance, compatibility, and features like security or backup support.

    

    **Partition \-** A section of a storage driver treated as an independent volume. 

    

    * **NTFS (New Technology File System) \-** Default for Windows installations \- it supports large files, access control, encryption, file compression, shadow copies and journaling. Highly reliable and secure for modern systems.

    * **FAT32 \-** Older format with a 4GB per file limit and 2TB volume limit. Widely supported in legacy systems, making it useful for USB drives and basic removable storage.

    * **exFAT (Extended File Allocation Table) \-** Bridges the gap between NTFS and FAT32 \- it supports large files without the overhead of NTFS and is ideal for cross-platform usage, especially on flash drives used between Windows and macOS systems.

  * ### Edition Differences: Windows Home, Pro, Enterprise, Education

      
    Windows is available in different editions designed for specific use cases and organizational needs.  
      
    * **Windows Home:** For casual users and home environments. Offers essential features like Windows Defender, Microsoft Edge, Cortana, and Windows Hello, but lacks advanced administrative tools. 

    * **Windows Pro:** All the features of Home \+ BitLocker, Hyper-V, Remote Desktop, Group Policy Editor, and the ability to join domains. It’s the preferred choice for IT professionals, power users and small businesses. 

    * **Windows Enterprise:** Tailored for large-scale organizations. Includes all the Pro features \+ AppLocker, Windows To Go, Credential Guard, and DirectAccess. It’s available through volume licensing.

    * **Windows Education:** Built on Enterprise, but licensed for academic institutions. It includes similar features to Enterprise, with additional privacy settings and simplified deployment tools for classrooms.

  * ### Regional Settings, Workgroup/Domain Join, Time Zone

    During the installation of Windows, initial configuration steps can impact the user experience, connectivity and operational consistency. They play a vital role in ensuring smooth system performance, prevents later complications and demonstrates attention to detail from IT professionals.

    

    * **Regional Settings \-** determines how the OS handles date and time formats, language, keyboard layout, and system locale.

    * **Workgroup \-** A simple decentralized network used primarily in small offices or homes. All computers are peers and maintain their own user accounts. 

    * **Domain \-** A centralized network controlled by a domain controller, common in corporate settings. It allows unified user credentials, policy enforcement and centralized resource management.

    * **Time Zone Configuration \-** Vital, especially in networked environments. Incorrect time settings can lead to authentication failures, inaccurate log entries, and synchronization issues with cloud services or scheduled tasks.

* ## Command-Line Tools and Scripting Basics

  * ### Command Prompt Basics: dir, copy, xcopy, robocopy


    Windows Command Prompt is a CLI used by technicians to execute administrative tasks, troubleshoot issues, and automate workflows.

    

    dir 	lists the contents of a directory, displaying files, folders with their sizes, creation dates and attributes.

    

    copy  duplicates one or more files from one location to another, but does not support advanced options like directory recursion.

    

    xcopy enhanced version of copy that allows transfers of entire directories and subdirectories. Uses flags like /E for copying all subfolders and /Y to skip overwrite prompts.

    

    robocopy (Robust File Copy) the preferred tool for large or complex file transfers. Supports resume capabilities, multithreading, and mirroring functions like /MIR . Always test with /L switch to simulate actions without making changes \- this prevents accidental overwrites or deletions during deployment.

    

  * ### Network Commands: ipconfig, ping, netstat, nslookup


    Provide essential insights into network settings and connectivity problems.

    ipconfig  shows’s system’s IP address, subnet mask, default gateway, and DNS settings. The /all flag expands to include MAC addresses, DHCP lease info, and more.

    

    ping  sends ICMP echo requests to test reachability. Pinging a basic website like google.com confirms both internet access and DNS resolution. 

    

    netstat  displays active TCP/UDP connections, listening ports, and routing tables. Running netstat \-a \-n reveals real-time traffic in numeric form, making it easier to identify suspicious connections.

    

    nslookup  verifies DNS functionality by resolving domain names to IP addresses. It can also query specific DNS servers and diagnose misconfigurations.

    

  * ### Disk and System Tools: chkdsk, sfc, diskpart, format


    Disk management and system repair command tools are vital for IT professionals \- especially useful when preparing drives for installation or responding to system corruption. 

    

    chkdsk  scans disks for logical and physical errors. The /f switch fixes file system issues, while /r identifies and recovers readable data from bad sectors.

    

    sfc /scannow  invokes the System File Checker to detect and repair corrupted Windows system files using cached versions stored in a protected directory.

    

    diskpart  is a command-line disk partitioning tool. It can list drives (list disk), select them (select disk 0), and create or delete partitions. Use with caution \- incorrect usage can cause irreversible data loss.

    

    format  prepares storage devices with a specific file system such as NTFS or FAT32

    

  * ### macOS / Linux Terminal Commands: ls, pwd, sudo, chmod


    Understanding permission models, file structure and UNIX-like systems is invaluable for cross-platform support and server environments.


    ls  lists files and directories; \-l or \-a display detailed views and hidden files

    

  pwd shows the current working directory path

    

  sudo  grants administrative privileges to run commands that modify system files or settings


  chmod  changes file or folder permissions; a common use is making a file executable: chmod \+x backup.sh

* ## Administrative Tools and System Utilities

  * ### Task Manager, Event Viewer, Device Manager

      
    Utilities for daily systems diagnostics and troubleshooting.

    
    * **Task Manager \-** Comprehensive, real-time overview of everything happening under the hood. Shows running applications and background processes, along with performance graphs on CPU, memory, disk and network usage. You can terminate unresponsive programs with End Task, detect memory leaks or diagnose bottlenecks in real time. The Start-Up tab also provides control of applications that launch during boot. 

    

    * **Event Viewer \-** Functions as a forensic logbook of the system’s life \- recording every boot, warning, crash and success story. Events are categorized as Application, Security, Setup, and System \-  with timestamped entries that contain error codes and detailed messages. Allows administrators to retrace errors leading to system failures or subtle misconfigurations.

    

    * **Device Manager \-** The control panel for your computer’s hardware. It lists every device connected \- network adapters, disk drives, graphic cards, and more \- along with their operational status. Yellow triangles with exclamation marks flag driver conflicts or hardware malfunctions. From this console, you can update drivers, roll them back, disable or uninstall devices, and delve into driver details and power management settings. 

    

  * ### Services, System Configuration (msconfig)


    * **Services.msc \-** offers granular control over Windows services that silently keep the system functional. From Bluetooth support to print spoolers, services are the unsung heroes of the OS. With this tool, you can diagnose why a service isn’t starting, adjust its startup behaviour (Automatic, Manual, or Disabled), and optimize resource use by disabling unnecessary background tasks.

     

    * **System Configuration (msconfig) \-** Bridges troubleshooting and performance optimization. While Task Manager now handles many startup responsibilities , misconfig remains relevant for boot management. It allows you to enable diagnostic startups, select Safe Boot options, and identify conflicts caused by third-party services or startup apps. The “Boot” tab can control timeout settings and advanced options like the number of processors used during startups. 

    

  * ### Performance Monitor, Resource Monitor


    * **Performance Monitor (perfmon) \-** An advanced utility for long-term performance tracking and analysis. It enables the creation of Data Collector Sets and real-time monitoring sessions that can log detailed metrics like CPU queue length, disk I/O latency, and memory commit limits. Ideal for diagnosing intermittent performance drops or for validating the impact of software updates or hardware upgrades. 

    

    * **Resource Monitor \-** Live diagnostics tool that groups resource usage by process, shows which applications are over-consuming CPU or which service is hogging the disk. The “Network” tab is handy for spotting suspicious outbound connections or traffic spikes.

    

  * ### Registry Editor and System Restore


    * **Registry Editor (regedit) \-** Part of Windows toolkit, needs careful use. The Registry stores wide-system and user specific settings. Editing registry keys can fix deep issues or enable hidden features, but small mistakes can render systems unstable. or unbootable. Regedit is use for advanced tasks like removing malware remnants, adjusting system defaults and enforcing configuration policies. 

    

    * **System Restore \-** Unlike full system backup, only affects system files and settings \- not personal files. Especially after installing new drivers, software or updates that destabilize the OS. Restore points are created automatically before major changes or can be triggered manually. Offers a fast effective way to get back to a working state without full recovery operations. 

    

    

* ## Control Panel and Settings Navigation

  * ### Classic Control Panel vs Settings App

    Legacy Windows OSs used the Control Panel as a central hub for configurations, both for simple setting changes (adjusting the screen brightness)to advanced configurations (uninstalling programs). By Windows 8, Microsoft began to move some features from the Control Panel to a dedicated Settings app.   
      
    * **Control Panel \-**  offers deep, granular tools for managing legacy and enterprise-level system features. It uses hierarchical structure which requires some familiarity, but provides detailed control over every aspect of the OS. Some of the features found here include:

    

      * Device Manager  
      * Administrative Tools  
      * Network  
      * Sharing Center  
      * System Properties

    

    * **Settings App \-** designed to be more intuitive and user friendly. Focused on common access features like personalization, display, resolution, etc. The layout is more visual and accessible to everyday users. 

  * ### Key Utilities: Programs & Features, User Accounts, Network Settings

    Frequently used tools from the Windows **Control Panel** and **Settings App.**  
      
    * **Programs & Features \-**  Allows you to view, modify, uninstall or repair installed programs. Also, the gateway to managing Windows Features.

    * **User Accounts \-** Enables the creation, modification and deletion of local user profiles. In corporate settings, it also ties into credential management and enforcement of group policies. 

    

    * **Network Settings \-** splits settings controls between the Control Panel and the Settings app:

    

      * **Settings App:** manage wi-fi and ethernet connections, enable or disable network adapters, configure IP settings, set up a proxy, and launch troubleshooters.

      

      * **Control Panel:** Network and Sharing Center allows more advanced control over adapter properties, DNS configurations, and network profiles. 

      

    \*About 80% of what you use daily will live in the settings app. The remaining 20% is usually critical in enterprise or recovery scenarios. 

  * ### File Explorer Configuration and Hidden Items


    Access common work documents and deeper parts of the OS in the file explorer. Under **View** (Windows 10\) or the ribbon (Windows 11\) you can do the following:

    

    * Display hidden files, folders and drives \- critical to access system-level data (e.g. AppData, ProgramData directories).  
    * Show file name extensions \- useful for devs, or identifying malicious files disguising as documents or media.   
    * Open the **Options** menu to define folder behaviors, change how items are displayed, and choose the default opening location (e.g., “This PC” vs. “Quick Access”)  
    * Customize the **Navigation Pane**  (popular with power users)   
    * Disabling live previews to reduce lag  
    * Sync folders with cloud services

    

    **Pro Tip:** Always enable hidden items before performing cleanup, virus removal, or user profile migration. Many critical files live just out of sight.

  * ### Troubleshooting Tools: Troubleshooter, Recovery Options


    Built-in Windows tools for troubleshooting.


    * **Troubleshooter:** Found in the Settings app, designed for fast automatic detection of issues. Runs diagnostics, applies applicable fixes and logs the outcome \- great for first line solutions. This tool covers:

    

      * Internet and network problems  
      * Printer connectivity  
      * Audio playback failures  
      * Windows Update errors  
      * Bluetooth and peripheral troubleshooting

      

    * **Recovery Options:** Provides a more robust system repair mechanism:  
      * **System Restore:** Reverts system to known good state, preserving user data while rolling back system files and settings.  
      * **Reset this PC:** Reinstalls the OS and offers the option to retain personal files or remove everything.  
      * **Advanced Startup:** Lets you boot into the recovery environment, access command prompt, perform image restores or initiate startup repair sequences.

      

    **Pro Tip:** “System reset” reinstalls OS and wipes system files. “Factory reset” restores the device to its original out-of-the-box condition, often reinstalling OEM bloatware and original drivers. 

    

* ## File and Folder Management

  * ### File Attributes, Extensions, and Permissions (Basic)

    All files and folders have attributes, properties and permission settings that determine how the system handles them.  
      
  * **File Attributes:** flags assigned to files and folders affecting visibility, importance and user interaction. Stored in the file system and interpreted by the OS. You can change these attributes by Files Exporer (right-click \> Properties) or with the attribute utility in the command line. Enable file extension visibility for security best practice. Cyberattacks use  double extensions to trick users into launching malicious code. Permissions can be inherited from parent folders or assigned manually. 


    * **Read-only:** file cannot be modified  
    * **Hidden:** Makes file invisible in Explorer by default  
    * **System:** Treated as protected OS file  
    * **Archive:** Signals file has changed since last backup

    

  * ### Folder Sharing and Mapping Network Drives


    Folder sharing basics:

    * Folder \> Right-click \> Properties \> Sharing tab \> Share  
    * Add specific users or groups and assign access levels (Read, Write, Full-Control)  
    * Use **Advanced Sharing**  to limit the number of simultaneous users, set permissions and define share names.


    **Mapping Network Drives:** Mapping drives makes remote folders appear as a local disk in File Explorer, useful for dept accessing shared centralized data.


1. Open File Explorer  
2. Click “Map network drive”  from the ribbon  
3. Select a drive letter (like Z:) and input the UNC path (ex. \\\\Server01\\Projects)  
4. Enable “Reconnect at sign-in” for persistence   
5. Provide credentials if prompted

   

   **Pro Tip:** If the shared folder becomes inaccessible after reboot, check if “Reconnect at login” was enabled or if the mapped drive is dependent on VPN access.

   * ### Compression and Encryption (EFS, zip folders)

   

     **Zip Compression:** Can be encrypted with password, but not a secure tool, unless combined with strong third-party tools.

     * Right-click desired folder \> Compress to… \> ZIP  
     * Combine multi files into single .zip archive  
     * Saves space and simplifies file transfer  
     * Supported by all platforms, making it cross-compatible

   	

     **EFS (Encryption File System):** Low portability, tied to NTFS \+ user, ideal for local security and protecting confidentiality.

     

     * Native to NTFS volumes, EFS encrypts files using keys tied to user’s Windows account.  
     * Seamless for the owner- once logged in, encryption is decoded on files  
     * Unreadable if copied to another system or user account w/o encryption certificate.  
     * Enable: Right-click file \> Properties \> Advanced \> Check “Encrypt contents to secure data”

   * ### System and Hidden Files, Protected OS Files

   

     * Hidden Files  
       * Files with this attribute are invisible in Explorer by default  
       * Reveal hidden files with File Explorer \> View \> Show \>  Hidden items  
     * System Files  
       * Identified by System and Hidden attributes  
       * Can view only after disabling “Hide protected operating system files”  
     * Protected OS Files  
       * Concealed behind extra warnings  
       * Encompass critical boot records, registry hives and drives libraries  
       * Access only when necessary, pref in read-only or via backups

       

* ## Mobile Operating Systems Overview

  * ### Android vs iOS: Key Differences


    Both dom the mobile landscape \- have significant differences in hardware, software and customization. 

    

    **Android:**

    

    * Open-source  
    * Developed by Google  
    * Runs on devices by various manufacturer’s  
    * More hardware diversity  
    * More variability in user interface, update schedules, and pre-installed apps  
    * Customization with high launchers and widgets  
    * Offers default Google Play and 3rd-party stores  
    * FIle system access is semi-open via file manager  
    * Backup options include Google One and manual tools  
    * Updates vary by device and vendor  
      

      
    **iOS:**

        
    * Developed by Apple  
    * Exclusive to iPhones, iPads and iPods  
    * Tightly integrated with Apple’s hardware  
    * Offers more uniform and controlled user experience  
    * Customization is limited only to Apple’s rules  
    * Only app store is Apple’s proprietary  
    * FIle system access is restricted  
    * Backup options include iCloud and iTunes  
    * Updates are uniform across supported models

    

  * ### App Management and Permissions


    **Android:**

    

    * Install apps through Google Play Store or side-loading APKs (when enabling “Unknown sources”)  
    * Manage permissions through Settings \> Apps \> \[App Name\] \> Permissions. Includes permissions for Camera, Location, Contacts, Microphone, etc. Since Android 6.0, users can approve or deny permissions per feature.  
    * Monitor usage with “Digital Wellbeing” tracks screen time and notifications

    

    **iOS:**

      

    * Install apps only through the App Store \- or in supervised enterprised enviros  
    * Manage permissions through Settings \> Privacy \> \[Feature\] or Settings \> \[App Name\]. Apple prompts for permission the first time an app attempts access  
    * Monitor usage with “Screen Time” tracks screen time and notifications, plus downtime scheduling and app limits.

    

    🛑Excessive permission requests are a red flag. Always guide users to review and limit app access based on necessity. 

    

    **Pro Tip:** Education users about app permissions is a *cybersecurity* defense strategy\! 

  * ### Mobile OS File Systems and Backup Methods


    Modern mobile device file management presents the shift from basic app launchers to full computing platforms. 

    

    **Android:**

    

* File system typically uses ext4 or F2FS.   
* Varies by manufacturer and OS version   
* Newer versions support scoped storage \- apps get isolated directories to improve security  
* File manager apps can explore internal storage and SD cards (if supported)  
* Backup methods include local tools, like Google Drive, OEM tools, and cloud tools like Google One and OEM cloud  
* Manual exports include ADB, SD cards, and 3rd-party apps


  **iOS:**


  * Uses APFS (Apple File System), optimized for SSDs, encryption and snapshots  
  * Direct file system access is tightly restricted  
  * File access is limited to app sandbox, but the “Files” app provides access to iCloud Drive and app-specific folders  
  * Local backups are available through iTunes (via PC/Mac)  
  * Cloud backup is available on iCloud  
  * Manual exports can be done through AirDrop or iCloud Drive

	**Best Practices:**  
	  
	**✅** Always ensure encryption is enabled during backup  
**✅** Cloud backups must be password protected and preferably tied to multi-factor authentication  
**✅** Local backups should be updated regularly and stored on secure devices

* ### Factory Reset, Safe Mode, Recovery Mode

  Troubleshooting often involves resets or booting into diagnostic modes.

  **Factory Reset:**


* Erases all data and restores the phone to its original settings  
* Commonly used to wipe personal data before resale, or fix unresolved software issues.  
* Android: Settings \> System \> Reset \> Factory data reset  
* iOS: Settings \> General \> Transfer or Reset iPhone \> Erase All Content and Settings

  **Safe Mode:**


* Boots device with third-party apps disabled  
* Useful for diagnosing app conflicts or performance issues  
* Android: Press and hold Power \> tap and hold “Power Off” \> Safe Mode  
* iOS: No official Safe Mode \- jailbroken devices can simulate it  
* Useful for diagnosing app conflicts or performance issues

  **Recovery Mode:**


* A special environment for advanced troubleshooting and OS reinstallation  
* Android: Power \+ Volume Up (varies by device) \> Recovery Mode  
* iOS: Connect to PC/Mac with iTunes or Finder, then enter Recovery Mode via button combo.

  **Pro Tip:** Always back up data before performing any of these operations. A factory reset or failed OS restore can wipe critical info permanently. 

# **Chapter 7: Security**

* ## Threats and Vulnerabilities

  * ### Types of Malware: Virus,Worms, Trojans, Rootkits, Ransomware

  Each type of malware has its own behavior, risks and remediation strategy. Beyond definitions, it’s most important to understand how these threats evolve, disguise themselves and persist in the wild.


  * **Virus:** 

  A malicious code that attaches itself to a legitimate program or file. It needs user interaction, such as running the host file, to activate and spread. Once triggered, it can corrupt data, steal info, or damage system files. Viruses often spread through shared documents, email attachments or infected software downloads. Some are simple nuissances, others are data-destroying nightmares. 


  * **Worms:**

  Self-replicating malware. Unlike viruses, they don’t need a host file or user action to spread. They exploit network vulnerabilities and can bring down entire infrastructure by consuming bandwidth and system resources. Notorious examples like WannaCry worm caused billions in damage worldwide, targeting unpatched systems in healthcare and finance. 


  * **Trojan Horse:**

  Trojans disguise themselves as legitimate software. You install what you believe to be a real program and in the background, it installs malware. Trojans don’t replicate but open backdoors, allow remote access, or silently infiltrate data. They’re often used in targeted attacks or as the first step in a broader compromise. 


  * **Rootkits:**

  Stealthy, hide deep in the OS, often modifying core system files to avoid detection. They enable attackers to maintain privileged access without triggering alarms. Rootkits may disable antivirus software, alter logs, and enable malicious activity invisible to administrators. 

   

  * **Ransomware:**

  Encrypts user data and demands a ransom for the decryption key. Common in phishing attacks or exploited vulnerabilities, ransomware can paralyze entire companies. Some variants even threaten to leak stolen data. Prevention, segmentation, and offline backups are your strongest defenses. 

  * ### Social Engineering Attacks: Phishing, Spear Phishing, Impersonation


  Humans using the system are sometimes the biggest threat in cybersecurity. Social engineering attacks exploit human trust, fear, curiosity, or urgency to trick users into compromising their own systems. These attacks are often cost effective, scalable and highly successful. 


  * **Phishing**

  The digital equivalent of casting a wide net — attackers send mass emails appearing from trusted sources to lure users into clicking malicious links or submitting their credentials. Links may lead to clone sites, harvest data, or drop malware payloads.


  * **Spear Phishing**

  A more robust, dangerous type of phishing attack where the attacker researches the victim and crafts personalized messages to trick that user into compromising their data. These attacks often bypass spam filters due to their specificity. 


  * **Impersonation**

  Occurs in-person, over the phone or email, attacker *pretends* to be someone trusted to manipulate the target into giving access credentials or transferring funds. It combines social pressure with limited knowledge to succeed. 


  🚩Unusual tone or poor grammar

  🚩Sense of urgency

  🚩Requests for credentials, wire transfers or private info


    **Pro Tip:** Train users to verify before trusting. Use secondary verification and adopt a “trust but verify"  mindset. 

    

    **Pro Tip:** Set up simulated phishing campaigns to test employee awareness and reinforce best practices. 

  * ### Insider Threats, Zero-Day Attacks, and Logic Bombs


  Some attacks are internal and triggered by conditions only known to the attacker. They are harder to detect and often more damaging because they bypass perimeter defense. 


  * **Insider Threats**

  Employees, contractors or vendors with access to systems who misuse that trust. Can be intentional, or accidental. Some leak intellectual property, others may disable security measures.

   

  * **Zero-Day Attacks**

  Exploit unknown, unpatched vulnerabilities. Esp. dangerous bcs traditional AV and firewalls can’t detect them. Frequently used in advanced persistent threats (APTs) targeting government, enterprises and critical infrastructure. 


  * **Logic Bombs**

  Code hidden with legitimate software that triggers under specific conditions. Often planted by insiders with malicious intent. Silent until activated, making them difficult to catch until it is too late. 


  Mitigation Strategies:

  * Implement Role-Based Access Control (RBAC)  
  * Monitor user behavior through analytics and alerts  
  * Regularly audit code repositories and admin scripts  
  * Rotate credentials and disable accounts immediately upon termination


  * ### Attack Vectors: Email, Web, USB, Bluetooth


  * **Email:** most common vector used for phishing, malware attachments and malicious links. Attackers often exploit poor domain verification and create near identical sender addresses. 


  * **Web:** Drive-by downloads, malicious ads (malvertising) and compromised websites can infect systems just by visiting a page. Users don’t need to click anything, scripts embedded in the site silently launch exploits. 


  * **USB Devices:** Infected flash-drives are a classic trick. Plugging in unknown USBs can auto-detect scripts, spread worms or install rootkits. Some drivers even emulate keyboards to inject commands instantly (e.g. Rubber Ducky attacks)


  * **Bluetooth:** Exploited in close-range attacks like Bluejacking, Bluesnarfing or Bluebugging. Can be used to hijack devices, steal data or inject malware. Public enviros like airports and cafes are high-risk zones. 

  **Best Practices:** 


* Use advanced email filtering and anti-spoofing (SPF, DKMI, DMARC)  
* Train users on safe browsing habits and script blocking tools  
* Disable USB auto-run policies; consider port control software  
* Keep Bluetooth disabled when not actively in use

* ## Authentication Methods and Factors

  * ### Authentication vs Authorization


  Important to know the distinction.


    * **Authentication:** Answers one basic question: *Who are you?* Process of verifying identity through passwords, biometric scans, smart cards and more. When you log into your system, swipe a badge or scan your fingerprint, you are authenticating your credentials.

    

    * **Authorization:** Answers the following question after authentication has been confirmed: *What are you allowed to do?* Once identity is confirmed, the system checks your permissions for files, folders, services and software. 

    

    * **Common Pitfalls:** Many new techs use the two interchangeably or confuse the terms. Mixing them can lead to serious misconfigurations. 

    

    **Pro Tip:** Always implement a strong authentication *before* defining granular authorization. One without the other is like a locked door… with a window left wide open. 

    

  * ### Single Sign-On (SSO), Multifactor Authentication (MFA)


  	Convenience meets security.

  	

    * **Single Sign-On (SSO):** Allows users to log in once and gain access to multiple systems of applications without reentering credentials. This is common in enterprise settings using services like Microsoft 365, Google Workspace or Okra.

    

      * **Benefits**  
        * Simplifies the user experience  
        * Reduces password fatigue  
        * Improves productivity

      * **Risks**  
        * If credentials become compromised, attacker potentially gains access to *everything* \- must always pair SSO with additional security layers

      

    * **Multifactor Authentication (MFA)**

    	Requires at least 2 of the following factors:

    

1. Something you know (password, PIN)  
2. Something you have (smartphone, token)  
3. Something you are (biometric: face, fingerprint, voice)

   Drastically reduces risk of credential or brute-force attacks. Even if the password becomes leaked, the attacker still needs the second factor.

   

   **\*Many real-world security breaches were preventable if MFA had been enabled.** 

   

   **Pro Tip:** Combine both for a powerful balance of usability and security.

   * ### Biometric Methods: Fingerprint, Face, Retina, Voice

   

   New frontier in personal security \- fast, seamless and difficult to fake.

   

     * **Fingerprint Scanning:** Used in phones, laptops and access control systems. Dirty or damaged sensors, and fingers, can cause failure.

      

     * **Face Recognition:** Popular in smartphones and some corporate systems. Can struggle in poor lighting, or with similar looking individuals. Modern algos reduce these issues, but are not foolproof.

     

     * **Retina/Iris Scanning:** Highly accurate, common in high-security enviros. Scans blood vessel patterns or structures. Expensive, and not used often outside specialized sectors. 

     

     * **Voice Recognition:** Analyzes vocal tone and cadence. Convenient, but can be affected by bg noise, illness or recordings 

     

     **Biometric Pros:**

* Difficult to steal or replicate  
* No need to remember passwords

  **Biometric Cons:**

* Can’t be reset like passwords if compromised  
* May raise privacy concerns


  **Pro Tip:** Biometrics should be used as part of MFA, not the only factor. Always give alt login method in case of biometric failure.

  * ### Smart Cards, Tokens, and Mobile Authentication Apps


    * **Smart Cards:** Plastic cards with embedded chips used to store credentials. Common in corporate and government settings. Require a card reader. 

    

    * **Tokens:** These can be hardware (USB keys, key fobs) or software-based (apps that generate temporary codes).

    

      * Hardware tokens generate one-time passwords (OTP)  
      * Software tokens (Google Authenticator, Microsoft Authenticator) produce time-based codes synced with authentication servers.

      

    * **Mobile Authentication Apps:** Combo security and convenience. Some push notifications where the user simply taps “Approve” to log in. 

    

    

| Method | Portable | Reqs. Ext. Dvc | Offline Capable |
| :---- | :---- | :---- | :---- |
| **Smart Card** | **✅** | **✅** | Partially |
| **Hardware Token** | **✅** | **✅** | **✅** |
| **Authenticator App** | **✅** | No (uses phone) | **✅** |

    

    

* ## Access Control Concepts

  * ### Permissions: NTFS, Share, and Effective Permissions


  Effective Permissions is the process ensuring access controls are established with precision, security and policy enforcements in mind. In Windows, NFTS and Share are two main permission systems that work in unison, often overlapping, but have very specific differences. When both NTFS and Share permissions have been applied, the most restrictive of the two takes precedence. If NTFS allows full control, but Share only allows Read access, Read is all the user gets. 


  **NTFS:** operate at the file system level, applied directly to files and folders stored on NTFS-formatted drives. Permissions stay with the data, even if the file is moved to a different folder on the same partition. Includes permissions like read, write, modify, execute and take full control of a file or directory. 


  **Share:** Come into play when a folder is made available over a network. Less detailed \- limited to Read, Change or Full-Control-and affect only users connected remotely. 


  **Best practice:** Apply Full Control at the Share level for all users, the enforce restrictions through NTFS permissions. This provides clarity and centralized control. When in the doubt, use the Effective Access tab under folder properties to verify what a specific user can actually do. 

  * ### User and Group Rights


  Instead of assigning permissions manually to each user, rights are applied to a group, and users inherit those rights through membership. 


  User rights define what a person can do at the system level \- such as logging on locally, accessing a system remotely, shutting down the machine, or changing the system time. Different from file or folder permissions and are typically managed through Local Security Policy or Group Policy in Windows environment. 


  Groups act as containers for permissions. When you assign a permission to a group, every member of that group gains the same level of access. Simplifies administration and improves consistency and auditing. 


  

  * ### Least Privilege Principle and Role-Based Access Control (RBAC)


    The fewer privileges a user has, the less damage they can cause \-intentionally or not. The Principle of Least Privilege states that a user should only be granted permissions they need to do their work, and nothing more. 

    

    This translates to Role-Based Access Control (RBCA). RBCA assigns access based on roles within the organization. These roles are predefined, consistent and easily assigned. RBCA improves efficiency and security, ensures users receive the correct permissions automatically according to their roles. Also makes transitions like promotions or departures, more manageable. Supports compliance frameworks by documenting who has access to what and why. 

    

    To keep these models effective, periodic auditing is required to ensure users don’t accumulate permissions they no longer need. Reviewing and refining role definitions helps ensure that the principle of least privilege remains active, not just theoretical. 

  * ### Physical Security Controls: Locks, Badges, Biometrics


    Physical access is just as important to address as software threats. Physical controls form the first layer of a robust security model. 

    

    * **Locks:** Most basic, but effective. Server racks and data centers should be locked with access limited to authorized personnel. Electronic locks can be paired with access locks and alert systems for better oversight. 

    

    * **Access Badges:** Convenience \+ accountability. Controls who can access sensitive areas and when. Many systems record entry data, invaluable for incident investigations or audits. When properly configured, they enforce time-based or role-based restrictions, making them more versatile than standard keys. 

    

    * **Biometrics:** Adds another dimension to physical security. Unlike badges, biometrics can’t be shared or lost. Particularly valuable in high-compliance industries or facilities where access must be tightly monitored. 

    

    Combining these tools creates **defense in layers.** Each step adds friction for attackers and accountability for auditing. Just like digital security, staff should be trained in awareness \- spotting tailgating, avoid propping doors open and report lost credentials immediately. 

* ## Securing Devices and Workstations

  * ### Password Best Practices and Policies

    Passwords are the first, and sometimes only, line of defense. They remian one of the weakest points in most organizations' security posture. Weak, reused, poorly protected passwords are responsible for a staggering number of breaches each year.  
      
    Strong policies include:  
    * minimum length of 12 or more characters  
    * at least 1 uppercase letter   
    * at least 1 lowercase letter  
    * at least 1 number  
    * at least 1 symbol  
    * Avoid dictionary words or predictable phrases  
    * Must be unique, never reused across systems

    Orgs should also enforce expiration intervals, but with care. Frequent force changes can lead to users creating passwords with predictable variants. Modern guidance encourages password changes only when compromise is suspected. 

    

    Secure password policies also include protections from social engineering. Users should be trained to never share passwords and report suspicious activity immediately. Enforcing complexity and history requirements via Group Policy is just the beginning. Pairing strong passwords with MFA is the best way to ensure compromised credentials do not lead to full system breach. 

  * ### Lock Screens, Timeout Settings, BIOS/UEFI Security

      
    What could happen when a user steps away from their workstation? Screen locks and timeouts act as automatic barriers that kick-in when the workstation is left unattended.   
      
    **Lock screens** ensure that once the session times out, credentials are req to regain access. Prevents unauthorized users from snooping. Reasonable **timeout  intervals** (5 to 15 minutes of inactivity) strikes balance between usability and protection.   
      
    Securing the BIOS/UEFI adds a defense layer beneath the OS. Prevents unauthorized changes to boot order or system configs, which could otherwise be used to bypass OS-level security. BIOS/UEFI passwords and Secure Boot help lock down these settings.   
      
    When theft is concerned, enabling drive-level encryption (i.e., BitLocker) ensures that even if the system is accessed via boot media, the data remains unreadable.

    
  	**\*Lock session / Protect firmware / encrypt storage**


  * ### Antivirus / Antimalware Setup and Scans

      
    Tools designed to detect, quarantine and remove malicious code.  
      
    **Real-time protection:**  system is actively scanning incoming files, monitoring behavior, and blocking threats before they cause damage.   
      
    **Scheduled scans:** Deep scans performed weekly can uncover dormant threats that may have slipped past initial defenses.  
      
    **Updates:** Malware changes daily, and so must the definitions software uses to identify it. Automatic updates should be enabled for both the software and OS itself to ensure protection is up to date.  
      
    Some enviros benefit from centralized management tools that allow administrators to monitor all endpoints, enforce policies, and receive alerts in real time. 


  * ### Data Destruction and Disposal Methods (Degaussing, Shredding, Wiping)

    Every device eventually reaches an end of life cycle. Before leaving control, ensure that all sensitive data is completely and truly gone. Deleting files and formatting drive is not sufficient as sophisticated tools can recover data that is not properly destroyed. When a device goes, the data must go with it. Destroy it deliberately and document the process.  
      
    **Data Wiping:** Suitable for non-sensitive data, involves overwriting the drive using specialized software. These tools write over every sector of the storage device, often multiple times, preventing recovery.  
      
    **Degaussing:** Uses a strong magnetic field to disrupt the magnetic patterns on a drive’s platters, rendering it unreadable.  
      
    **Shredding:** Suitable for non-sensitive data, refers to the act of physically grinding drives into pieces. 

    Orgs must follow doc policies for dvc disposal: verification logs, chain of custody records, and proper environmental practices. In regulated industries, failure to properly destroy data can lead to heavy fines \- or worse, data breach traced back to a discarded drive. 

    

* ## Securing Network Connections

Network security is all about layered defense. Firewalls define boundaries. VPNs protect data in transit. TLS encrypts sessions. Wireless protocols shield radio waves. Smart configurations prevent careless exposure. The more you understand and connect each piece, the more resilient the whole system becomes. 

* ### Firewalls: Host-Based and Network-Based


  Tools used to inspect incoming and outgoing traffic, applying rules to block or allow comm based on defined criteria. Not all firewalls are made equal. 


  **Host-Based:** Installed directly in the OS of the dvc it protects (ex. Windows Defender Firewall, ZoneAlarm). They monitor and control traffic specific to that device and allow for creating fine-tuned rules based on the apps, user or network profile. Esp. imp. for laps., mobile dvcs, or any endpoint that might op. outside the corporate network, such as on pub wifi or home setups.


  **Network-Based:** Protects the entire internal network from external threats, often deployed at the gateway or router level. They analyze traffic moving between diff. segments of the network or between the internal network and the internet. May come as hardware appliances integrated into routers or switches, or as virtualized software within cloud infrastructure. Can apply broad policies based on IP addresses, ports and protocols and are often the first line of defense in enterprise environments.


  **Pro Tip:** Neither type of firewall is sufficient on its own. Combo both: network firewall for perimeter protection and host-based for granular endpoint control. Ensures layered security that addresses both external attacks internal lateral movement. 


  * ### VPNs and Encrypted Tunnels


    Virtual Private Networks (VPNs) are essential tools for securing data in transit, esp. when users op. over untrusted or public networks. A VPN creates a protected, encrypted tunnel that connects the user’s dvc to a remote trusted server \- making all data exchanged unreadable to potential interceptors. 

    

    Particularly valuable in scenarios such as remote work, travel or accessing region-restricted resources. Whether sending confidential client info from a café Wi-Fi or connecting to a corporate file share from home, a VPN ensures that sensitive data cannot be captured by unauthorized third parties. 

    

    Several common **VPN protocols** are in use today:

    

    * **IKEv2/IPsec:** Reliable and fast, ideal for mobile devices that frequently switch networks.   
    * **OpenVPN:** Highly configurable, open-source and supported on nearly every platform.   
    * **WireGuard:** Newer protocol known for its simplicity and performance, quickly gaining popularity in modern deployments. 

    

    It is important to note that VPNs do not inherently prevent malware, phishing or insider threats. Orgs must combo VPN with endpoint protection, MFA and strict access control policies. 

    

    **Pro Tip:** Avoid free VPNs for business use. Many log user activity or offer weak encryption. Stick with enterprise-grade solutions that include centralized management, device posture checks, and support for split tunneling. 

    

  * ### Secure Web Browsing: HTTPS, SSL/TLS


    **HTTPS protocol:** Heart of secure browsing that uses **SSL/TLS** encryption to protect the integrity and confidentiality of web traffic. 

    

    **TLS (Transport Layer Security):** Current standard, replacing less secure predecessor, SSL. When a user visits an HTTPS website, the browser and server perform a handshake using TLS to exchange cryptographic keys. Once verified, a secure channel is established using symmetric encryption, which is both fast and secure for transmitting data. 

    This mechanism prevents eavesdroppers from intercepting login credentials, credit card numbers, or any sensitive information transmitted during sessions. Without HTTPS, this data would be visible in plaintext to anyone monitoring the network. 

    

    Technicians should be able to:

    

* Recognize valid and invalid certificates  
* Force HTTPS redirection for internal web portals  
* Ensure TLS versions meet industry standards (e.g., disabling TLS 1.0 and 1.1)


  TLS plays a vital role outside the browser \- in email encryption (SMTP over TLS), secure APIs, and VPN protocols. A solid understanding of how TLS functions and how to troubleshoot common certificate errors can make the differences between secure environments and one vulnerable to man-in-the-middle attacks.


  * ### Wireless Security Settings: WPA2, WPA3


    Attackers only need proximity to your signal. Over time, encryption standards have evolved to make Wi-Fi harder to exploit. 

    

    **WPA2 (Wi-Fi Protected Access 2):** Became standard after the fall of WEP and is still widely used today. Employs AES encryption and supports two operational modes: Personal (using pre-shared keys) and Enterprise (using a RADIUS server and 802.1X authentication). Not immune to vulnerabilities. 

    

    **WPA3:** Adoption is growing, WPA3 support still varies among devices. Technicians should prioritize deploying WPA3 where hardware allows and retire older, insecure standards like WEP and WPA. Firmware updates play a key role in maintaining security, as many routers receive WPA3 support through updates. The modern to WPA2 successor offering several enhancements:

    

* **SAE (Simultaneous Authentication of Equals):** Protects against offline dictionary attacks.   
* **Individualized Data Encryption:** Encrypts data even on open public networks.   
* **Forward Secrecy:** Prevents past session keys from being exposed if one session is compromised. 

  **Reminder:** A strong passphrase is still essential. Encryption strength is irrelevant if the password is “123456789.”


  * ### Disabling Services and Unused Ports


    Every open port is a potential invitation, and every active service a potential vulnerability. Reducing the attack surface begins with eliminating what is unnecessary. 

    

    Legacy services such as **Telnet, FTP** or **SMBv1** are often enabled by default or left behind after software is removed. These should be identified and disabled unless explicitly needed \- and even then, used only within tightly controlled environments. 

    

    **Disabling Unused Ports:** Prevents external probes from detecting services that could be exploited. For example, blocking inbound port 3389 (RDP) from the internet significantly reduces the risk of brute-force attacks. Port and service scans using tools like **Nmap** or **Advanced IP Scanner** help admins map exposure and verify that only essential services remain accessible. 

    

    This principle applies not only to servers and desktops, but also to **embedded systems** such as printers, cameras and IoT devices. Many of these ship with insecure web interfaces or default credentials and open ports. 

    

    **\*When in doubt, turn it off. If a service isn’t essential to business operations, it shouldn’t be running. Security isn’t just about adding controls \- it’s also about smart subtraction.** 

    

* ## Securing Mobile Devices

  * ### Device Encryption and Remote Wipe

      
    Compact, portable and often unguarded \- prime targets for theft and data compromise. Most important protections for any mobile device are **encryption** and the ability to perform a **remote wipe.**   
      
    **Encryption** converts readable data into scrambled text that can only be decrypted with the correct key. On mobile devices, this usually means **full-disk encryption,** which protects everything stored on the device \- from apps and contacts to emails and cached files. Both Android and iOS now offer built-in encryption features that, when enabled, activate automatically when a screen lock is in place. This ensures that if a device falls into the wrong hands, its contents remain inaccessible without proper authentication.   
    **Remote wipe** is the next line of defense. When a phone is lost or stolen, being able to trigger a remote erase of sensitive data is crucial. This feature is often managed through **Mobile Device Management (MDM)** platforms, allowing IT administrators to:   
      
    * Wipe all data or only corporate-related content (selective wipe)  
    * Enforce automatic wipe after multiple failed login attempts  
    * Monitor wipe status remotely and confirm successful execution

    

    In high-risk enviros \- such as healthcare, finance, or government \-  these features are required. They are compliance requirements, designed to limit liability and safeguards regulated information. 

    

    Together, encryption and remote wipe ensure that even if a device is physically compromised, the data it carries remains protected. 

  * ### App Permissions and Geo-Tracking

    Modern mobile apps are powerful, but also invasive. Many request access to camera, mic, contacts, location and more. Understanding how to manage **app permissions** is essential for protecting user privacy and corporate data.   
      
    Each mobile operating system (Android and iOS) offers a permission model that allows users \- or IT administrators \- to control what each app can do. Common permissions include:  
      
    * Location Services  
    * Camera and Microphone Access  
    * Contact and Calendar Access  
    * Background Data Usage

    

    Technicians must ensure:

    

    * Obtaining user consent where req by law  
    * Using geofencing to enforce location-based restrictions  
    * Disabling location tracking, outside of business hours when possible

    Proper permission management limits the attack surface of mobile apps and helps balance security with user autonomy.

  * ### Screen Lock Options and Biometric Lock


  	Common screen lock options include:


    * **PIN:** Quick and familiar but vulnerable to shoulder surfing  
    * **Pattern:** Easy to remember but often traceable by smudges  
    * **Password:** Stronger if complex, but slower to enter

    Increasingly, users and enterprises are adopting **biometric locks**. These include:

    

    * Fingerprint recognition  
    * Facial recognition  
    * **Retina or iris scanning** (less common in consumer devices)


    Biometric methods offer convenience and security \- though they are not infallible. Factors like lighting conditions, sensor quality, and spoofing techniques can impact their reliability. For this, most dvcs combo biometrics with fallback methods like PINs or passwords. 

    

    Orgs should enforce minimum screen lock reqs through MDM and ensure lock timers are appropriately short (e.g., 1-5 minutes of inactivity). Dvcs w/o a screen lock are essentially unsecured endpoints.

    

  * ### Containerization and Corporate Policy Enforcement

      
    When users rely on a single device for both personal and work tasks, maintaining separation between those worlds is critical. That’s where **containerization** comes in.   
      
    Containerization creates two logically isolated zones within a mobile device:  
      
    * **Work container:** Encrypted, managed by IT, restricted to approved apps and data  
    * **Personal container:** Unmanaged, fully under user control

    

    This approach ensures that corporate data stays within its secure bubble \- even if the user installs games, social apps, or personal cloud backups. Containers can block data sharing between zones, prevent copy-paste, and enforce independent password rules. 

    

    **Corporate policy enforcement** goes hand in hand with containerization. Through MDM, administrators can: 

    

    * Require specific apps for business tasks  
    * Restrict access to corporate resources based on device posture  
    * Remotely lock or wipe the work container w/o affecting personal data  
    * Apply geofencing or time-based restrictions


    These strategies are especially valuable in BYOD scenarios, where employers must respect user privacy while maintaining control over business data.

    

    Containerization is the mobile answer to “zero trust” \- never assume, always verify, and keep business data fenced off no matter what the user is doing elsewhere on the device.

    

    

* ## Incident Response and Prevention

  * ### Signs of Malware Infection or Compromise

    Before you can respond to an incident, you have to know it;’s happenings. Detecting signs of malware or system compromise isn’t always straightforward \- attackers often go to great lengths to hide their presence. However, there are classic indicators that technicians should be trained to recognize.

    Common warning signs include:

    

  * **Unusual system behavior:** Unexpected crashes, system slowdowns, or applications that freeze for no clear reason.   
  * **Pop-ups or unauthorized programs:** The appearance of strange software or security alerts not issued by trusted tools.   
  * **Network anomalies:** High outbound traffic when the user isn’t actively, sending data, or communications with unknown IP addresses.   
  * **Disabled security tools:** If antivirus software is turned off or can’t be updated, that’s a major red flag.  
  * **Unauthorized account access or privilege changes:** Esp. dangerous in shared or domain enviros.  
      
    Technicians should also be on the lookout for **file corruption, unusual login times,** or **changes to system configs** that users can’t explain. The earlier these signs are detected, the easier the incident will be to contain.   
    

  * ### Incident Response Steps: Identify, Contain, Eradicate, Recover


    When a security incident occurs, panic is the enemy of precision. Having a structured **incident response plan (IRP)** ensures that everyone knows what to do, when to do it, and in what order. The classic response cycle is divided into four key phases:

    

1. **Identify \-** Recognize that something is wrong. This could come from user reports, antivirus alerts, intrusion detection systems, or observed anomalies.   
2. **Contain \-** Limit the spread of the threat. This might mean disconnecting a device from the network, disabling a user account, or quarantining malicious files.   
3. **Eradicate \-** Remove the root cause. This could involve running malware removal tools, deleting registry entries or applying patches to close a vulnerability.  
4. **Recover \-** Restore systems to normal operation. This often includes restoring from backups, reimaging systems, and validating system integrity before returning to production. 

   Each of these steps should be executed calmly and methodically. Skipping containment, for instance, can allow malware to spread across systems or leak data even as you’re trying to fix the issue. 

   

   **Pro Tip:** Don’t forget to document everything \-  every action, decision and time stamp. This is essential for both accountability and future prevention. 

   

   * ### Quarantine, Restore, Reimage: When and Why

   

     When malware is detected, choosing the right remediation path depends on the severity of the infection and value of the system’s data:

     

     * **Quarantine:** Used when a file or application is suspicious but not def confirmed malicious. Antivirus tools often move the file to an isolated location, allowing analysis w/o the risk of execution. Quarantine is useful for zero-day malware or false positives. 

     

     * **Restore:** If a system was impacted but not deeply compromised, and a clean, validated backup is available, restoring from a backup can bring the device back to a trusted state. This is common choice for endpoints affected by ransomware with decryptable payloads or accidental corruption. 

     

     * **Reimage:** The most aggressive and thorough approach that involves wiping the system and reinstalling the OS and software from a known-good image. Ideal when:  
       * Malware has rootkit or firmware-level access  
       * There’s evidence of lateral movement or privilege escalation  
       * The system integrity cannot be reliably verified

     

     When in doubt, reimaging is often the safest path, especially in enterprise settings where trust must be absolute. Always pair it with post-recovery hardening: patch the system, change credentials, and review logs for persistence mechanisms. 

   * ### Reporting Protocols and Documentation

   

     An often overlooked part of incident response is **what happens after the cleanup**. Documenting the incident \- clearly completed, and promptly \- is essential for:

* Ensuring regulatory compliance (esp. in healthcare, finance, or gov sectors)  
* Supporting internal investigations and accountability  
* Creating institutional memory to prevent recurrence

  Key components of an incident report should include:


* Time/date of detection  
* System affected and user accounts involved  
* Steps taken at each phase (identification, containment, etc.)  
* Final resolution and recovery status  
* Root cause analysis and lessons learned

  **Incident report templates:** standardized templates of this kind help maintain consistency. In many orgs, reporting must be submitted to compliance officers, legal teams, or even law enforcements if data breaches or criminal activity are involved. 


  Technicians play a critical role here \- not just fixing systems, but providing clear, structured information that becomes part of the organization’s long-term defense strategy. 


  

# **Chapter 8: Software Troubleshooting**

* ## Common Windows OS Issues

  * ### BSOD (Blue Screen of Death): Causes and Logs


    Windows is informing the user that something has gone catastrophically wrong at the system level\! Halts the entire OS to prevent further system damage and provides a STOP code with a specific error code number and a descriptive name. It is best practice to always record this code to diagnose the problem.

    

    Common causes include:

    

    * **Faulty or outdated drivers**  
    * **Failing hardware**  
    * **Corrupted system files**  
    * **Overheating, unstable clocks or voltage regularities**  
    * **Software conflicts**

  	

  For deeper diagnosis:


* **Event Viewer:** Windows Logs \> System \- review crash details, driver failures and disk errors  
* **Minidump files:** (C:\\Windows\\Minidump) \- small memory dumps created at the time of crash. Use third-party tools to analyze.  
* **Windows Reliability Monitor:** Provides history of system stability and failures.

  **Pro Tip:** If BSOD is random and error codes vary, suspect failing PSU or RAM.

  * ### Boot Errors: Missing OS, Boot Loop, Bootmgr Not Found


  	Can prevent Windows from loading properly. Common error messages:


    * “Missing Operating System”  
      * “Bootmgr is missing, Press Ctrl \+Alt+Del to restart”  
      * “No boot device found”  
      * Endless reboots during POST or right after splash screen

      **Root causes:**

      

    * Incorrect boot order: BIOS or UEFI may be pointing to wrong disk or partition  
    * Corrupted boot configuration data (BCD): Can happen after improper shutdowns, power failures, or malware infections.   
    * Faulty SSD/HDD or disconnected boot drive  
    * Filesystem damage due to drive failure or power surges

  **Troubleshooting toolkit:**


  * **Startup Repair:** from Windows Recovery Environment (WinRE)  
  * **CLI utilities:** /bootrec /fixmbr /rebuildbcd for rebuilding the BCD  
  * **CHKDSK** and diskpart to check for disk integrity and partition health  
  * **BIOS diagnostics:** Press F12 or ESC while system runs POST \- many systems offer built-in hardware tests

    **Pro Tip:** NVMe & RAID systems need the proper drives loaded in WinRE and BIOS settings has right disk type. 

    

    If Safe Mode is accessible, try performing a clean boot or rolling back recent updates to isolate if a failed update driver is to blame.

    

  * ### Application Crashes and Compatibility Problems


    Frequent app crashes and compatibility errors often reflect deeper misconfig in the enviro.

    

    **Common signs:**

    

    * Apps suddenly closing w/o error messages  
    * “Program has stopped working” popups  
    * Laggy or glitchy interfaces, esp. during video playback or rendering tasks  
    * Crashes when opening certain file types or using particular plugins  
      

    **Root causes:**  
      
    * Incompatible software v.: Apps not designed for the OS or hardware  
    * Missing dependencies: Such as the correct v. of .NET Framework, Visual C++ Redustributables, or DirectX  
    * User permission issues: Apps may crash if they can’t access needed files or registry keys  
    * Corrupted installations: Often due to interrupted downloads or disk errors

    

    **Resolution steps:** 

    

    * Use “Event Viewer” to check app logs and identify crashing modules or fault offsets  
    * Reliability Monitor: Navigate to Control Panel \> Security and Maintenance \> Reliability Monitor for a graphical timeline of failures  
    * Launch apps in Compatibility Mode or as administrator to bypass basic limitations.   
    * Run System File Checker (sfc /scannow) to ensure system integrity  
    * Try “Repair” from “Apps & Features” or “Programs & Features” interface

    If the issue persists across reinstalls or across multiple machines, consider contacting dev or checking for known bugs. 

    

    **Pro Tip:** For legacy apps that no longer rcv updates, consider virtualization through Hyper-V, WIndows Sandbox, or third party tools. Keeps them functional ℅ compromising main OS.

    

  * ### System Performance Issues: Freezing, High CPU/Ram Usage


    Sluggish or unresponsive system is often a matter of management or bg load. Understanding what’s consuming resources and why is key.

    **Performance red flags:**

    

* **Startup overload:** Too many bg apps launching at boot. Cleanup via Taskmanager \> Startup tab

* **Resource hogs:** Some processes like Chrome or antivirus scans can monopolize CPU or memory. Use Resource Monitor for deeper insight

* **Insufficient RAM:** Systems c/ less than 8GB may suffer under multitasking or heavy browsers.

* **Malware or PUPs:** Silently drain resources or degrade performance.

* **Thermal throttling:** Dusty fans, poor airflow, or failing thermal paste can cause CPUs to downclock.

  Additional considerations:

* **Run DISM:** Use DISM /Online /Cleanup-Image /RestoreHealth to fix deeper corruption

* **Free up storage:** SSDs near full capacity can experience severe slowdowns. Aim to keep at least 15-20% free

* **Switch power plan:** On desktops, change from “Power Saver” to “High Performance”

  **Pro Tip:** Windows’ built-in Performance Troubleshooter (via Control Panel) can automate basic fixes. 


  If system frequently freezes while idle or wakes from sleep abnormally, inspect scheduled tasks, hybrid sleep settings, and device power management in Device Manager. 




* ## Mobile OS Troubleshooting

Mastering mobile OS troubleshooting requires deep familiarity with both platforms, their quirks and the tools that can bring a misbehaving device back to life. 

* ### App Crashes, Unresponsive Screen, Battery Drain


  

  **App Crashes** stem from**:**


  * Outdated versions incompatible with latest OS  
    * Corrupted cache or app data  
    * Third \-party conflicts, esp c/ dvc permissions or overlays  
    * Buggy updates recently pushed by devs

    

    **Solutions:**

    

    * On Android, clear app cache or data via Settings   
    * iOS may need to delete and reinstall  
    * For both, chk updates or known bugs via app store reviews \- validate if problem is widespread

    

    **Unresponsive screen causes:**

    

    * Low MEM conditions or runaway bg processes  
    * OS-level freezes often resolved by force reboot (hold Vol. Down \+ Power bttns)  
    * Touchscreen calibration or digitizer failures \- less common, imp\! to rule out if issues persist after reboot

    **Battery drain,** or rapid discharge, can result from**:**

    

* BG apps using GPS, data or constant sync  
* Screen brightness and timeout settings  
* Rogue apps that prevent the device from entering sleep mode  
* Corrupted firmware or battery health degradation in older devices


  Tools like  Android’s Battery Usage panel or iOS’s Battery Health can help isolate offenders. If the drain started recently, it’s wise to check which apps were updated or installed in that time frame. 


  

  * ### Wireless Connectivity Issues: Bluetooth, Wi-Fi, Cellular

    Losing connection ability can be persistent or intermittent, each req diff troubleshooting mindset:  
      
    **Bluetooth** issues include:  
      
* Pairing failures (caused by outdated drivers, wrong passkeys, or interference)  
* Unstable connections that drop during calls or music playback  
* Device not showing up in the list of available connections

  Toggle Bluetooth off/on, rmv and repair the dvc, restart both dvcs, On Android, clearing Bluetooth cache can also help.

  **Wi-Fi Problems:**


* Authentication errors due to saved password corruption  
* Poor signal from router placement or interference (microwaves, crowded channels)  
* IP conflicts causing limited connectivity

  Use airplane mode cycling, forget/reconnect to the network, ensure DHCP is enabled. Updating firmware on routers and checking MAC filters may also resolve connectivity problems. 

  **Cellular issues:**


  * No signal or dropped calls (esp indoors or in rural areas)  
    * No data connection even when signal bars appear  
    * SIM card issues not detected or needing re-seating

    

    Reboot the phone, chk APN setts., test another SIM, toggle airplane mode. On dual-SIM phones, verify which slot is active.

    

    If none work, escalate to chking carrier outages or hardware antenna faults.

    

  * ### OS Update Failures and Rollbacks


    Supposed to improve performance and patch vulnerabilities, but sometimes cause more problems than they solve. Failed updates, boot loops, post-update, or apps breaking afterward can send users scrambling for help. 


    Why updates fail:

    

* Insufficient storage space during update  
* Interrupted downloads (loss Wi-Fi or power)  
* Corrupt update files or signed firmware mismatches  
* Conflicts with system overlays or root-level mods (esp on Android)

  Immediate actions take:


* Ensure device has a stable Wi-Fi connection and at least 30-50% free battery  
* Free up space if necessary  
* Attempt update again through OTA (Over The Air) or via computer (iTunes for iOS, manufacturer software for Android)

  Rollback or delay strategies:


* Android: Some OEMs allow rollback to previous versions through offiicial tools. Otherside may req flashing an older firmware (not always supported)

* iOS: Apple limits downgrades to signed versions. Once a version is unsigned, rollback becomes impossible unless the device is jailbroken. 


  **Pro Tip:** Always back up data before an update. It’s one of the most overlooked yet critical practices \- esp when the update reqs full OS image flash.


  * ### Safe Mode, Recovery Mode, Factory Reset


    Essential mobile OS recovery tools used when basic troubleshooting fails:

    

    * **Safe Mode:** Launches dvc with c/ 3rd-party apps disabled, allowing diagnosis of app related conflicts. Use to test if misbehaving apps are causing freezes, crashes, or battery drain. 

    

      * Android: Press and hold Power \> tap and hold “Power Off” \> Select Safe Mode  
      * iOS: No native Safe Mode unless jailbroken; alt is to restart ℅ launching recent apps. 

      

    * **Recovery Mode:** Used to perform system-level repairs or reinstall OS.

    

      * Android: Varies by manufacturer, often involves Power \+ Volume Up  
      * iOS: Connect to a computer, then hold Side \+ Volume Down (model-dependent) until device enters Recovery

      

    From here users can:

* Apply updates  
* Wipe cache partition (Android only)  
* Restore from backup


  * **Factory Reset:** Erases all data and returns the device to the original state. Use as last resort when malware, corruption or misconfiguration cannot be resolved with lesser means. Always verify backups beforehand. 

    

    * Android: Accessible via Settings or Recovery Menu  
      * iOS: Settings \> General \> Transfer or Reset \> Erase All Content and Settings

    

    **Pro Tip:** Inform users that factory resets may introduce OEM bloatware. For corporations, a managed reimage may be preferable. 

    

* ## Malware and Security Software Issues

  * ### Signs of Infection: Popups, Redirects, Slowdown


  	Common signs:


    * **Unexpected popups:** Esp. ads or warnings about fake infections.

    

    * **Browser redirects:** Opening one site but landing somewhere else, or default search engines changing ℅ user consent 

    

    * **System slowdown:** Long boot times, delayed input or sluggish app performance \- esp on systems that were previously fast

    

    * **High network activity while idle:** A sign that malware may be sending data in the bg  
    * **Security tools disabled:** AV or firewall software suddenly deactivated or inaccessible 

    

    The following signs can point to adware, spyware or potentially unwanted programs (PUPS) installed alongside other software:

    

    * **Unfamiliar startup entries**  
    * **Strange services in Task Manager**   
    * **Unknown browser extensions**

    

    

  * ### Antivirus Conflicts, Scan Failures, Quarantine Problems


    * **Antivirus Conflicts:** having multiple installed AVs can cause:

    

      * system slowdowns  
      * duplicate scan processes  
      * false positives or false negatives  
      * files being locked or missed during scanning

      

  Technicians should ensure that only one real-time protection engine is active


    Some suites auto-disable Windows Defender during install, but should be reviewed still.

    

    * **Other problems include:**

    

      * Scan failures  
      * Quarantine problems  
      * Partial disinfection

    

    * **Additional tools to catch missing files:**

    

      * Windows Security’s offline scan  
      * Malwarebytes  
      * ESET Online Scanner

      

  * ### Removing Rogue Software and Toolbars


    Come bundled with legitimate software and trick users into installing them.

    

    **Common signs:**

    

    * New homepage or search engine without permission  
    * Unfamiliar icons in system tray or browser toolbar  
    * Frequent prompts to clean up or speed up PC  
    * Paid upgrades aggressively pushing false benefits

		**Removal:**

* Check Programs and Features for suspicious entries and uninstall them.   
  * Use Autoruns to spot unusual startup entries and services.  
    * Reset browser settings or create a fresh user profile to remove lingering extensions.  
    * Use specialized tools like AdwCleaner, Revo Uninstaller, or HitmanPro for deep cleaning.

    

  **Pro Tip:** Some rogue software reinstalls itself after reboot. In these cases, use Safe Mode or Safe Mode with Networking to perform removal. 


  * ### Recovery Options After Infection


    Malware removal does not immediately return the system to full stability. A strong post-infection recovery plan includes:

    

    * **System restore:** when available, roll back to point before infection. Reverts system files and settings without affecting user data.

    

    * **SFC and DISM scans:** run these commands to repair intact  
      * sfc /scannow   
      * DISM /Online /Cleanup-Image /RestoreHealth 

      

    * **Windows Reset or Refresh:** Modern vs. of Windows allow you to reinstall OS while keeping user data intact. 

    

    * **Review scheduled tasks, startup entries and services:** Ensure no malware components were left behind to trigger infections. 

    

    * **Check hosts file and DNS settings:** Often altered by malware to redirect traffic.

    

    * **Update and patch:** After cleanup, immediately update Windows and all security software to prevent re-exploitation.

    If full trust can’t be recovered, consider **clean reimage** using a known good baseline \- may be faster and safer than trying to fix every subsystem manually.

    

    

* ## Troubleshooting Tools and Techniques

  * ### Task Manager, Resource Monitor, Reliability Monitor


    System slowdowns, freezes or abnormal behaviour. Use these Windows built-in tools to monitor system performance and stability.

    

    * **Task Manager:** (Ctrl \+ Shift \+ Esc) go-to for real-time diagnostics. Shows CPU, memory and disk, and network usage. See processes hogging up resources, terminate unresponsive programs and disable unnecessary startup tabs in the **Startup** tab**.** 

    

    * **Resource Monitor:** more detailed view of resource usage, breaking down resource usage by service, application, or process:

    

      * Tracks processes consuming excessive RAM or CPU  
      * Applications locking a file or causing disk I/O spikes  
      * Unexpected outbound network connections (potential malware activity)

      

    * **Reliability Monitor:** provides a graphical timeline of system events and errors. Access via Control Panel or Start menu search. Assigns a “stability index” and logs application crashes, hardware failures and critical updates. Esp. helpful to identify when a problem started and whether it’s recurring. 

    

  * ### Event Viewer and Interpreting Logs


  Powerful for digital forensics. Logs everything from user logins and driver failures to software crashes and system reboots. Each entry includes a timestamp, event ID, severity level and source. Use **filters** to isolate specific issues and **custom views** to track recurring problems across multiple machines. The **Details tab** in log entries often includes the actual file or process responsible for the issue. Cross-reference time stamps with user reports to diagnose the what and the when. 


    * **System:** Logs OS-level events like service failures, shutdowns or driver load errors.

    

    * **Application:** Tracks software crashes, configuration errors, and user-level faults.

    

    * **Security:** Monitors logins, audit failures, and access control events.

    

  * ### System Configuration (msconfig) for Startup Issues

      
    Task manager handles most startup configs today; msconfig is the classic and og. for deeper startup diagnostics and boot customization. Particularly useful when system boots into black screen, reboots repeatedly or freezes before login. Often used alongside Safe Mode or Clean Boot to determine whether a problem stems from core Windows services or external software.  
      
    Searching msconfig opens System Configuration, which requires administrator privileges to access. Here, admins can:  
      
* Enable **Diagnostics startup,** which loads basic drivers and services only.  
* Use **Boot** tab to configure Safe Boot, reduce boot timeouts or enable logging  
* Access the **Services** tab disable non-Microsoft services  
* Launch **Task Manager** (Windows 10+)


  **Pro Tip:** After troubleshooting, always return msconfig to **Normal Startup** mode to avoid unintended behaviour. 


  * ### Command-Line Tools: sfc, chkdsk, DISM, bootrec


    For deeper system repair and low-level diagnostics:

    

    sfc /scannow : Scans for and repairs corrupted or missing system files using cached copies. Run from elevated Command Prompt as the first step when Windows behaves erratically or built-in apps stop working. 

    

    chkdsk /f /r : Checks file system and physical drive integrity. The /f switch fixes file system errors, while /r attempts the recovery of bad sectors. Useful for slow drive, apps crash or suspected disk corruption. 

    

    DISM /Online /Cleanup-Image /RestoreHealth : Targets deeper corruption that SFC can’t fix by checking the integrity of the Windows image. Pulls clean files from Windows Update or a mounted ISO image. Esp. valuable when SFC repeatedly fails.

    

    bootrec : Accessed from Windows Recovery Environment, can rebuild BCD (Boot Configuration Data), repair the Master Boot Record and fix boot sectors. Critical for resolving boot loops, “Missing OS” errors or start up failures after disk migrations. 

* ## Driver and Hardware-Related Software Issue Failures

Drivers are the communication bridge between hardware and the OS. 

* ### Device Not Recognized, Driver Signature Issues


  When you input a device and nothing happens, it often boils down to a missing or incompatible driver. If Windows doesn’t recognize a device, it may appear in Device Manager with a yellow warning triangle, labeled as an “Unknown device,” and sometimes it will not appear at all. The first step should be to look for signs of failure under the appropriate category or in the “Other devices” section.


  **Driver Signature Enforcement:** Windows require drivers be digitally signed for security. When attempting to install legacy or third party drivers without proper signature, you may encounter errors like:


  * “Windows cannot verify the digital signature for this file.”  
    * **Code 52** or **Code 39** in Device Manager

    

    **Solutions:**

    * Check manufacturer’s website for update, signed drivers  
    * Temp disable driver signature enforcement (use with precaution and only for trusted software)  
    * Booting into Advanced Startup \> Troubleshoot \> Startup Settings \> Disable driver signature enforcement

    

    **Never install unsigned drivers unless absolutely certain of the source\! This compromises system integrity and security.** 

  * ### Rollback and Update Drivers


    A driver update solves many problems, but a new driver can introduce bugs and compatibility issues. 

    

    **Device Manager:**

    

1. Right-click device \> Update driver  
2. Choose “Search automatically” or “Browse my computer” for manual install.

		If problems begin *after* update, roll back:

* Device manager \> Properties of device  
  * Go to the **Driver** tab  
    * Click **Roll Back Driver** (if available) \- if greyed out, manually download from manufacturer’s website

		This restores the previous working driver version. 

		**Pro Tip:** Avoid third-party driver updaters; stick to manufacturer’s support pages.

* ### Printer Driver Conflicts


  	**Symptoms:**


  * Inconsistent printing across different user profiles  
  * Jobs stuck in the queue or spooler crashes  
  * Duplicate printer entries in Device and Printers  
  * “Driver unavailable” messages


  	**Common causes:**


  * Mixing different printer types (e.g. PCL vs. PostScript)  
  * Installing 32-bit driver on 64-bit system OS or vice versa  
  * Incomplete removal of previous printer or driver


  	**Troubleshooting steps:**


  * **Restart the Print Spooler:** services.msc or net stop spooler / net start spooler  
  * **Delete driver packages:** Print Management console or C:\\Windows\\System32\\spool\\drivers  
  * Use **Printer troubleshooter** in Windows Settings  
  * Reinstall using **Universal Print Drivers** when compatibility is an issue

    **Pro Tip:** In network environments, always test driver behaviour under limited user permissions. Some drivers install services or require admin-level access for proper function.

    

  * ### USB and Peripheral Detection Failures

  Can also stem from power-saving features \- review and disable “USB selective suspend” in power plan settings to help maintain stable device connectivity. 


  	**Common scenarios:**


  * USB Device Not Recognized: balloon popups  
  * Device appears and reappears in Device Manager  
  * No visible response when connecting device  
  * One USB port works, another doesn’t

  	**Causes may include:**


  * Power delivery issues (esp c/ unpowered hubs)  
  * Corrupted or outdated USB drivers  
  * Conflicts with third-party software (security tools, VPNs, etc.)  
  * Faulty cables or ports

  	**Troubleshooting steps:**

    

1. Try a different port or device to rule out physical failure  
2. Open Device Manager \> Universal Serial Bus Controllers  
   * Uninstall device with a yellow warning  
   * Restart the system to reinstall drivers automatically

   

3. **USBDeview** 3rd-party tools to clear out old or ghost USB profiles  
4. Check BIOS/EUFI opts like “Legacy USB Support” or “XHCI Hand-off”

* ## Application and Software Configuration Issues

  Issues with apps may not always be the application itself, but how it integrates with the OS and user environment. 

  * ### Corrupted Profiles, Missing Shortcuts, Broken File Associations


  Logging into Windows and find a bare desktop, missing shortcuts, or apps that won’t open correctly. These systems trace to a corrupted user profile or misconfigured system settings. 


  **Corrupted Profiles** occur after forced shutdowns, failed updates or malware activity. Signs include:


  * Desktop icons and files missing  
  * Default background and theme reloaded  
  * Applications behaving as if opened for the first time  
  * Errors like “You’ve been signed in with a temporary profile”


    **Resolution strategies:**

  * Try logging in with a different user profile to confirm profile corruption  
  * Use C:\\Users to verify the OG profile folder exists  
  * Copy needed data to new local profile and removed damaged one


  * ### Registry Corruption and Restore Points


  Small misalignments can cause major dysfunctions. Always backup before making manual changes. Tools like ERUNT or built-in export functions offer safety nets. Corruption in the registry may result in:


  * Inability to launch apps  
  * Settings not saving  
  * Crashes on login or system boot

  Registry corruption is rare, but when it happens it is usually due to:

  * Improper software removal  
  * Forced shutdowns or power loss  
  * Malware tampering  
  * Conflicting tools writing to the same keys

		**System restore:**

1. Type rstrui.exe in Run or search for “System Restore” in the Start menu  
2. Follow prompts to roll back to a point before the issue began

   If restore isn’t available:

   * use regedit to manually examine and export registry branches before editing  
   * consider restoring the registry from a shadow copy or backup if available  
   * As last resort, perform a Windows repair install (in-place upgrade)

   

   * ### Uninstallation Problems and Residual Files

   

   Not all uninstalls do their job completely \- it’s common to find **residual files, folders and registry entries,** long after software has been removed. Leftovers can:

   

     * Trigger errors during new installations  
     * Consume storage or slow boot times  
     * Leave orphaned services or scheduled tasks running in the background 

   

   Signs of incomplete uninstalls include:

* App still appearing in Start menu  
* Services tied to the app still run  
* Reinstallation prompts a “previous version detected” error

  Troubleshooting Steps:

* Use **Programs & Features** or **Apps & Features** to initiate removal  
* Run vendor’s **official uninstaller tool**, if provided (e.g. Office Cleanup Tool)  
* Clean up residual folders in C:\\ProgramData, and the user’s AppData directories  
* Check Task Scheduler or Services.msc for leftover components

  **Pro Tip:** For enterprise settings, consider Group Policy or deployment solutions that standardize installs and removals to avoid fragmentation.

# **Chapter 9: Operational Procedures**

* ## Best Practices for Documentation and Change Management

  * ### Importance of Accurate Documentation (Network, Assets, Licensing)

    With the fast-moving pace of IT, accurate documentation is a necessity. The ability to quickly access up-to-date records can mean the difference between a 5-minute fix and a costly outage. Good documentation saves time, prevents errors and creates continuity \- especially in teams where multiple technicians may touch the same systems over time. 

    

    * **Network documentation:** Without these key details, reconfiguring or onboarding a new device becomes guesswork:

      * IP address assignment  
      * Switch and router configurations  
      * VLAN IDs  
      * SSID passwords  
      * Wireless controller settings

    * **Asset documentation:** Tracks the physical and virtual devices in your environment \- desktops, laptops, servers, mobile devices and virtual machines. Each record should include:

      * Serial number and model  
      * Purchase and warranty dates  
      * Assigned user or department  
      * Current OS and software installed

    * **Software licensing documentation:** The legal and technical rules around using a program. Equally important as Network and Assets, improper tracking can lead to compliance violations, unexpected audits or under-licensed systems. Tools like Microsoft Volume Licensing Service Center (VLSC) or third-party asset management software help centralize license tracking.

  * ### Change Management Process: Request, Review, Approve, Implement

      
    **Change management** is the process of tracking and authorizing appropriate changes as they occur. Every change, no matter how minor, should be documented. Change management is about accountability, traceability and minimizing unplanned downtime.   
      
    The basic workflow follows four phases:  
      
1. **Request \-**  A technician, manager or stakeholder submits a request outlining what change is needed, why it’s necessary and what systems are affected. 

2. **Review \-** The proposed change is reviewed by the appropriate personnel to assess risk, impact and dependencies.

3. **Approve \-** Once risks are mitigated and fallback procedures established, formal approval is granted. The change may be scheduled for a maintenance window.

4. **Implement \-** The change is executed according to the plan. If issues arise, technicians fall back on the document rollback procedure. 

   * ### Tracking Changes and Maintaining Logs

     Documentation extends beyond change management to the record-keeping that follows after.

     

     * **Change logs:** Internal documents that provide a running history of modifications to the environment. It is the living record of the infrastructure's evolution. Each entry log should include:

       * Date & time of change  
       * Who performed it  
       * What was changed  
       * Why the change was made  
       * Outcome and any follow-up actions

     

     * **Audit logging:** Internal record of system-level events to provide technical traceability \- particularly during post-mortem analysis or security reviews.

     \*A shared changelog is sufficient for most small teams. Larger organizations may use automated tools that integrate with deployment systems to track and tag changes as they occur. 

   * ### Network Diagrams and Physical Site Plans

       
     **Network diagrams** and **site plans** are both visual maps for complex infrastructure to demonstrate connections, map dependencies and reveal bottlenecks, before, during and after implementation. They are essential when onboarding new technicians, responding to outages, or communicating with non-technical stakeholders.  
       
     **Tools:** Microsoft Visio, Lucidchart, Netbox  
       
     * **Network diagrams:**  
       * Device names and roles  
       * IPaddressing scheme  
       * Subnetting, VLANs, and routing paths  
       * Firewalls, load balancers, and cloud links

     * **Site plans:**  
       * Equipment locations (rack units, wall mounts, IDF/MDF rooms)  
       * Cable runs and conduit paths  
       * Power and cooling layout  
       * Wireless access point coverage zones

       *Best practices:*

- *Maintain both a master copy and a working version.*  
- *Update diagrams after every hardware or topology change.*

* ## Basic Disaster Recovery and Backup Concepts

  * ### Backup Types: Full, Incremental, Differential

  There are three different types of back-ups used for different needs:


    * **Full backup \-** copies every selected file and folder in its entirety, but time-consuming and storage-heavy. Usually scheduled weekly or monthly, often during off hours or low-traffic periods to minimize impact.

    

    * **Incremental backup \-** only saves changes made since the last backup \- whether that was full or incremental. Keeps storage and time requirements low but can complicate recovery. To restore a system, you’ll need the last full backup and every incremental since.That means higher recovery times and higher potential for failure if a link in the backup chain is missing or corrupt.

    

    * **Differential backup \-** sits between the first two \- saves all changes made since the last full backup, regardless of how many differentials occurred. Easier to restore than incremental as you only need the full backup and the latest differential. , but it grows in size and duration the further you move away from the last full backup. 

    

    * **Recovery Point Objective (RPO) \-** how much data loss is acceptable

    

    * **Recovery Time Objective (RTO) \-**  how quickly systems need to be restored

      In practice, a hybrid schedule might involve a full backup on Sunday and incremental backups of the rest of the week, resetting with a new full the following Sunday. 

      

  * ### Backup Storage Locations: Onsite vs Offsite, Cloud


    **Redundancy Across Multiple Locations \-** A robust backup strategy designed to mitigate a wide-spread spectrum of threats \- ranging from hardware failure to natural disasters to cyberattacks. 


    * **Onsite backups \-** Provide quick access and fast recovery times, especially for large volumes of data., but vulnerable to environmental risks.

    

    * **Offsite backups \-** Adds geographic protection; slower to retrieve, but ideal for archiving, long-term storage or compliance with data retention regulations. 

    

    * **Cloud backups \-** Brings automation, flexibility and global availability. These services encrypt and upload data to distributed data centers  with high durability. Many platforms also offer version control, automatic scheduling and monitoring alerts to validate backup success. 

    * **The 3-2-1 Rule** **\-** The industry gold standard for backup storage maintenance: keep **3** copies of your data, on **2** different types of storage media, with at least 1 copy offsite. This approach builds layers of resilience that account for both foreseeable and unexpected scenarios. 

      **Pro Tip:** Document where each backup is stored and who has access to it. Redundancy is only helpful if it’s accessible when needed, as well as secured from unauthorized access. 

      

  * ### Restoration Procedures and Test Recovery


    Backups are only valuable when they can be restored and tested successfully. A solid recovery protocol ensures data is retrieved accurately, promptly, and with minimal disruption. 

    

    A **good recovery plan** includes:

* A detailed inventory of what is being backed up and at what intervals  
* Instructions for restoring full system images, applications, databases and individual files  
* Verified login credentials and security permissions for backup destinations and endpoints  
* Contact lists for backup providers, IT support teams, and key decision-makers

		**\* Testing the recovery plan is crucial**

* **Disaster recovery drills \-** periodic test restores in controlled environments that uncover problems like:

  * Incomplete or corrupted backup sets  
  * Missing software dependencies or activation keys  
  * Restore delays that exceed RTO threshold

    **Best Practice:** Establish a quarterly or semi-annual recovery test schedule. Document results and update your procedures accordingly. A well-tested backup system becomes a competitive asset, not just an emergency lifeline.

    

  * ### Power Redundancy: UPS, Generators, Surge Protection


    Unexpected power loss can cause data corruption, hardware damage and costly downtime. Building power redundancy protects equipment and ensures recoverability in the face of chaos. 

    * **UPS (Uninterruptible Power Supply) \-** acts as a safety buffer during power outages, providing enough battery runtime to allow systems to shut down gracefully, or remain online briefly enough until  a generator kicks in. Higher-end models offer real-time monitoring, remote management, and power conditioning. 

    

    * **Surge protectors \-** shield devices from sudden voltage spikes, which can fry sensitive electronics. Models with high joule ratings, indicator lights, and automatic cutoff features that shut down the outlet once protection fails.

    

    * **Generators \-** Essential for environments requiring extended uptime, especially ones that start automatically. Diesel, propane and natural gas generators all keep servers. network equipment and critical systems online during prolonged outages. Often paired with UPS units to provide a seamless power transition. 

    * **Technician responsibilities:**

      * Conduct regular maintenance and load testing on UPS batteries and generators  
      * Label power zones clearly to identify protected vs. unprotected outlets  
      * Monitor voltage usage to ensure systems remain within safe operating thresholds  
      * Review surge protector replacement dates \- many wear out of time

* ## Safety Procedures and Environmental Controls

  * ### ESD Precautions and Antistatic Equipment

    **ESD (Electrostatic discharge)** is a sudden flow of electric current that occurs when two differently charged objects come into contact. It is a high-risk factor that can harm the technician and destroy critical system components. ESD occurs even when components are powered off, as it is the residual electricity in them that creates a danger for technicians working on machines. 

    

    **ESD precautions** are safety habits put in place by technicians to minimize the risk of human touch coming into contact with electrically charged machine components. These precautions include:


    * Wear antistatic wrist strap, properly grounded to the chassis or a known ground point  
    * Use antistatic mats on a workbench and inside toolkits  
    * Handle components by their edges, avoiding contact with connector pins and circuitry  
    * Work in ESD-safe environments, especially when building or repairing systems

    

    

  * ### Physical Safety:  Cable Management, Fire Safety, Lifting Techniques


    Many problems that occur to physical equipment can be traced back to negligent safety precautions from technicians. Safety-first is part of professionalism: protects equipment, protects people from injuries and reduces liabilities. 


    * **Good cable management:**

    

      **✅** Use labeled Velcro ties, cable trays and racks

      ✅ Color code and document to trace connections under pressure

      

    * **Bad cable management:**

    

      **❌** Obstructs airflow in systems, leading to overheating

			❌ Pose tripping hazards in data centers or office spaces  
			❌ Complicate maintenance and troubleshooting

* **Fire Safety**


  * Keep **Class C fire extinguishers** \- for electrical fires  
    * Never store flammable materials near networking gear  
      * Ensure power outlets aren’t overloaded  
      * Use extension cords only for temporary use  
      * For long term, use hardwired solutions or certified power strips

      

    * **Lifting Techniques**

    

    	OSHA guidelines for lifting heavy items include:

    

      * Bend at the knees, not at the waist  
      * Keep the object close to your body  
      * Team lift anything over 50 lbs  
      * Use carts or lift-assist equipment when available

      

      

  * ### Environmental Monitoring: Temperature, Humidity, Dust


    * **Environmental monitoring:** A disaster prevention method that involves paying close attention to natural hazards that can damage technical equipment. Some best practices for technicians include regular inspection of air filters, verifying cooling fans are operational, and logging temperature/humidity trends. 

    

    * **Temperature:** The top concern as servers, switches, and storage appliances generate significant heat. Keep effective cooling with temperatures around 64° \- 80° F (or 18° \- 27° C). Use sensors to monitor both intake and exhaust zones.

    

    * **Humidity:** Must be balanced \- low humidity increases static electricity and high humidity promotes corrosion and mold. Ideal humidity sits between 40% to 60%. Deploy digital hygrometers and integrate alerts into building management.

    

    * **Dust:** Accumulation blocks airflow, overheats components and can gum up fans/power supplies. Use filtered enclosures, positive airflow design, and establish regular cleaning schedules \- especially in open-floor environments or industrial settings.

    

  * ### MSDS and Proper Handling of Hazardous Materials


    **MSDS (Material Safety Data Sheets):** Documents that outline hazardous materials in IT environments, such as:

    

    * Chemical composition and potential hazards  
      * Storage requirements and handling instructions  
      * First aid procedures in case of exposure  
      * Disposal and spill response guidelines

    

    * Key guidelines for safety procedures include:

    

      * Wear gloves and eye protection when handling toner or battery acid  
      * Store chemicals in labeled, sealed containers away from heat sources  
      * Never throw lithium batteries or old CRTs in standard trash bins \- use designated e-waste procedures  
      * Follow local, state, and federal regulations for hazardous waste disposal

      

      

* ## Professionalism and Communication Skills

  * ### Communication with Users: Active Listening, Empathy, Clarity


    **Communication** is half the job of an IT professional. How you speak to users \- especially under stress or confusion \- can determine whether a ticket is resolved quickly and painlessly, or spirals into frustration, delays and damaged trust. A good rule of thumb is to speak to users the way you would want someone to speak to your parents or friend if they called technical support. *Patience and clarity never go out of style.* 


    * **Active Listening \-**  Don’t interrupt, let the user explain their issue in full before offering solutions. Use paraphrasing to confirm understanding. Take notes and pay attention to tone and hesitations that might reveal unspoken concerns. Active listening builds confidence and helps prevent premature conclusions. 

    

    * **Empathy \-** Remember the user usually isn’t frustrated with *you*, but with the problem disrupting their work or costing time. Your attitude sets the emotional temperature of the conversation. 

    

    * **Clarity \-** Translate technical concepts into accessible language. Avoid acronyms unless you explain them, and adjust your tone to match the user’s familiarity with tech. Clear, respectful language prevents confusion and empowers the user. 

  * ### Escalation Procedures and Ticket Documentation


    Acknowledging your limits as a technician is part of professionalism. The key is to know when and how to escalate an issue without leaving the user stranded or the next technician uninformed. 

    

    * **Escalation:** handing the problem to someone with deeper knowledge. Done correctly, it ensures continuity and avoids wasted time. Done poorly, it creates confusion and a sense of abandonment. Always inform the user clearly about the escalation and the reasons why. 

    

    * **Ticket:** A formal record created to document, track, and manage technical problems, up to the point of resolution. Good ticketing helps future technicians pick up where the last one left off, help IT spot patterns and recurring problems, as well as maintaining a culture of accountability and transparency within the organization. 

    

    A good IT ticket entry includes:

    

      * A clear description of the user’s report in their own words  
      * Your observations and diagnostic steps  
      * Any error messages with timestamps and screenshots, if available  
      * What has already been ruled out or attempted

  * ### Dealing with Difficult Customers Professionally


    Technicians will encounter upset, confused or combative users. Your ability to stay calm under pressure will often matter more than the technical fix. Dealing with tough customers is about restoring trust and staying in control. Strategies for maintaining professionalism include:

    

* **Stay calm and neutral \-** Keep tone even, avoid raising voice, resist the urge to interrupt. Pause before answering when needed.  
* **Acknowledge emotions \-** Even if you don’t agree with the complaint, you can validate the experience.  
* **Redirect to resolution \-**  Shift focus away from the blame and towards the next steps.   
* **Set clear boundaries \-** Remain calm, and refuse hostility or inappropriate behavior. 


  **Harassment:** There is an important distinction between dealing with difficult users and experiencing abuse. If a line is crossed, document the incident and escalate to your supervisor immediately. No technician should tolerate mistreatment.  


  

  * ### Confidentiality, Non-Disclosure, and Ethical Behavior

    IT Professionals are expected to keep internal secrets about an organization's infrastructure, as well as professionalism with their privileged access to sensitive data.  
      
    * **Confidentiality:** Never share, leak or gossip about what you see, including:  
        
      * Files stored on users’ desktops  
      * Internal email conversations  
      * Credentials or network paths  
      * Security incidents or policy violations  
          
    * **Non-disclosure agreements (NDA):**  Applies even when no document is signed. Internal processes, projects under development, and system configurations are considered privileged information.   
        
    * **Ethical Behavior:** Along with confidentiality and NDAs, ethical behaviour also includes:  
        
      * Avoiding c*uriosity browsing \-* digging into folders “because you can”  
      * Not abusing admin rights to install personal software or disable protections  
      * Following chain-of-command procedures when reporting problems or violations

      

      

* ## Secure Disposal of Data and Devices

  * ### Data Destruction Methods: Shredding, Degaussing, Wiping


    **Secure data destruction:** Deleting a file doesn’t necessarily mean it is gone. Sensitive data can still reside on drives long after deletion, posing a serious risk if the device is lost, stolen, or resold. Common destruction methods include:

    

    * **Shredding:** Physical destruction using industrial shredders that pulverize hard drives into small fragments. Often used for highly sensitive environments or regulatory compliance (e.g., healthcare, government).

    

    * **Degaussing:** Exposes magnetic drives to strong electromagnetic fields, destroying their magnetic structure. It’s fast and irreversible, rendering the drive unusable, but is ineffective on SSDs and optical media. 

    

    * **Wiping:** Uses specialized software to overwrite every sector of a drive, rendering previous data unrecoverable. Tools like DBAN (Darik’s Boot and Nuke) or built-in options like Windows’ “Reset this PC” with full clean can handle this. However, SSD’s require special handling due to wear leveling \- use ATA Secure Erase commands or vendor tools.

    

    

  * ### Recycling Electronics and Following Legal Guidelines


    Electronics are filled with toxic materials \- lead, mercury, lithium, cadmium \- that make their disposal both a technical and legal issue. Simply tossing devices into the trash isn’t just irresponsible \- it may be illegal. 

    

    A technician is expected to:

    

    * Identify approved e-waste recycling vendors or municipal drop-off points  
    * Ensure data is destroyed before recycling  
    * Remove and segregate batteries, toner cartridges or CRTs, which require separate handling  
    * Stay informed about regional laws, like the WEEE directive in Europe or RCRA regulations in the U.S.

    * **Asset management policies \-** in corporate environments, recycled devices require a chain of custody form and documented destruction before they can be removed from inventory. Some devices can be refurbished or donated, but only after full data sanitation and hardware checks. A laptop with private employee records should never end up in a community center without a complete wipe and OS reinstall. 

    

  * ### Chain of Custody for Sensitive Devices


    * **Chain of Custody \-**  An internal document, outlining who handled the device, when and why; from decommissioning to destruction. It includes:  
      * Sing-in/out logs when equipment changes hands  
      * Asset tags or serial numbers linked to the user or department  
      * Timestamped documentation of data destruction or transfer to disposal/recycling  
    * Especially critical for   
      * Devices with confidential or regulated data (e.g., legal, financial, medical)  
      * Corporate investigations or legal holds  
      * Audits and compliance with standards like HIPAA or ISO27001

      

  * ### Wipes vs Factory Reset vs Reformat \- What’s Really Erased?


    * **Reformat:** Erases the file system’s structure, making the drive appear empty, but leaves most data intact at the binary level. With recovery tools, files can often be restored unless overwritten.

    

    * **Factory Reset:** Restores the system to its original out-of-box configuration. It typically reinstalls the OEM image and removes user files, but may not fully erase all partitions or secure sensitive remnants. On Android or iOS devices, factory resets often leave metadata or residual app data, unless encryption was enabled.

    

    * **Wipe:** Intentionally, overwrites every sector of the drive multiple times (depending on settings or standards like DoD 5220.22-M), ensuring data cannot be recovered. It’s the only method that guarantees actual data sanitization. 

    

    * **Secure wiping (or destruction):** The only option that can meet most compliance requirements in enterprise settings. 

     

* ## Remote Access and Workstation Security Best Practices

  * ### Remote Access Tools and Support Etiquette

  A standard in the modern IT toolkit allowing technicians to run a long list of troubleshooting and maintenance on other devices from anywhere around the globe. However, this ability also introduces risks if not managed with care. 


    * **Remote Support Etiquette:** Preserves user privacy and preserves reliable reputation. 

    

      * Notify users in advance before sessions and always get clear verbal or written consent.  
      * Clearly communicate intentions using clear language, explaining processes of what you are doing as you go  
      * Avoid navigating from the task unless absolutely necessary \- do not look through folders when unrelated to the troubleshooting fix  
      * Announce when session ends  
      * Keep the user involved, especially if the issue is not resolved immediately.

      

  * ### Lock Screens, Timeout Policies, Authentication Settings


  Proper screen lock policies ensure data is not compromised when a workstation is left unattended. There are three keys defensive layers:


  

    * **Screen Locks:** Configure all systems to automatically lock screen after a period of inactivity \- ideally 5 to 10 minutes. Can be enforced through Windows Group policy or MDM platform. 

    

    * **Timeout enforcement:** Control how long a session remains open.

    

    * **Authentication settings:** Strong complex passwords remain a baseline. Bolster with biometrics, PINs, or MFA.

    

    * **Multi-factor authentication (MFA):** Adds a second layer of defense when authenticating an account's credentials, such as a temporary code sent via email or text.

    

    * **Credential caching:** used in domain environments for offline logins  
    * **Risk-based authentication:** adaptive security  
    * **Time-based access policies:** for contractors and vendors

    

  * ### Managing End-User Rights and Permissions


    **Principle of Least Privileged \-** A security measure limiting access control of resources and tools to only those that are absolutely necessary for the user's role.

    

    **Administrator Roles \-** Users should use standard accounts by default, with administrative rights given only when considering:

    

    * Temporary privilege, only after validated  
    * Be monitored and logged during elevated sessions  
    * Be restricted from installing apps unless vetted by IT

    

  Tools to help enforcement and education:


    * **User Account Control (UAC):** prompts before privileged actions 

    

    * **Group Policy Objects (GPOs):** for setting restrictions across organizational units

    

    * **Role-Based Access  Control (RBAC):** especially used in enterprise and cloud environments

    

    * **Permission creep:** Unchecked permissions that erode security. Over time, users gain access they no longer need. 

    

  * ### Mobile and Offsite Worker Policies


    * **VPN enforcement:** All external connections to company resources should pass through an encrypted tunnel. VPNs shield data in transit and allow administrators to restrict access to internal services. 

    

    * **Device encryption:** Full disk encryption with tools like BitLocker (Windows) or FireVault (macOS) ensures that data remains unreadable if a device is lost or stolen.   
    * **Mobile Device Management (MDM):** Platforms like Microsoft Intune or Jamf let IT remotely enforce policies, push updates, or wipe data from lost devices.

    

    * **BYOD considerations:** Enforce **containerization** \- separating business apps and data from personal ones. This minimizes legal and privacy complications while maintaining control. 

    

    Best practices:

    

      * Disable automatic sync of work emails to unencrypted personal storage  
      * Educate users on safe use of public Wi-Fi, and recommended VPN apps on phones and laptops.   
      * Set strict lock screen policies on all devices \- PINs, biometrics, or both. 

    

    * **Training sessions \-** periodic training reminds users of acceptable use, warning signs of phishing, and what to do in case of a lost device. 

