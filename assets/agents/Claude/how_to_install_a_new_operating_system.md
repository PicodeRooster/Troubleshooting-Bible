# How to Install a New Operating System

## Pre-Requisites

 - A brand new USB flash drive, or one you are willing to lose the data, of at least 8GB storage.
 - Stable internet connection
 - A storage medium to perform a backup - storage will depend on size of data needed to be transfered, but for most systems, 500 GB is recommended on an external hard drive. 

## Steps

1. **Backup data** Before starting, backup all important files to your selected storage medium.

2. **Research and choose your target OS.** Identify your systems specs to select an OS that best meets compatibility with your hardware. Download the iso image from the official OS's manufucaturer website to your host machine.

3. **Flash OS to USB drive** Boot into your working OS and use it to flash the new OS image onto a USB flash drive. A popular tool to streamline the flashing process is [balenaEtcher](https://etcher.balena.io/). 

4. **Prepare your USB drive for flashing** Before writing the ISO, ensure your USB drive is clean and ready. Backup any files on it — the entire drive will be wiped. Then format the USB drive to give it a clean slate. This ensures the ISO data writes correctly and that the finished drive will actually boot. Skipping this step can cause silent write errors that only surface later when you try to boot from the drive.

   > **WARNING — Do not interrupt the flash process.**
   > Removing the USB, losing power, or cancelling mid-write will leave the drive in a partially written state. A partially written drive is **not bootable** — it will either fail silently at the boot screen or not be recognized at all. The ISO data on the drive will be corrupted and unrecoverable. You will need to reformat the USB and start the flash from scratch. If the drive suffers repeated interrupted writes, it can develop bad sectors and become permanently unusable. Always let the flash and verification finish completely before touching the drive.

5. **Using Etcher** Right click Etcher > Run (or press Enter).
   1. **Flash from file** → navigate to your downloads and select the `mint.iso`
   2. **Select target** → pick the USB drive for flashing
   3. **Flash!** → select the **Flash** button.

   Etcher will handle the rest — it will wipe the Ext4 format, write the ISO, and verify it automatically. The drive will come out the other end as a bootable Linux Mint installer.

6. **Boot from the USB drive**
   1. Shut down your machine completely — do not restart.
   2. Plug the bootable USB drive into the target device.
   3. Power on the device and enter the UEFI/BIOS menu. The key to press varies by manufacturer — common keys are `F2`, `F12`, `Del`, or `Esc`. Press it immediately as the machine starts before the OS begins loading.
   4. In the UEFI/BIOS menu, navigate to the boot options and select the USB drive as the boot device.
   5. Save and exit. The device will restart and boot from the USB, launching the OS installer.

   > **Note:** Your device must support UEFI booting. If the USB is not detected, check that Secure Boot is disabled in the UEFI settings, as it can block unsigned boot media like a Linux installer.

   6. Once your device boots from the USB, it will launch into a Live session — a temporary environment running the new OS directly from the drive. You will see an Install Linux Mint icon on the desktop. Run the installer and follow the on-screen instructions to configure your disk partitioning, timezone, and account settings.

7. The OS installer will complete its process and prompt you to reboot. When prompted, remove the USB drive, then allow the system to restart. The machine will boot into your newly installed OS.

   > **Note:** If keyboard drivers fail to load at the removal prompt and you cannot proceed, it is safe to power off the machine manually. The OS has already finished installing — the prompt exists only to prevent the system from accidentally booting from the USB again. 

## Sources

- Kingston Technology. *How to Create a Bootable USB Drive for Windows.* Nov 2025. https://www.kingston.com/en/blog/personal-storage/create-bootable-usb-drive-windows
- Microsoft. "Boot from a USB Drive." *Microsoft Learn*, 22 June 2021, https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/factoryos/boot-from-a-usb-drive?view=windows-11

