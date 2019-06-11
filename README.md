<p align="center">
  <img src="assets/meetio.png" width="620"/>
</p>

[![GitHub tag](https://img.shields.io/github/release/mauroreisvieira/meetio.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/releases)
![Build Status](https://img.shields.io/travis/mauroreisvieira/meetio/master.svg?style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/mauroreisvieira/meetio.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/blob/master/LICENSE)

**Meetio Theme** is the most powerful theme for Sublime Text 3 with different scheme variations only for 3176+ version.\
You can help improve the theme by reporting issues [here](https://github.com/mauroreisvieira/meetio/issues).

 - [Installation](#installation)
 - [Activate Theme](#activate-theme)
 - [Theme Settings](#theme-settings)
 - [Override Theme Variables](#override-theme-variables)
 - [Recommended Settings](#recommended-settings)
 - [Theme Inspired](#theme-inspired)

## Installation

**Package Control:**

1. Open `Command Palette` using menu item `Tools → Command Palette` or <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> +<kbd>P</kbd>.
2. Choose `Package Control: Install Package`.
3. Type `Meetio` and press <kbd>ENTER</kbd>.
4. Restart Sublime Text.
    * **macOS** : menu item `Sublime Text → Quit Sublime Text`.
    * **Windows**: menu item `File → Exit`.
    * **Linux** : menu item `File → Exit`.
5. Ready to use.

**Manually:**

1. Download latest release and unzip. it into your Packages folder.
2. Go to `Sublime Text → Preferences → Browse Packages`.
3. Move folder to inside and rename the folder to `Meetio`.
4. Restart Sublime Text.
5. Start using.


## Activate Theme

**You can active this theme from:**

1. Command Palette `Tools → Command Palette` or <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>.
2. Typing `UI: Select Theme` next find for `Meetio` and press <kbd>ENTER</kbd>.
3. Same process for scheme go to the Command Palette.
4. Typing `UI: Select Color Scheme` choose you favorite scheme and press <kbd>ENTER</kbd>.

Manually you can go to (**Preferences > Settings - User**) and paste the following code:

```json
{
  "color_scheme": "Packages/Meetio/schemes/Meetio.sublime-color-scheme",
  "theme": "Meetio.sublime-theme"
}
```

## Theme Settings
This theme provide a visual configuration tool that allow you to configure the theme by activating the available options from an inline popup.

* Just click in `Sublime Text → Preferences → Packages Settings → Meetio → Edit Settings`.
* You can also open the settings from the Command Palette by searching `Meetio: Edit Settings`.

```js
{
  // Tabs
  "meetio_tabs_selected_border" : true,  // Show border in selected tab
  "meetio_tabs_diff_icon"       : true,  // Show icon diff in tab
  "meetio_tabs_diff_highlight"  : true, // Show diff tab with different color
  "meetio_tabs_diff_pencil_icon": true, // Show diff pencil icon in tab

  // Sidebar
  "meetio_arrow_folders"        : true,  // Replace folder icons with arrows
  "meetio_sidebar_disclosure"   : true,  // Set disclosure tree controls

  // Panels
  "meetio_input_search_icon"    : true,  // Show icon search in inputs

  // Status bar
  "meetio_status_badges"        : true,  // Show vcs status badges in the status bar
}
```

## Override Theme Variables
**Meetio Theme** provides a bunch of variables to improve your experience with theming.

* Just click in `Sublime Text → Preferences → Packages Settings → Meetio → Theme Configuration`.
* You can also open the settings from the Command Palette by searching `Meetio: Theme Configuration`.

```json
{
  "variables": {
    "colorAccent": "#6772e4",
    "statusbarBackground": "#6772e4",
    "statusbarLabelColor": "#fff"
  }
}
```

## Recommended Settings
To enjoy a better experience of using the **Meetio Theme** in your Sublime Text, please check the following settings.

```js
{
  "line_padding_bottom"          : 7,
  "line_padding_top"             : 7,
  "overlay_scroll_bars"          : "enabled",
  "highlight_modified_tabs"      : "enabled",
  "font_face"                    : "Fira Code"
}
```

## Theme Inspired
A special thanks to the following people who developed great projects, in which I inspired me to develop **Meetio Theme**.

* [Material Theme](https://github.com/equinusocio/material-theme) theme created by [@equinusocio](https://github.com/equinusocio).
* [cobalt2](https://github.com/wesbos/cobalt2) theme created by [@wesbos](https://github.com/wesbos).
* [DA UI](https://github.com/ihodev/sublime-da-ui) theme created by [@ihodev](https://github.com/ihodev).
* Icon resource from [Material Design](https://material.io/tools/icons/).
* Color resource from [Material Design](https://material.io/design/color/the-color-system.html#tools-for-picking-colors).
