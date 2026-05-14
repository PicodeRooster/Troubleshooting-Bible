---
title: Enable Secure and Effective Permissions in Windows
type: encyclopedia
tags: [windows, NTFS, permissions, EFS, file-system, security]
sources: [CompTIA A+]
---
# Android

Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for smartphones and tablets. It is open source and supports a vast app ecosystem across hardware from many manufacturers. Its abstraction layer allows application developers to be hardware agnostic in their design, enabling a consistent programming experience despite significant device diversity.

---

## History

- Originally developed by Android, Inc., acquired by Google in 2005
- Unveiled in 2007 alongside the founding of the **Open Handset Alliance (OHA)** — a consortium of hardware, software, and telecommunications companies devoted to advancing open standards for mobile devices
- Android 1.0 released in 2008
- Android 6.0 Marshmallow released in 2015, introducing per-feature runtime permissions

---

## Architecture

Android uses a layered architecture stack, from the hardware up to user-facing applications.

### Linux Kernel

The foundation of Android. Provides:

- Hardware drivers (camera, audio, keypad, display, Wi-Fi, etc.)
- Process management
- Memory management
- Networking stack
- Power management

Android adds mobile-specific kernel features on top of standard Linux: **wake locks**, the **Binder IPC driver**, a low memory killer, an alarm driver, and a power management wrapper.

### Hardware Abstraction Layer (HAL)

Sits between the Linux kernel and higher software layers. The HAL defines a standard interface for hardware vendors, allowing Android to be agnostic about lower-level driver implementations.

- Implemented as shared library modules (`.so` files), dynamically linked
- Components include: Audio, Camera, Bluetooth, DRM, External Storage, Graphics, Input, Media, Sensors, TV
- Allows hardware functionality to be updated without modifying higher layers

### Libraries and Android Runtime

**Native Libraries** provide frameworks for:

- Web browser rendering (WebKit)
- Database (SQLite)
- Multimedia
- Standard C library (Bionic — a custom implementation optimized for low memory)

**Android Runtime (ART)** replaced the older Dalvik VM and is the managed runtime used by applications:

- Executes Dalvik Executable (DEX) format and DEX bytecode
- Ahead-of-time (AOT) compiled runtime
- Modern garbage collection
- Improved debugging and diagnostic tools

Core libraries include Dalvik VM-specific libraries, Java interoperability libraries, and Android libraries.

### Android Framework

The set of services that collectively form the environment in which Android applications run. Key services include:

| Service | Function |
|---|---|
| Activity Manager | Manages application lifecycle and activity stack |
| Content Providers | Allows applications to publish and share data |
| Resource Manager | Access to non-code resources (strings, layouts) |
| Notifications Manager | Displays alerts and notifications to the user |
| View System | Extensible set of views for building UIs |
| Package Manager | Maintains info on installed applications |
| Telephony Manager | Provides telephony service information |
| Windows Manager | Performs window management |
| Location Manager | Access to GPS and network location services |

Communication between the application framework and system services is handled via **Binder IPC**, which allows cross-process calls while hiding the complexity from the developer.

### Applications

The top layer. Includes built-in apps (Browser, Camera, Calendar, Contacts, etc.) and user-installed apps from the Google Play Store or third-party sources.

---

## Android vs Linux

Android is based on the Linux kernel but is **not a Linux distribution**. Key differences:

| Area | Android | Linux |
|---|---|---|
| Target Architecture | ARM (mobile) | x86 (general purpose) |
| Java Runtime | ART / Dalvik (optimized for limited resources) | Standard JVM |
| File System | YAFFS / ext4 / F2FS | ext, FAT, NTFS |
| C Library | Bionic (custom, low memory) | glibc |
| Power Management | Aggressive, wake-lock based | Standard Linux PM |
| Kernel Additions | Wake locks, Binder IPC, low memory killer, alarm driver | None |

Android layers its process and power management model on top of standard Linux PM, extending it with mobile-specific behavior.

---

## App Installation

1. Install apps through the **Google Play Store** or by side-loading APKs (requires enabling "Unknown sources" / "Install unknown apps")
2. Manage permissions via **Settings > Apps > [App Name] > Permissions**
   - Since Android 6.0 (Marshmallow), permissions are granted per-feature at runtime (Camera, Location, Contacts, Microphone, etc.)
