# Disk Partition

A **disk partition** is a logically separated region of a physical storage drive that the operating system (OS) treats as an independent volume. Dividing a drive into partitions — a process called **disk partitioning**, sometimes referred to as disk slicing — allows a single physical device to function as though it were multiple distinct drives. Each partition can hold its own file system, and the OS manages them independently even though they share the same hardware.

Partitioning serves a wide range of purposes: organizing files, isolating the OS from user data, enabling multiple operating systems on one machine, and protecting system files from being crowded out by rapidly growing data. In enterprise environments, it is also used to maximize scalability, optimize performance, and improve data availability.

---

## Partition Tables: MBR and GPT

Before a drive can be partitioned, it needs a **partition table** — a data structure stored at the start of the drive that tells the OS how the disk is divided. There are two major partition table standards.

### Master Boot Record (MBR)

The **Master Boot Record** is the older of the two standards, used by DOS, earlier versions of Windows, and some older Linux configurations. The MBR is stored in the first sector of the drive and contains both the partition table and the boot loader code responsible for starting the OS. A key limitation of MBR is that it supports a maximum of four primary partitions per drive and cannot address drives larger than 2 TB.

### GUID Partition Table (GPT)

The **GUID Partition Table** is the modern replacement for MBR. GPT is compatible with all current operating systems and removes the four-partition cap — it supports up to 128 primary partitions on most systems and can address drives well beyond 2 TB. Like MBR, GPT uses **logical block addressing (LBA)** to store and retrieve data blocks. On GPT drives, all partitions are treated as primary partitions, making the extended and logical partition distinctions used under MBR effectively obsolete.

---

## Types of Partitions

### Primary Partition

A **primary partition** is a directly accessible partition that can hold a file system or a bootable OS. Under MBR, a drive may have at most four primary partitions. On a bootable drive, the primary partition that contains the boot loader is flagged as the **active partition**, signaling to the firmware where to start the boot process. For drives used purely for data storage rather than booting, a primary partition is not strictly necessary.

### Extended Partition

An **extended partition** is a special type of primary partition that acts as a container for additional subdivisions. It was introduced as a workaround for MBR's four-partition limit. A drive can have only one extended partition, but that extended partition can hold multiple logical partitions. Extended partitions do not hold data directly — they exist solely to contain logical partitions.

### Logical Partition

A **logical partition** exists inside an extended partition. It functions like any other drive volume — files can be stored on it and the OS assigns it a drive letter — but it is technically a subdivision of the extended partition rather than a top-level partition in its own right. Logical partitions were the standard method of exceeding MBR's four-partition cap before GPT became widespread.

### Boot Partition and System Partition

The terms **boot partition** and **system partition** are sometimes used inconsistently across different contexts. In general usage:

- The **boot partition** is a primary partition that stores the system's boot loader — the code that initializes the OS during startup.
- The **system partition** stores the OS directory and its associated files.

Microsoft reverses this terminology: in Windows documentation, the *system partition* holds the boot loader, while the *boot partition* holds the OS files. Both are essential to normal system operation.

### Recovery Partition

Most modern consumer PCs include a small **recovery partition**, typically a few hundred megabytes to a few gigabytes in size. This partition stores tools and system images that allow the OS to be repaired or reinstalled if something goes wrong. It is usually hidden from normal file browsing and managed by the OS or manufacturer.

---

## Common Use Cases

**File organization:** Separating user files from OS files is one of the most common reasons to partition a drive. If the OS partition fills up, user data on a separate partition remains unaffected, and vice versa.

**Dual-booting:** Running two operating systems on the same physical drive — such as Windows and Linux — requires each OS to reside on its own partition. The boot loader detects both partitions at startup and presents a menu to choose which OS to load.

**Data protection:** Keeping user data on a dedicated partition means that reinstalling the OS does not necessarily erase personal files, since the OS and data occupy separate partitions.

**Encryption:** A partition can be encrypted independently. On Windows, BitLocker can encrypt an entire partition without requiring third-party software.

**Swap / page file space:** Operating systems use a dedicated partition or file as virtual memory overflow. Linux systems in particular commonly assign a dedicated **swap partition** for this purpose.

---

## How to Partition a Drive in Windows

Windows includes a built-in utility called **Disk Management** for viewing and modifying disk partitions. No third-party software is required for basic partitioning tasks.

**Step 1 — Check for free space.** Open File Explorer and click on **This PC**. Verify that your C: drive has enough free space to carve out a new partition. If the drive is nearly full, you will need to free up space or upgrade storage before proceeding.

**Step 2 — Back up your data.** Partitioning carries a small risk of data loss if the wrong volume is modified. Before making any changes, create a backup using a Windows backup image, an external recovery drive, or a third-party backup service.

**Step 3 — Open Disk Management.** Click the Start menu, type *partitions*, and select **Create and Format Hard Disk Partitions**. The Disk Management window displays all connected drives and their partitions, with a graphical view at the bottom. A typical Windows PC will show a Recovery partition, a small 100 MB boot information partition, and the main C: partition.

**Step 4 — Shrink the C: drive.** To create space for a new partition, right-click the C: partition and choose **Shrink Volume**. Windows will prompt you to enter how much space to free up, in megabytes (100,000 MB = 100 GB). Enter the desired amount and click **Shrink**.

**Step 5 — Create a new partition.** After shrinking, an **Unallocated** block will appear in the graphical view. Right-click it and select **New Simple Volume** to launch the partition wizard.

**Step 6 — Format the new partition.** The wizard will prompt you to assign a drive letter, a volume label, and a file system format. Choose **NTFS** for a Windows-only partition, or **exFAT** if the partition will be shared with other operating systems. If you plan to install Linux or macOS on the partition, the OS installer will handle formatting automatically.

When complete, the new partition appears in File Explorer as an additional drive. Keep in mind that all partitions on the same physical drive are subject to the same hardware failure — if the drive fails, all partitions on it fail. Regular backups remain essential.

---

## Considerations and Caveats

Partitioning is not always the right solution. If the goal is to encrypt files, it may be simpler to use a tool like VeraCrypt to create a virtual encrypted disk rather than creating a dedicated partition. If the goal is to separate user data from the OS, the main risk is running out of space on one partition while the other has room to spare — a problem that can be more disruptive than having everything on a single volume.

Partitioning is most justified when there is a firm requirement for it, such as dual-booting, OS-level encryption of a specific volume, or compliance requirements mandating that certain data reside on a dedicated volume.

---

### Sources

R-Tools Technology. "What Is a Disk Partition." *R-Studio*, www.r-studio.com/What-is-Disk-Partition.html.

Gordon, Whitson. "Time to Split: How to Partition a Hard Drive in Windows." *PCMag*, 3 Sept. 2024, www.pcmag.com/how-to/how-to-partition-a-hard-drive.

Walker, Shawn. _CompTIA Study Guide A+: 220-1201 and 220-1202_. 3rd ed., 2025.