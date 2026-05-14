---
title: Enable Secure and Effective Permissions in Windows
type: how-to
tags: [windows, NTFS, permissions, EFS, file-system, security]
sources: [CompTIA A+]
---
 Mapping drives makes remote folders appear as a local disk in File Explorer, useful for accessing shared centralized data.
 
1. Open File Explorer.
2. Click “Map network drive”  from the ribbon.
3. Select a drive letter (like Z:) and input the UNC path (ex. \\Server01\Projects).
4. Enable “Reconnect at sign-in” for persistence .
5. Provide credentials if prompted.

**Note**:  If the shared folder becomes inaccessible after reboot, check if “Reconnect at login” was enabled or if the mapped drive is dependent on VPN access.

## Sources
Walker, Shawn. _CompTIA Study Guide A+: 220-1201 and 220-1202_. 3rd ed., 2025.
