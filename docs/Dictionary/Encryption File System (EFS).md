---
title: EFS
type: dictionary
tags:
  - windows
  - security
  - storage-drive
  - encryption
sources:
  - CompTIA A+
  - Microsoft Learn
---
The Encryption File System (EFS) provides an additional level of security for files and directories. It provides cryptographic protection of individual files on NTFS file system volumes using a public-key system. Designed with low portability, tied to NTFS and the user, it is ideal for local security and protecting confidentiality.

EFS is recommended for files transfers containing PII, financials, or internal strategies. However, EFS encrypted items are always at risk of being lost completely if the user forgets their login or the encryption key is not exported before OS migrations. Periodic backups of EFS keys are required for both security and compliance.  

- Native to NTFS volumes, EFS encrypts files using keys tied to user’s Windows account.
- Seamless for the owner- once logged in, encryption is decoded on files
- Unreadable if copied to another system or user account w/o encryption certificate.
- Enable: Right-click file > Properties > Advanced > Check “Encrypt contents to secure data”