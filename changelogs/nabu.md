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
