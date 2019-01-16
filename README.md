<p align="center"><img src="public/meetio.png" width="480"/></p>

**Meetio** is the most powerful theme for Sublime Text 3 with Lighter, Darker & Palenight variations only for 3179+ version.

## Installation

**Package Control:**
 - Open `Command Palette` using menu item `Tools → Command Palette` or `(Ctrl or ⌘) + ⇧ + P`
 - Choose `Package Control: Install Package`
 - Type `Meetio` and press `Enter`
 - Restart Sublime Text
    - **macOS** : menu item `Sublime Text → Quit Sublime Text`
    - **Windows**: menu item `File → Exit`
    - **Linux** : menu item `File → Exit`

 - Ready to use 🎉

**Manually:**
 - Download latest release and unzip. it into your Packages folder
 - Go to `Sublime Text → Preferences → Browse Packages`
 - Move folder to inside and rename the folder to `Meetio`
 - Restart Sublime Text
 - Start using...

### Activate the theme

**You can active this theme from:**

 * Command palette Tools > Command Palette `(Ctrl or ⌘) + ⇧ + P` by typing `Meetio: Theme Activate`
 * Preferences > Packages Settings and choose `Meetio > Theme Activate`

### Schemes variations

#### Meetio Default
<p align="center"><img src="public/screenshots/Meetio-Default.png" width="980"/></p>

```json
  "color_scheme": "Packages/Meetio/schemes/Meetio.sublime-color-scheme",
  "theme": "Meetio.sublime-theme",
```


#### Meetio Lighter
<p align="center"><img src="public/screenshots/Meetio-Lighter.png" width="980"/></p>

```json
  "color_scheme": "Packages/Meetio/schemes/Meetio-Lighter.sublime-color-scheme",
  "theme": "Meetio-Lighter.sublime-theme",
```

#### Meetio Darker
<p align="center"><img src="public/screenshots/Meetio-Darker.png" width="980"/></p>

```json
  "color_scheme": "Packages/Meetio/schemes/Meetio-Darker.sublime-color-scheme",
  "theme": "Meetio-Darker.sublime-theme",
```

#### Meetio Palenight
<p align="center"><img src="public/screenshots/Meetio-Palenight.png" width="980"/></p>

```json
  "color_scheme": "Packages/Meetio/schemes/Meetio-Palenight.sublime-color-scheme",
  "theme": "Meetio-Palenight.sublime-theme",
```

### Theme options

```json
  // Tabs
  "meetio_tabs_autowidth"    : true, // Enable auto width for tabs
  "meetio_tabs_big"          : true, // Set tabs big
  "meetio_tabs_bold"         : true, // Make the tab labels bolder only in selected

  // Sidebar
  "meetio_sidebar_font_big"  : true, // Set large font in sidebar
  "meetio_compact_sidebar"   : true, // Set compact sidebar
  "meetio_arrow_folders"     : true, // Replace folder icons with arrows
  "meetio_sidebar_disclosure": true, // Set disclosure tree controls

  // Panels
  "meetio_titlebar"          : true, // Enable title bar (OS X 10.10+)
  "meetio_input_search_icon" : true  // Show icon search in inputs
  "meetio_statusbar_big"     : true  // Set status bar big
```

### Recommended settings for a better experience:

```json
  "always_show_minimap_viewport" : true,
  "bold_folder_labels"           : true,
  "line_padding_bottom"          : 7,
  "line_padding_top"             : 7,
  "overlay_scroll_bars"          : "enabled",
  "highlight_modified_tabs"      : "enabled"
```

### Color Schemes palettes

Color      | Default   |  Lighter  |  Darker  |  Palenight |
---        | ---       |  ---      |  ---     |  ---       |
Accent     | `#7dcac4` | `#7dcac4` | `#7dcac4` | `#7dcac4`  |
Background | `#2c343b` | `#fafafa` | `#212121` | `#193448`  |
Foreground | `#efefef` | `#546d79` | `#efefef` | `#fefefe`  |
Black      | `#121212` | `#546d79` | `#121212` | `#546d79`  |
Blue       | `#6398ce` | `#6181b8` | `#64b5f6` | `#40c4fe`  |
Cyan       | `#5bb3b4` | `#80cbc4` | `#89ddff` | `#9effff`  |
Gray       | `#3d3d3d` | `#3d3d3d` | `#65737e` | `#3d3d3d`  |
Green      | `#97c892` | `#479e8e` | `#81c784` | `#9eff80`  |
Orange     | `#ffb266` | `#f9ae58` | `#f78c6c` | `#da8f49`  |
Pink       | `#ff526f` | `#ff5370` | `#f06292` | `#ffa5f3`  |
Purple     | `#967efb` | `#c792ea` | `#ba68c8` | `#967efb`  |
Red        | `#d95757` | `#e53734` | `#f07178` | `#ed6e74`  |
Deep Orange| `#f97b58` | `#f97b58` | `#f97b58` | `#f97b58`  |
Light Blue | `#e1f5fe` | `#81d4fa` | `#e1f5fe` | `#e1f5fe`  |
Deep Purple| `#c692c6` | `#7c4dff` | `#b39ddb` | `#C2AFFF`  |
White      | `#efefef` | `#fefefe` | `#efefef` | `#fefefe`  |
Yellow     | `#fbc959` | `#ffb62e` | `#ffcb6b` | `#ffc600`  |
