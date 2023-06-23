# 11-May-2023
- Merged 5.4.242 tag in kernel
- Fixed kernel issue of cpu cores not going to sleep
- Fixed issues with memory management
- Fixed ViLTE
- Merged latest CLO tag "LA.UM.9.16.r1-13100-MANNAR.QSSI13.0" in kernel
- Updated display blobs from Sony Xperia 1 III
- Updated HDR blobs from tundra
- Idle drain improvements

# 15-Apr-2023
- Updated blobs from miui 14.0.6
- Updated kernel to 5.4.239
- Use QCOM implementation for audio effects
- Tune refresh rate props from coral
- Enabled Multi-Gen LRU
- Disable intrusive gms components 
- Disable Chimera.GmsIntentOperationService
- Disable Skia tracing by default 
- Disable continuous transaction tracing
- Enabled sustained performance mode
- Enable ro.hwui.render_ahead and set it to 20 frames  
- Hidden magisk better to prevent bank apps from detecting root
- Fixed sepolicy denials
- Added timeouts for wakelocks globally
- Overall performance improvements

# 10-Feb-2023
- Upstreamed kernel to 5.4.231
- Enabled Dolby Vision in Netflix
- Switched back to aosp display color modes
- Enabled sd fat driver
- Fixed safetynet issues

# 02-Feb-2023
- Added support for miui camera (not included prebuilt)
- Added support for Dolby vision
- Updated audio hal to 7.0
- Updated soundtrigger to 2.3
- Merged latest CLO tag in kernel
- Kernel built with latest neutron clang
- Updated RIL, QMI, IMS, CNE blobs from latest miui
- Fixed VoWifi
- Switched HWUI rendering backend to opengl
- Enabled FUSE passthrough by default
- Updated perf stack from latest CLO tag
- Disabled skia tracing by default
- Enabled H/W composition
- Enabled exfat filesystem support
- Scheduler Improvements
- Added Simple Low Memory Killer (SLMK)
- Addressed some sepolicy denials
- Enabled seamless doze transitions
- Enabled multiple vibration intensity levels
- Improved battery life
- Misc Improvements
