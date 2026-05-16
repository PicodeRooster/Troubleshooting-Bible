---
title: File Attributes
type: encyclopedia
tags:
  - file-system
sources:
  - CompTIA A+
---
Flags assigned to files and folders affecting visibility, importance and user interaction. Stored in the file system and interpreted by the OS. You can change these attributes by Files Explorer (right-click > **Properties**) or with the attribute utility in the command line. Enable file extension visibility for security best practice. Cyberattacks use  double extensions to trick users into launching malicious code. Permissions can be inherited from parent folders or assigned manually. 

- **Read-only**: file cannot be modified
- **Hidden**: Makes file invisible in Explorer by default
	- Reveal hidden files with File Explorer > View > Show >  Hidden items
	
- **System**: Treated as protected OS file
	-  Identified by System and often also as Hidden attributes
	- Can view only after disabling “Hide protected operating system files”
	
- **Protected OS Files
	- Concealed behind extra warnings
	- Encompass critical boot records, DLL's, registry hives and driver libraries
	- Access only when necessary, preferably in read-only or via backups
	
- **Archive**: Signals file has changed since last backup
