# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

<a name="1.8.0"></a>
## [1.8.0](https://github.com/mauroreisvieira/meetio/compare/v1.7.1...v1.8.0) (2019-03-14)

### FEATURES
* Add variable `panel_row_padding`.
* Add variable `panel_row_background_color`.
* Add variable `panel_row_foreground_color`.
* Add variable `panel_row_selected_background_color`.
* Add variable `panel_row_selected_foreground_color`.
* Add variable `panel_row_match_foreground_color`.
* Add variable `panel_row_selected_match_foreground_color`.

---

<a name="1.7.1"></a>
## [1.7.1](https://github.com/mauroreisvieira/meetio/compare/v1.7.0...v1.7.1) (2019-03-14)

### BUGFIXES
* Fix variables on panel and status bar.

---

<a name="1.7.0"></a>
## [1.7.0](https://github.com/mauroreisvieira/meetio/compare/v1.6.9...v1.7.0) (2019-03-12)

### FEATURES
* Add option `meetio_tabs_diff_icon`  to show/hide the icon diff in tab.
* Add option `meetio_tabs_diff_highlight`  allow possibility to have a different color in modifier tab.
* Add variable `tabset_diff_color` to change the color of modifier tab.
* Add variable `tabset_diff_italic` to put the italic in modifier tab.

### BUGFIXES
* Fix `input_background_color` variable to change the color in correct place.
* Fix `button_background_color_hover` variable, to use the correct color instead of opacity.

#### NOTE
Thanks [abathur](https://github.com/abathur) for you feedback/report on issue [#6](https://github.com/mauroreisvieira/meetio/issues/6).

---

<a name="1.6.0"></a>
## [1.6.0](https://github.com/mauroreisvieira/meetio/compare/v1.5.1...v1.6.0) (2019-03-01)

### FEATURES
* Add syntax Improvements for: `HTML`, `CSS`, `JavaScript`, `PHP` & `Markdown` and others.
* Add customize colors for  `diff.deleted`, `diff.deleted.char`, `diff.inserted`, and `diff.inserted.char` see [build 3193](https://www.sublimetext.com/3dev).

### BUGFIXES
* Fix background color of `quick_panel`.

---

<a name="1.5.1"></a>
## [1.5.1](https://github.com/mauroreisvieira/meetio/compare/v1.5.0...v1.5.1) (2019-02-24)

### BUGFIXES
* Fix color of lighter scheme.

---

<a name="1.5.0"></a>
## [1.5.0](https://github.com/mauroreisvieira/meetio/compare/v1.4.1...v1.5.0) (2019-02-20)

### FEATURES
* Add new variation of scheme: `Meetio-Ocean`.
* Add `block_caret` on colors schemes.
* Add variable `vsc_deleted` when one or more of a folder‘s files has been added to the index for removal.
* Add variable  `vsc_missing` when one or more of a folder‘s files is no longer on disk.

### CHANGED
* Update name of `Meetio-Ocean` to `Meetio-Cobalt`.
* Update color of `caret` in all schemes to use the accent color.

### BUGFIXES
* Fix typo in messages. Thanks [@pykong](https://github.com/pykong).

---

<a name="1.4.1"></a>
## [1.4.1](https://github.com/mauroreisvieira/meetio/compare/v1.4.0...v1.4.1) (2019-02-15)

### FEATURES
* Add variable of `sidebar_icon_file_color`, to possibility change the color of icons in sidebar.

### BUGFIXES
* Fix `status_unmerged` icon in sidebar.

---

<a name="1.4.0"></a>
## [1.4.0](https://github.com/mauroreisvieira/meetio/compare/v1.3.0...v1.4.0) (2019-02-01)

### FEATURES
* Add colors of `line_diff_modified`, `line_diff_added` and `line_diff_deleted` in scheme.

### CHANGED
* Updated name of option `meetio_tabs_border` to `meetio_tabs_selected_border`.
* Updated colors of file_system_entry.

### BREAKING CHANGES
* Remove `meetio_statusbar_big` option.

---

<a name="1.3.0"></a>
## [1.3.0](https://github.com/mauroreisvieira/meetio/compare/v1.2.0...v1.3.0) (2019-01-25)

### FEATURES
* Add new scheme `Meetio-Ocean`.sublime-scheme
* Add option `meetio_tabs_border`  show border in selected tab.
* Add various variables to customize the Theme.

### CHANGED
* Update colors in Palenight Schemes.

---

<a name="1.2.0"></a>
## [1.2.0](https://github.com/mauroreisvieira/meetio/compare/v1.1.1...v1.2.0) (2019-01-19)

### FEATURES
* Add option `Meetio: Theme Configuration`  this allow the possibility to overwrite the default variables

### CHANGED
* Update color of background in Schemes: Default, Lighter and  Darker

### BUGFIXES
* Fix foreground and background color of status bar
* Fix button hover

### BREAKING CHANGES
* Remove `Meetio: Theme Activator`

---

<a name="1.1.1"></a>
## [1.1.1](https://github.com/mauroreisvieira/meetio/compare/v1.0.0...v1.1.1) (2019-01-15)

### CHANGED
* Update color of background in Meetio Darker Scheme

---

<a name="1.0.0"></a>
## 1.0.0 (2019-01-11)

### FEATURES
* Add Support for Git Gutter
* Add Support for Gutter Color
* Add Support for Color Highlighter
* Add Support for Markdown Extended
* Add Theme Activator
