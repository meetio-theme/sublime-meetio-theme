<div align="center">

# Meetio Theme for Sublime Text 3

[![GitHub tag](https://img.shields.io/github/release/mauroreisvieira/meetio.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/releases)
![Build Status](https://img.shields.io/travis/mauroreisvieira/meetio/master.svg?style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/mauroreisvieira/meetio.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/issues)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/mauroreisvieira/meetio/blob/master/LICENSE)

[![Twitter followers](https://img.shields.io/twitter/follow/mauroreisvieira?style=for-the-badge)](https://twitter.com/mauroreisvieira/)
[![GitHub followers](https://img.shields.io/github/followers/mauroreisvieira?style=for-the-badge)](https://github.com/mauroreisvieira/)

</div>

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
    "color_scheme": "Packages/Meetio/schemes/Meetio.sublime-color-scheme",
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

| USAGE         | LIGHT                                                                | DARK                                                                 | DIM                                                                  |
| ------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Caret         | ![#ffcc00](https://placehold.it/15/ffcc00/000000?text=%20) `#ffcc00` | ![#ffcc00](https://placehold.it/15/ffcc00/000000?text=%20) `#ffcc00` | ![#7e57c2](https://placehold.it/15/7e57c2/000000?text=%20) `#7e57c2` |
| Foreground    | ![#546171](https://placehold.it/15/546171/000000?text=%20) `#546171` | ![#eeffff](https://placehold.it/15/eeffff/000000?text=%20) `#eeffff` | ![#eeffff](https://placehold.it/15/eeffff/000000?text=%20) `#eeffff` |
| Background    | ![#fafafa](https://placehold.it/15/fafafa/000000?text=%20) `#fafafa` | ![#292d3e](https://placehold.it/15/292d3e/000000?text=%20) `#292d3e` | ![#2d2b55](https://placehold.it/15/2d2b55/000000?text=%20) `#2d2b55` |
| Comments      | ![#90a4ae](https://placehold.it/15/90a4ae/000000?text=%20) `#90a4ae` | ![#697098](https://placehold.it/15/697098/000000?text=%20) `#697098` | ![#697098](https://placehold.it/15/697098/000000?text=%20) `#697098` |
| Blue          | ![#6182b8](https://placehold.it/15/6182b8/000000?text=%20) `#6182b8` | ![#82aaff](https://placehold.it/15/82aaff/000000?text=%20) `#82aaff` | ![#82aaff](https://placehold.it/15/82aaff/000000?text=%20) `#82aaff` |
| Brown         | ![#c17e70](https://placehold.it/15/c17e70/000000?text=%20) `#c17e70` | ![#c17e70](https://placehold.it/15/c17e70/000000?text=%20) `#c17e70` | ![#c17e70](https://placehold.it/15/c17e70/000000?text=%20) `#c17e70` |
| Cyan          | ![#5fb3b3](https://placehold.it/15/5fb3b3/000000?text=%20) `#5fb3b3` | ![#89ddff](https://placehold.it/15/89ddff/000000?text=%20) `#89ddff` | ![#9effff](https://placehold.it/15/9effff/000000?text=%20) `#9effff` |
| Green         | ![#91b859](https://placehold.it/15/91b859/000000?text=%20) `#91b859` | ![#C3E88D](https://placehold.it/15/C3E88D/000000?text=%20) `#C3E88D` | ![#a5ff90](https://placehold.it/15/a5ff90/000000?text=%20) `#a5ff90` |
| Orange        | ![#f76d47](https://placehold.it/15/f76d47/000000?text=%20) `#f76d47` | ![#f78c6c](https://placehold.it/15/f78c6c/000000?text=%20) `#f78c6c` | ![#ff7200](https://placehold.it/15/ff7200/000000?text=%20) `#ff7200` |
| Pink          | ![#ff5370](https://placehold.it/15/ff5370/000000?text=%20) `#ff5370` | ![#f07178](https://placehold.it/15/f07178/000000?text=%20) `#f07178` | ![#ff628c](https://placehold.it/15/ff628c/000000?text=%20) `#ff628c` |
| Purple        | ![#7c4dff](https://placehold.it/15/7c4dff/000000?text=%20) `#7c4dff` | ![#c2afff](https://placehold.it/15/c2afff/000000?text=%20) `#c2afff` | ![#a599e9](https://placehold.it/15/a599e9/000000?text=%20) `#a599e9` |
| Red           | ![#e53935](https://placehold.it/15/e53935/000000?text=%20) `#e53935` | ![#d95757](https://placehold.it/15/d95757/000000?text=%20) `#d95757` | ![#d95757](https://placehold.it/15/d95757/000000?text=%20) `#d95757` |
| Yellow        | ![#ffb62e](https://placehold.it/15/ffb62e/000000?text=%20) `#ffb62e` | ![#ffcb6b](https://placehold.it/15/ffcb6b/000000?text=%20) `#ffcb6b` | ![#fad000](https://placehold.it/15/fad000/000000?text=%20) `#fad000` |
| Invalid       | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` |
| Diff Added    | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` |
| Diff Modified | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` | ![#ec3a37](https://placehold.it/15/ec3a37/000000?text=%20) `#ec3a37` |
| Diff Deleted  | ![#ff000f](https://placehold.it/15/ff000f/000000?text=%20) `#ff000f` | ![#ff000f](https://placehold.it/15/ff000f/000000?text=%20) `#ff000f` | ![#ff000f](https://placehold.it/15/ff000f/000000?text=%20) `#ff000f` |
