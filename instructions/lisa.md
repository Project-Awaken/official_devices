# Recovery method
# Clean flash (coming from a different ROM):
- Reboot to bootloader (fastboot)
- Connect your phone to PC
- fastboot flash boot boot.img
- fastboot flash vendor_boot vendor_boot.img
- fastboot reboot recovery
- Select Wipe data/factory reset & confirm
- Go back and select Apply update from ADB
- adb sideload awaken*.zip(or drag down the rom zip to cmd)
- adb sideload firmware*.zip (only if there's a firmware update)
- After installation complete, Reboot system. 

# Updating to a newer build (dirty flash):
- Download proper flashable ZIP for your device
- Reboot to Recovery
- Select Apply update from ADB
- adb sideload awaken*.zip(or drag down the rom zip to cmd)
- adb sideload firmware*.zip (only if there's a firmware update)
- Reboot to System

# Fastboot method
# Clean flash (coming from a different ROM):
- Reboot to bootloader
- fastboot -w
- fastboot update {awaken-***-img.zip}

# Updating to a newer build (dirty flash):
- Reboot to bootloader
- fastboot update {awaken-***-img.zip}

# Note: Recovery and Fastboot rom packages are different. Please download appropriate package as per your preference and install as per the above mentioned methods accordingly. 
