---
title: Enable Secure and Effective Permissions in Windows
type: encyclopedia
tags: [windows, NTFS, permissions, EFS, file-system, security]
sources: [CompTIA A+]
---
Every device eventually reaches an end of life cycle. Before leaving control, ensure that all sensitive data is completely and truly gone. Deleting files and formatting drive is not sufficient as sophisticated tools can recover data that is not properly destroyed. When a device goes, the data must go with it. Destroy it deliberately and document the process.

One of the most important parts of IT is the secure disposal of data. Mishandled devices can expose companies to breaches, fines and reputation damage. This is part of technicians lifecycle responsibility for all devices. Knowing the right methods for wiping data and when to apply them is part of a technicians job duties.

**Degaussing:** Exposes magnetic drives to strong electromagnetic fields, destroying their magnetic structure. It's fast and irreversible, rendering the drive unusable, but is ineffective on SSDs and optical media.

**Shredding:** Physical destruction using industrial shredders that pulverize hard drives into small fragments. Often used for highly sensitive environments or regulatory compliance (e.g., healthcare, government).

**Reformat:** Erases the file system's structure, making the drive appear empty, but leaves most data intact at the binary level. With recovery tools, files can often be restored unless overwritten.

**Factory Reset:** Restores the system to its original out-of-box configuration. It typically reinstalls the OEM image and removes user files, but may not fully erase all partitions or secure sensitive remnants. On Android or iOS devices, factory resets often leave metadata or residual app data, unless encryption was enabled.

**Wipe:** Uses specialized software to overwrite every sector of the drive multiple times (depending on settings or standards like DoD 5220.22-M), ensuring data cannot be recovered. It's the only method that guarantees actual data sanitization. SSDs, however, require special handling due to wear leveling - use ATA secure erase commands or vendor tools.

**Secure wiping (or destruction):** The only option that can meet most compliance requirements in enterprise settings.

Organizations must follow documented policies for device disposal: verification logs, chain of custody records, and proper environmental practices. In regulated industries, failure to properly destroy data can lead to heavy fines — or worse, data breach traced back to a discarded drive.

---
## Sources

Walker, Shawn. _CompTIA Study Guide A+: 220-1201 and 220-1202_. 3rd ed., 2025.
