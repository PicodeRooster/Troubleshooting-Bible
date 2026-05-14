---
title: Enable Secure and Effective Permissions in Windows
type: how-to
tags: [windows, NTFS, permissions, EFS, file-system, security]
sources: [CompTIA A+]
---
The process ensuring access controls are established with precision, security and policy enforcements in mind. In Windows, NFTS and Share are two main permission systems that work in unison, often overlapping, but have very specific differences. When both NTFS and Share permissions have been applied, the most restrictive of the two takes precedence. If NTFS allows full control, but Share only allows Read access, Read is all the user gets. 

**NTFS:** These files operate at the file system level, applied directly to files and folders stored on NTFS-formatted drives. Permissions stay with the data, even if the file is moved to a different folder on the same partition. Includes permissions like read, write, modify, execute and take full control of a file or directory. 

**EFS:** The Encryption File System (EFS) provides an additional level of security for files and directories. It provides cryptographic protection of individual files on NTFS file system volumes using a public-key system. Designed with low portability, tied to NTFS and the user, it is ideal for local security and protecting confidentiality.

- Native to NTFS volumes, EFS encrypts files using keys tied to user’s Windows account.
- Seamless for the owner- once logged in, encryption is decoded on files
- Unreadable if copied to another system or user account w/o encryption certificate.
- Enable: Right-click file > Properties > Advanced > Check “Encrypt contents to secure data”

**Share:** Come into play when a folder is made available over a network. Less detailed - limited to Read, Change or Full-Control-and affect only users connected remotely. 

**Best practice:** Apply Full Control at the Share level for all users, the enforce restrictions through NTFS permissions. This provides clarity and centralized control. When in the doubt, use the Effective Access tab under folder properties to verify what a specific user can actually do.