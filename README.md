# Meetio Theme for Sublime Text 3

[![GitHub tag](https://img.shields.io/github/release/mauroreisvieira/meetio.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/releases)
![Build Status](https://img.shields.io/travis/mauroreisvieira/meetio/master.svg?style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/mauroreisvieira/meetio.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/blob/master/LICENSE)

## Installation

**Package Control:**

1. Open `Command Palette` using menu item `Tools → Command Palette` or <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> +<kbd>P</kbd>.
2. Choose `Package Control: Install Package`.
3. Type `Meetio` and press <kbd>ENTER</kbd>.

**Manually:**

1. Download latest release and unzip. it into your Packages folder.
2. Go to `Sublime Text → Preferences → Browse Packages`.
3. Move folder to inside and rename the folder to `Meetio`.

## Activate Theme

**You can active this theme from:**

1. Command Palette `Tools → Command Palette` or <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>.
2. Typing `UI: Select Theme` next find for `Meetio` and press <kbd>ENTER</kbd>.
3. Same process for scheme go to the Command Palette.
4. Typing `UI: Select Color Scheme` choose you favorite scheme and press <kbd>ENTER</kbd>.

Manually you can go to (**Preferences > Settings - User**) and paste the following code:

```json
{
    "color_scheme": "Packages/Meetio/schemes/Meetio-Light.sublime-color-scheme",
    "theme": "Meetio.sublime-theme"
}
```

## Theme Settings

This theme provide a visual configuration tool that allow you to configure the theme by activating the available options from an inline popup.

-   Just click in `Sublime Text → Preferences → Packages Settings → Meetio → Edit Settings`.
-   You can also open the settings from the Command Palette by searching `Meetio: Edit Settings`.

```js
{
  // Tabs
  "meetio_tabs_diff_icon": true, // show icon diff in tab
  "meetio_tabs_diff_pencil_icon": false, // show diff pencil icon in tab

  // Sidebar
  "meetio_icon_folder": false, // replace colorful folder to a flat icon folder
  "meetio_sidebar_disclosure": false, // set disclosure tree controls

  // Panels
  "meetio_input_search_icon": true, // show icon search in inputs

  // Status bar
  "meetio_status_badges": true, // show vcs status badges in the status bar
}
```

## Override Theme Variables

**Meetio Theme** provides a bunch of variables to improve your experience with theming.

-   `Sublime Text → Preferences → Packages Settings → Meetio → Theme Configuration`.
-   Command Palette <kbd>CMD/CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd> searching `Meetio: Theme Configuration`.

```json
{
    "variables": {
        "colorAccent": "#6772e4",
        "statusbarBackground": "var(colorAccent)",
        "statusbarLabelColor": "#fff"
    }
}
```

## Recommended Settings

To enjoy a better experience of using the **Meetio Theme** in your Sublime Text, please check the following settings.

```js
{
    "font_face": "Fira Code",
    "highlight_line": true,
    "font_options": ["gray_antialias", "subpixel_antialias"], // On retina Mac & Windows
    "indent_guide_options": ["draw_normal", "draw_active"], // Highlight active indent
    "margin": 20,
    "line_padding_bottom": 7,
    "line_padding_top": 7
}
```

## Schemes Palettes

| Usage           | Light                                                                   | Dark                                                                    |
| --------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `Cursor`        | ![#ffcc00](https://placehold.it/30x24/ffcc00/000000?text=%20) `#ffcc00` | ![#ffcc00](https://placehold.it/30x24/ffcc00/000000?text=%20) `#ffcc00` |
| `Foreground`    | ![#455A64](https://placehold.it/30x24/455A64/000000?text=%20) `#455A64` | ![#dedfe4](https://placehold.it/30x24/dedfe4/000000?text=%20) `#dedfe4` |
| `Background`    | ![#fbfbfb](https://placehold.it/30x24/fbfbfb/000000?text=%20) `#fbfbfb` | ![#011627](https://placehold.it/30x24/011627/000000?text=%20) `#011627` |
| `Comments`      | ![#90a4ae](https://placehold.it/30x24/90a4ae/000000?text=%20) `#90a4ae` | ![#697098](https://placehold.it/30x24/697098/000000?text=%20) `#697098` |
| `Blue`          | ![#6182b8](https://placehold.it/30x24/6182b8/000000?text=%20) `#6182b8` | ![#82aaff](https://placehold.it/30x24/82aaff/000000?text=%20) `#82aaff` |
| `Brown`         | ![#bc5454](https://placehold.it/30x24/bc5454/000000?text=%20) `#bc5454` | ![#c17e70](https://placehold.it/30x24/c17e70/000000?text=%20) `#c17e70` |
| `Cyan`          | ![#5fb3b3](https://placehold.it/30x24/5fb3b3/000000?text=%20) `#5fb3b3` | ![#81c5da](https://placehold.it/30x24/81c5da/000000?text=%20) `#81c5da` |
| `Green`         | ![#91b859](https://placehold.it/30x24/91b859/000000?text=%20) `#91b859` | ![#c3e88d](https://placehold.it/30x24/c3e88d/000000?text=%20) `#c3e88d` |
| `Orange`        | ![#f76d47](https://placehold.it/30x24/f76d47/000000?text=%20) `#f76d47` | ![#f78c6c](https://placehold.it/30x24/f78c6c/000000?text=%20) `#f78c6c` |
| `Pink`          | ![#ff5370](https://placehold.it/30x24/ff5370/000000?text=%20) `#ff5370` | ![#f07178](https://placehold.it/30x24/f07178/000000?text=%20) `#f07178` |
| `Purple`        | ![#7c4dff](https://placehold.it/30x24/7c4dff/000000?text=%20) `#7c4dff` | ![#c2afff](https://placehold.it/30x24/c2afff/000000?text=%20) `#c2afff` |
| `Red`           | ![#e53935](https://placehold.it/30x24/e53935/000000?text=%20) `#e53935` | ![#d95757](https://placehold.it/30x24/d95757/000000?text=%20) `#d95757` |
| `Yellow`        | ![#f3ad2c](https://placehold.it/30x24/f3ad2c/000000?text=%20) `#f3ad2c` | ![#ffcb6b](https://placehold.it/30x24/ffcb6b/000000?text=%20) `#ffcb6b` |
| `Invalid`       | ![#d3423e](https://placehold.it/30x24/d3423e/000000?text=%20) `#d3423e` | ![#d46c6c](https://placehold.it/30x24/d46c6c/000000?text=%20) `#d46c6c` |
| `Diff Added`    | ![#9ccc65](https://placehold.it/30x24/9ccc65/000000?text=%20) `#9ccc65` | ![#9ccc65](https://placehold.it/30x24/9ccc65/000000?text=%20) `#9ccc65` |
| `Diff Modified` | ![#e2b93d](https://placehold.it/30x24/e2b93d/000000?text=%20) `#e2b93d` | ![#e2b93d](https://placehold.it/30x24/e2b93d/000000?text=%20) `#e2b93d` |
| `Diff Deleted`  | ![#ef5350](https://placehold.it/30x24/ef5350/000000?text=%20) `#ef5350` | ![#ef5350](https://placehold.it/30x24/ef5350/000000?text=%20) `#ef5350` |
