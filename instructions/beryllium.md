# Clean flash using awakenOS recovery (Coming from a different rom):
- Download rom, recovery and super_empty files to your computer (Link for recovery & super_empty given on xda thread and device support group)
- Reboot the device to bootloader (Fastboot Mode)
- Flash empty super image by running `fastboot wipe-super <path/to/super_empty.img>` in terminal
- Flash recovery image by running `fastboot flash recovery <path/to/recovery.img>` in terminal
- Reboot to recovery mode
- Go to main menu > Factory reset > Format data/factory reset >  Format data - Back to Main menu
- On your phone [which is in recovery mode], Apply update > Apply from ADB
- Flash the rom through ADB sideload by running `adb sideload <path/to/rom.zip>` in terminal
- Reboot and #beAwakened

# Updating to a newer build using awakenOS recovery (Dirty flash):
- Download rom file to your computer
- Reboot the device to recovery
- On your phone [which is in recovery mode], Apply update > Apply from ADB
- Flash the rom through ADB sideload by running `adb sideload <path/to/rom.zip>` in terminal
- Reboot and #beAwakened