3. Monitor usage with **Digital Wellbeing** (tracks screen time and notifications)

---

## File Management

- File system typically uses **ext4** or **F2FS** (varies by manufacturer and OS version)
- Newer versions enforce **scoped storage** — apps get isolated directories to improve security
- File manager apps can explore internal storage and SD cards (if supported)
- Backup options:
  - **Cloud:** Google One, OEM cloud services
  - **Local/Manual:** ADB, SD card transfers, third-party apps, OEM tools

---

## Process Management

### Zygote

Zygote is a daemon process started by `init` when Android boots. It is the parent of all application processes.

- Has core libraries pre-linked
- All app processes are **forked** from Zygote, sharing VM memory and framework layer resources
- Improves app launch time by avoiding redundant library loading per process

### Principles

1. Android tries to keep an application process alive as long as possible
2. Processes are only killed when memory is needed for higher-priority processes
3. Which process to kill is determined by **importance hierarchy** (priority level)

### Application Lifecycle

App process lifetime is not controlled by the app itself, but by Android's process management. The activity lifecycle callbacks are:

`onCreate()` → `onStart()` → `onResume()` → **[Running]** → `onPause()` → `onStop()` → `onDestroy()`

- If a higher-priority app needs memory while an app is paused/stopped, the app process may be killed
- The user can return to the activity, triggering `onRestart()` → `onStart()`

### Priority Hierarchy

Android ranks each process at the **highest level** it qualifies for based on its active components. Linux reclaims memory by removing the lowest-priority processes first.

| Level | Type | Description |
|---|---|---|
| 1 (Critical) | Foreground Process | Required for what the user is currently doing |
| 2 (High) | Visible Process | No foreground component, but affects what the user sees |
| 3 | Service Process | Running a background service via `startService()` |
| 4 (Low) | Background Process | Holds a stopped activity (`onStop()` called) |
| 5 (Low) | Empty Process | No active components; kept only for caching |

---

## Power Management

### Overview

Android power management **extends Linux PM** with a more aggressive policy suited to battery-powered devices. The Android Power Management Application Framework is a Java layer sitting on top of the Linux kernel's PM framework, acting as a driver that applications use for power management. The JNI interface allows apps to communicate with this framework.

### Wake Locks

A wake lock is the primitive used to determine whether the system is in use. The device goes to sleep on timeout unless a process holds a wake lock.

Types of wake locks (lightest should be used to maximize power saving):

- `Partial_wake_lock` — keeps CPU running
- `Screen_dim_wake_lock` — keeps screen on (dim)
- `Screen_bright_wake_lock` — keeps screen on (bright)
- `Full_wake_lock` — keeps CPU, screen, and keyboard on

Applications request a wake lock from the PowerManager; the PowerManagerService creates the actual kernel wake lock via Linux PM.

### Kernel PM — ACPI Power States

ACPI (Advanced Configuration and Power Interface) defines standard power states:

**P States (Active/Performance):**
- Higher P state = lower performance, lower power consumption
- P0: highest frequency, highest power consumption

**C States (Idle):**
- C0: idle (active)
- C1: halt clock gated state
- C3: sleep
- C6: off
- Deeper C states = lower power consumption, but longer wake-up latency

In Android, power states for all devices (screen, keyboard, Wi-Fi, etc.) are critical to manage.

---

## Recovery Mode

`Power + Volume Up` (varies by device) → Recovery Mode

Used for factory resets, applying system updates, and wiping the cache partition.

---
## Factory Reset

Erases all data and restores the phone to its original settings. Commonly used to wipe personal data before resale, or fix unresolved software issues.

- Settings > System > Reset > Factory data reset
---

## Safe Mode

`Press and hold Power` → tap and hold **"Power Off"** → select **Safe Mode**

Boots Android with only pre-installed system apps, disabling all third-party apps. Useful for diagnosing issues caused by installed applications.

---

## Sources

 - Alian, Mohammad, et al. “Android Operating System: An in Depth Introduction.” University of Illinois Urbana-Champaign .

 - Walker, Shawn. _CompTIA Study Guide A+: 220-1201 and 220-1202_. 3rd ed., 2025.