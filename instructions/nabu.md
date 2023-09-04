## Recovery Method:

# Clean flash - Encrypted (coming from a different ROM):
- Download Recovery ROM
- Reboot to recommended recovery
- Format data
- Flash ROM zip
- Make sure you reflash the recovery after flashing the ROM
- Reboot

# Updating to a newer build (dirty flash):
- Download Recovery ROM
- Reboot to recommended recovery
- Wipe dalvik, cache and system_ext
- Flash ROM zip and reboot


## FastbootD Method:

# Clean flash - Encrypted (coming from a different ROM):
- Download Fastboot ROM from fastboot_package folder
- Reboot to bootloader
- Type - fastboot -w
- Type - fastboot update {ROM.zip}

# Updating to a newer build (dirty flash):
- Download Fastboot ROM from fastboot_package folder
- Reboot to bootloader
- Type - fastboot update {ROM.zip}
