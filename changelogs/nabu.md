# 05-October-2023
- Added Desktop mode
- Enable floating windows by default
- Updated blobs from latest global miui (v14.0.6)
- Updated gms stack from Pixel Tab September OTA
- Upstreamed kernel to 4.14.326
- Tuned zram configuration
- Enabled zram writeback

# 13-September-2023
- Updated screen density to 300
- Using 420dpi
- Added Per app refresh rate settings and improved layout of it
- Added Refresh rate Quick Settings tile
- Enabled and Improved HDR & WCG
- Updated power profile from coral
- Updated Surface flinger props
- Massive Cleanup of device sources
- Added and tuned Moto dolby again
- Increased max visible notification icons
- Add perf related script
- Imported Thermal Client from stock
- Fixed AOSP recovery
- Switched to CosmicFresh kernel
- Upstreamed kernel to 4.14.325
- Merged latest CLO tag LA.UM.9.1.r1-13900-SMxxx0.QSSI13.0 in kernel
- Building kernel with latest clang 17.0.4
- Enabled FUSE passthrough by default
- Fixed mismatched gaming thermal
- Tuned artwork
- Imported Thermal Client from stock
- Updated Surface flinger props
- Fixed deepsleep issue
- Miscellaneous fixes
- Enabled New QS Panel clock layout (Like in smartphones)
- Improved QS Panel layout for tablets
- Fixed QS Panel theme while using light theme in lockscreen

# 04-September-2023
- Spoofing GMS components as Pixel Tab
- Updated GMS stack from Pixel Tab
- Implemented HubUI(Screensavers) from Pixel Tab
- Updated Graphics stack
- Change foreground cpuset configuration
- Imported perf stack from latest miui
- Switched to QTI powerhal
- Increased Mic gain
- Tuned zram performance
- Add the noatime for read-only ext4 partitions
- Set max AOD refresh rate to 60 to save battery
- Set max visible notification icons
- Disabled ART debug and optimize dexpreopt
- Set correct resolution according to panel
- Optimized package manager dexopt properties
- Optimized Dex flags
- Updated SurfaceFlinger offsets from taro
- Switched to CAF surfaceflinger
- Removed  redundant blobs/apps/services that our device won't use
- Use QCOM implementation for audio effects
- Enabled surround virtualizer by default for Music profile with headphones
- Updated vulkan and opengl XML files for dEQP feature flags
- Lot of Miscellaneous Improvements

# 11-May-2023
- Fixed screen cast issues 
- Disabled HDR and WCG mode
- Fixed speaker loudness issues
- Switched to AOSP surfaceflinger for more smoothness
- Added support for per app thermal profiles
- Added support for Dirac
- Fixed some sepolicy denials
- Idle drain improvements

# 15-Apr-2023
- Disabled intrusive gms components
- Disabled Chimera.GmsIntentOperationService
- Disabled Skia tracing by default
- Disabled continuous transaction tracing
- Enabled sustained performance mode
- Enabled ro.hwui.render_ahead and set it to 20 frames
- Increased speaker volume
- Use QCOM implementation for audio effects
- Added timeouts for wakelocks globally
- Disabled SF backpressure
- Imported cpusets configuration from coral
- Enabled suspend to RAM for better idle drains
- Use lesser time to enter sleep 
- Reduced ntp wakeups 
- Prevent all wakeups by eventpoll
- Overall performance improvements
