---
title: Encrypted File System (EFS)
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
  **Encrypting File System (EFS)** is a Windows feature that encrypts individual  files and folders on NTFS volumes using keys tied to the user's account. Once logged in, files decrypt transparently — but become unreadable on any other system or user account without the encryption certificate. Designed with low portability and tied to NTFS and the user — ideal for local security and protecting confidentiality.

Recommended for files containing PII, financials, or sensitive internal data. Back up EFS keys before OS migrations; losing them means permanent loss of access to encrypted files. Periodic backups of EFS keys are required for both security and compliance.  

**Enable:** Right-click file > Properties > Advanced > Check "Encrypt contents to secure data."