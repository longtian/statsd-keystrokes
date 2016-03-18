# statsd-keystrokes
Log keystrokes statics to statsd

## Test Requirement

- Ubuntu

## TOC

- [xev](#xev)
- [xinput](#xinput)
- [input-utils](#input-utils)

## xev

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

## xinput

```
xinput list
```

```
⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
⎜   ↳ USB OPTICAL MOUSE                       	id=9	[slave  pointer  (2)]
⎣ Virtual core keyboard                   	id=3	[master keyboard (2)]
    ↳ Virtual core XTEST keyboard             	id=5	[slave  keyboard (3)]
    ↳ Power Button                            	id=6	[slave  keyboard (3)]
    ↳ Video Bus                               	id=7	[slave  keyboard (3)]
    ↳ Power Button                            	id=8	[slave  keyboard (3)]
    ↳ AT Translated Set 2 keyboard            	id=10	[slave  keyboard (3)]
```

```
xinput test 10 | grep "key press"

```

```
key press   42
key press   32
key press   32
key press   42
key press   46
key press   26
```

### input-utils

```
sudo apt-get install input-utils
```

```
sudo lsinput
```

```
/dev/input/event0
   bustype : BUS_HOST
   vendor  : 0x0
   product : 0x1
   version : 0
   name    : "Power Button"
   phys    : "PNP0C0C/button/input0"
   bits ev : EV_SYN EV_KEY

/dev/input/event1
   bustype : BUS_HOST
   vendor  : 0x0
   product : 0x1
   version : 0
   name    : "Power Button"
   phys    : "LNXPWRBN/button/input0"
   bits ev : EV_SYN EV_KEY

/dev/input/event2
   bustype : BUS_I8042
   vendor  : 0x1
   product : 0x1
   version : 43841
   name    : "AT Translated Set 2 keyboard"
   phys    : "isa0060/serio0/input0"
   bits ev : EV_SYN EV_KEY EV_MSC EV_LED EV_REP

/dev/input/event3
   bustype : BUS_HOST
   vendor  : 0x0
   product : 0x6
   version : 0
   name    : "Video Bus"
   phys    : "LNXVIDEO/video/input0"
   bits ev : EV_SYN EV_KEY

/dev/input/event4
   bustype : (null)
   vendor  : 0x0
   product : 0x0
   version : 0
   name    : "HDA Intel PCH Front Mic"
   phys    : "ALSA"
   bits ev : EV_SYN EV_SW

/dev/input/event5
   bustype : (null)
   vendor  : 0x0
   product : 0x0
   version : 0
   name    : "HDA Intel PCH Rear Mic"
   phys    : "ALSA"
   bits ev : EV_SYN EV_SW

/dev/input/event6
   bustype : (null)
   vendor  : 0x0
   product : 0x0
   version : 0
   name    : "HDA Intel PCH Line"
   phys    : "ALSA"
   bits ev : EV_SYN EV_SW

/dev/input/event7
   bustype : (null)
   vendor  : 0x0
   product : 0x0
   version : 0
   name    : "HDA Intel PCH Line Out"
   phys    : "ALSA"
   bits ev : EV_SYN EV_SW

/dev/input/event8
   bustype : (null)
   vendor  : 0x0
   product : 0x0
   version : 0
   name    : "HDA Intel PCH Front Headphone"
   phys    : "ALSA"
   bits ev : EV_SYN EV_SW

/dev/input/event9
   bustype : BUS_USB
   vendor  : 0x93a
   product : 0x2521
   version : 273
   name    : "USB OPTICAL MOUSE"
   phys    : "usb-0000:00:14.0-4.1/input0"
   uniq    : ""
   bits ev : EV_SYN EV_KEY EV_REL EV_MSC
```


```
sudo input-events 2
```

```
11:37:28.702131: EV_MSC MSC_SCAN 34
11:37:28.702131: EV_KEY KEY_G (0x22) pressed
11:37:28.702131: EV_SYN code=0 value=0
11:37:28.818543: EV_MSC MSC_SCAN 34
11:37:28.818543: EV_KEY KEY_G (0x22) released
11:37:28.818543: EV_SYN code=0 value=0
11:37:28.911751: EV_MSC MSC_SCAN 24
11:37:28.911751: EV_KEY KEY_O (0x18) pressed
11:37:28.911751: EV_SYN code=0 value=0
11:37:28.979410: EV_MSC MSC_SCAN 24
11:37:28.979410: EV_KEY KEY_O (0x18) released
11:37:28.979410: EV_SYN code=0 value=0
11:37:29.051070: EV_MSC MSC_SCAN 24
11:37:29.051070: EV_KEY KEY_O (0x18) pressed
11:37:29.051070: EV_SYN code=0 value=0
11:37:29.124259: EV_MSC MSC_SCAN 24
11:37:29.124259: EV_KEY KEY_O (0x18) released
11:37:29.124259: EV_SYN code=0 value=0
11:37:29.163600: EV_MSC MSC_SCAN 34
11:37:29.163600: EV_KEY KEY_G (0x22) pressed
11:37:29.163600: EV_SYN code=0 value=0
11:37:29.285532: EV_MSC MSC_SCAN 34
11:37:29.285532: EV_KEY KEY_G (0x22) released
11:37:29.285532: EV_SYN code=0 value=0
11:37:29.297913: EV_MSC MSC_SCAN 38
11:37:29.297913: EV_KEY KEY_L (0x26) pressed
11:37:29.297913: EV_SYN code=0 value=0
11:37:29.414418: EV_MSC MSC_SCAN 38
11:37:29.414418: EV_KEY KEY_L (0x26) released
11:37:29.414418: EV_SYN code=0 value=0
11:37:30.659341: EV_MSC MSC_SCAN 18
11:37:30.659341: EV_KEY KEY_E (0x12) pressed
11:37:30.659341: EV_SYN code=0 value=0
11:37:30.732408: EV_MSC MSC_SCAN 18
11:37:30.732408: EV_KEY KEY_E (0x12) released
11:37:30.732408: EV_SYN code=0 value=0
```


## Reference

http://stackoverflow.com/questions/3831908/how-can-i-statistic-my-key-press-frequency-and-count

http://unix.stackexchange.com/questions/56213/log-number-of-keyboard-hits%20googlrasdasd

https://github.com/forsberg/kbdcounter/blob/master/src/xlib.py
