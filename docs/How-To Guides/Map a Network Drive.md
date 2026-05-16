---
title: Map a Network Drive
type: how-to
tags:
  - networking
  - storage-drive
  - operations
sources:
  - CompTIA A+
---
Mapping drives makes remote folders appear as a local disk in your system's folder navigator — useful for accessing shared centralized data.

### Prerequisites
 - Appropriate share permissions on the server side.
 - Server is online and functioning as expected.
 
1. Open "File Explorer," or your operating system's folder navigator.
2. Click "This PC" in  the left sidebar, then select "Map network drive" from the top ribbon (or right-click "This PC" and choose "Map network drive").
3. Select a drive letter (like Z:) and input the UNC path (ex. \\\\Server01\\Projects ).
4. Enable “Reconnect at login” for persistence .
5. Provide credentials if prompted. For Windows, you can save credentials via **Credential
  Manager** to avoid being prompted again after reboot.

**Common Troubleshooting:**

 - **"Reconnect at login" misconfigured:** If the shared folder becomes inaccessible after reboot, check if “Reconnect at login” was enabled or if the mapped drive is dependent on VPN access.
 - **Typo in the UNC path:** If unable to connect, like getting a "path not found" error, verify the UNC path is accurate. A common pitfall is to forget to include double backslashes at the start of the UNC path (e.g. users typed "\\Server01\\Projects," instead of the correct path "\\\\Server01\\Projects").
 - **Directing to a file and instead of a directory:** Ensure the UNC path  points to a shared folder, not a file.