# statsd-keystrokes
Log keystrokes statics to statsd

## Reference

http://stackoverflow.com/questions/3831908/how-can-i-statistic-my-key-press-frequency-and-count

## Requirement

- Ubuntu

## Logic

1\. Listen on all x events

```
xev -root
```

will print

```
ClientMessage event, serial 21, synthetic YES, window 0x5800048,
    message_type 0x121 (_NET_ACTIVE_WINDOW), format 32
```

A new window will is active with window id `0x5800048`

2\. Get new window information

```
xwininfo -id 0x5800048
```

will output

```
xwininfo: Window id: 0x5800048 "New Tab - Chromium"

  Absolute upper-left X:  993
  Absolute upper-left Y:  52
  Relative upper-left X:  0
  Relative upper-left Y:  0
  Width: 927
  Height: 1028
  Depth: 24
  Visual: 0x20
  ...

```

3\. Get further evnets from this window 0x5800048

```
xev -id 0x5800048
```

Switch to this window and type `google`, `xev` will output

```
PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4628920, state PropertyNewValue

LeaveNotify event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x0, time 4629136, (22,45), root:(1015,97),
    mode NotifyUngrab, detail NotifyInferior, same_screen YES,
    focus YES, state 0

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4629774, (44,45), root:(1037,97),
    state 0x0, keycode 42 (keysym 0x67, g), same_screen YES,
    XLookupString gives 1 bytes: (67) "g"
    XFilterEvent returns: False

KeyPress event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4629774, (44,45), root:(1037,97),
    state 0x0, keycode 42 (keysym 0x67, g), same_screen YES,
    XLookupString gives 1 bytes: (67) "g"
    XmbLookupString gives 1 bytes: (67) "g"
    XFilterEvent returns: False

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4629775, state PropertyNewValue

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4629775, state PropertyNewValue

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4629901, (44,45), root:(1037,97),
    state 0x0, keycode 42 (keysym 0x67, g), same_screen YES,
    XLookupString gives 1 bytes: (67) "g"
    XFilterEvent returns: False

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4629935, (44,45), root:(1037,97),
    state 0x0, keycode 32 (keysym 0x6f, o), same_screen YES,
    XLookupString gives 1 bytes: (6f) "o"
    XFilterEvent returns: False

KeyPress event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4629935, (44,45), root:(1037,97),
    state 0x0, keycode 32 (keysym 0x6f, o), same_screen YES,
    XLookupString gives 1 bytes: (6f) "o"
    XmbLookupString gives 1 bytes: (6f) "o"
    XFilterEvent returns: False

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4629936, state PropertyNewValue

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4629937, state PropertyNewValue

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630009, (44,45), root:(1037,97),
    state 0x0, keycode 32 (keysym 0x6f, o), same_screen YES,
    XLookupString gives 1 bytes: (6f) "o"
    XFilterEvent returns: False

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630075, (44,45), root:(1037,97),
    state 0x0, keycode 32 (keysym 0x6f, o), same_screen YES,
    XLookupString gives 1 bytes: (6f) "o"
    XFilterEvent returns: False

KeyPress event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630075, (44,45), root:(1037,97),
    state 0x0, keycode 32 (keysym 0x6f, o), same_screen YES,
    XLookupString gives 1 bytes: (6f) "o"
    XmbLookupString gives 1 bytes: (6f) "o"
    XFilterEvent returns: False

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630075, state PropertyNewValue

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630076, state PropertyNewValue

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630148, (44,45), root:(1037,97),
    state 0x0, keycode 32 (keysym 0x6f, o), same_screen YES,
    XLookupString gives 1 bytes: (6f) "o"
    XFilterEvent returns: False

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630209, (44,45), root:(1037,97),
    state 0x0, keycode 42 (keysym 0x67, g), same_screen YES,
    XLookupString gives 1 bytes: (67) "g"
    XFilterEvent returns: False

KeyPress event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630209, (44,45), root:(1037,97),
    state 0x0, keycode 42 (keysym 0x67, g), same_screen YES,
    XLookupString gives 1 bytes: (67) "g"
    XmbLookupString gives 1 bytes: (67) "g"
    XFilterEvent returns: False

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630209, state PropertyNewValue

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630210, state PropertyNewValue

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630304, (44,45), root:(1037,97),
    state 0x0, keycode 42 (keysym 0x67, g), same_screen YES,
    XLookupString gives 1 bytes: (67) "g"
    XFilterEvent returns: False

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630321, (44,45), root:(1037,97),
    state 0x0, keycode 46 (keysym 0x6c, l), same_screen YES,
    XLookupString gives 1 bytes: (6c) "l"
    XFilterEvent returns: False

KeyPress event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630321, (44,45), root:(1037,97),
    state 0x0, keycode 46 (keysym 0x6c, l), same_screen YES,
    XLookupString gives 1 bytes: (6c) "l"
    XmbLookupString gives 1 bytes: (6c) "l"
    XFilterEvent returns: False

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630322, state PropertyNewValue

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630323, state PropertyNewValue

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630427, (44,45), root:(1037,97),
    state 0x0, keycode 46 (keysym 0x6c, l), same_screen YES,
    XLookupString gives 1 bytes: (6c) "l"
    XFilterEvent returns: False

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630515, (44,45), root:(1037,97),
    state 0x0, keycode 26 (keysym 0x65, e), same_screen YES,
    XLookupString gives 1 bytes: (65) "e"
    XFilterEvent returns: False

KeyPress event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630515, (44,45), root:(1037,97),
    state 0x0, keycode 26 (keysym 0x65, e), same_screen YES,
    XLookupString gives 1 bytes: (65) "e"
    XmbLookupString gives 1 bytes: (65) "e"
    XFilterEvent returns: False

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630515, state PropertyNewValue

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x143 (_NET_WM_USER_TIME), time 4630516, state PropertyNewValue

KeyRelease event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4630637, (44,45), root:(1037,97),
    state 0x0, keycode 26 (keysym 0x65, e), same_screen YES,
    XLookupString gives 1 bytes: (65) "e"
    XFilterEvent returns: False

LeaveNotify event, serial 23, synthetic NO, window 0x5800048,
    root 0x9b, subw 0x5a00027, time 4631384, (-10,69), root:(983,121),
    mode NotifyNormal, detail NotifyNonlinearVirtual, same_screen YES,
    focus YES, state 0

FocusOut event, serial 23, synthetic NO, window 0x5800048,
    mode NotifyNormal, detail NotifyNonlinear

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x12c (_NET_WM_STATE), time 4632113, state PropertyNewValue

PropertyNotify event, serial 23, synthetic NO, window 0x5800048,
    atom 0x28 (WM_NORMAL_HINTS), time 4632118, state PropertyNewValu
```


4\. parsing events in step 2 and send to statsd