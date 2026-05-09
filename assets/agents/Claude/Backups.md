# Backing Up Data

Backup and restore refers to the technologies and practices that ensure redundant copies of data and applications are stored on a secondary device. These copies provide a reliable means of recovering critical information and sustaining operations when faced with a disruption — whether caused by a power outage, cyberattack, human error, or disaster.

---

## Why Back Up?

Data loss can occur at any time and from many causes. Without a backup, lost files, settings, and applications may be unrecoverable. A backup strategy ensures that if the original data is lost or damaged, it can be restored from a secondary copy with minimal disruption.

---

## Backup Types

### Full Backup

A full backup copies every selected file and folder in its entirety. It is the most comprehensive backup type and the foundation of most backup strategies. Because it captures everything, restoration is straightforward — you only need the single most-recent full backup.

**Trade-offs:**
- Slowest to create and most storage-intensive
- Usually scheduled weekly or monthly, often during off-hours or low-traffic periods
- Restoration is fast and simple

### Incremental Backup

An incremental backup only saves changes made since the last backup — whether that was a full or another incremental. This keeps storage use and backup time low.

**Trade-offs:**
- Fastest to create and uses the least storage
- Restoration is the most complex: you need the last full backup plus every incremental since, in order
- A missing or corrupt link in the chain can prevent a complete restore

### Differential Backup

A differential backup saves all changes made since the last full backup, regardless of how many differentials have occurred in between. It sits between full and incremental in terms of storage and time.

**Trade-offs:**
- Grows larger the further you move from the last full backup
- Restoration requires only two files: the last full backup and the latest differential
- Easier to restore than incremental, more storage-efficient than full

### Continuous Data Protection (CDP)

Continuous data protection — sometimes called real-time backup — saves a copy of every change immediately as it occurs. Each copy is stored on a separate device and carefully tracked, providing the most granular protection.

**Trade-offs:**
- Eliminates the gaps between scheduled backups
- Can restore from the most recent change or any specific point in time
- Higher storage and resource overhead

### Bare-Metal Backup

A bare-metal backup captures an entire computer or server — including the operating system, applications, and all data. This allows restoration to a machine with no pre-installed OS or software, making it useful for disaster recovery scenarios where an entire system must be rebuilt.

---

## Hybrid Scheduling

In practice, backup strategies combine types to balance storage, time, and recovery reliability. A common hybrid schedule runs a **full backup on Sunday** and **incremental backups** each day of the week, resetting with a new full the following Sunday. Variations may substitute incremental with differential depending on recovery time requirements.

---

## Backup Storage

The choice of storage medium affects cost, speed, capacity, and recovery time.

| Medium | Strengths | Weaknesses |
|---|---|---|
| **Tape drive** | Low cost, high capacity | Slow read/write; prone to wear; not suited for incremental or CDP |
| **HDD/SSD** | Fast read/write; good for short-RTO scenarios | Not easily scalable; must purchase additional hardware |
| **Backup server** | Centralized; redundant disk configurations | Onsite only; vulnerable to local outages or disasters |
| **Cloud backup** | Flexible; offsite; scalable; protects against local disasters | Dependent on internet connection; ongoing subscription cost |

---

## Recovery Objectives

Before selecting a backup strategy, define:

- **Recovery Time Objective (RTO)** — the maximum time a system can be offline before operations are impacted. Defines how quickly resources must be restored.
- **Recovery Point Objective (RPO)** — the maximum amount of data that can be lost, which determines how frequently backups must run.

Mission-critical systems require aggressive RTOs and RPOs. Less critical systems may tolerate longer recovery windows.

---

## Platform Backup Guides

### Windows

Windows includes a built-in backup tool called **Windows Backup** that backs up folders, installed apps, settings, and credentials to a Microsoft account via OneDrive.

**To back up:**
1. Open **Settings > Accounts > Windows Backup**
2. Enable **OneDrive folder syncing** and select folders to back up (Documents, Pictures, Desktop, etc.)
3. Enable **Remember my apps** to back up installed applications
4. Enable **Remember my preferences** to back up accessibility, Wi-Fi, personalization, and other settings

**To restore:**
- When setting up a new or reset PC, sign in with the same Microsoft account used to create the backup
- Windows detects existing backups and prompts to restore folders, apps, and settings
- Files can be restored at any time by signing in to OneDrive

### iPhone (iOS)

iPhones can be backed up to **iCloud** or to a computer via **Finder** (macOS) or **iTunes** (Windows).

**iCloud backup:**
1. Go to **Settings > [your name] > iCloud > iCloud Backup**
2. Enable **Back Up This iPhone**
3. iCloud backs up automatically when the device is connected to power, locked, and on Wi-Fi
4. Tap **Back Up Now** to run a manual backup

iCloud backs up device settings, Home Screen layout, app organization, and other data not already synced to iCloud. Free storage is limited — additional storage requires an iCloud+ subscription.

**Computer backup (Mac):**
1. Connect iPhone via cable
2. Select your iPhone in the **Finder** sidebar
3. Click **General**, then select **Back up all of the data on your iPhone to this Mac**
4. Optionally enable **Encrypt local backup** to include passwords and Health data
5. Click **Back Up Now**

**Computer backup (Windows):**
1. Connect iPhone via cable
2. Open **iTunes** and click the iPhone button
3. Click **Summary > Back Up Now**

### Android

Android backs up data to a linked **Google Account** using Google One Backup.

**To enable automatic backup:**
1. Open **Settings > Google > All services**
2. Under **Backup and restore**, tap **Backup**
3. Toggle **Backup by Google One** on

Google One Backup covers messages, contacts, app settings, device preferences, and photos/videos (via Google Photos). Up to 15 GB of storage is included free. Backups may take up to 24 hours and are encrypted in transit; some data is further encrypted using the device's screen lock PIN, pattern, or password.

**To back up manually:**
1. Open **Settings > Google > All services**
2. Under **Backup and restore**, tap **Backup > Back up now**

**To restore:**
- Sign into a Google Account on a new or reset Android device during setup
- Follow on-screen prompts to restore backed-up data
- The target device must run the same or a later Android version than the source device

---

## Sources

Apple. "Back up iPhone." *iPhone User Guide*, iOS 26, Apple Support, 2026.

Google. "Back up or restore data on your Android device." *Android Help*, Google Support, 2026.

IBM. "What Is Backup and Restore?" *IBM Think*, IBM, 2026.

Microsoft. "Back up and restore with Windows Backup." *Microsoft Support*, Microsoft, 2026.

Walker, Shawn. *CompTIA Study Guide A+: 220-1201 and 220-1202*. 3rd ed., 2025.
