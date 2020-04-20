# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

<a name="4.4.0"></a>

## [4.4.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v4.0.0...v4.4.0) (2020-04-20)

## FEATURES

-   Add font option `glow` on `tags_options` and `brackets_options` on Light/Dark schemes.

## IMPROVEMENTES

-   Add support for `meta.function.parameters.annotation` on Python syntax.

<a name="4.0.0"></a>

## [4.0.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v3.2.0...v4.0.0) (2020-04-01)

## FEATURES

-   Add `autoCompleteRowPadding` variable.

## CHANGED

-   Revert accent color in Theme.

## IMPROVEMENTES

-   Re-factor all scheme scopes. [Issue #30](https://github.com/meetio-theme/sublime-meetio-theme/issues/30)

<a name="3.2.0"></a>

## [3.2.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v3.1.0...v3.2.0) (2020-01-05)

## FEATURES

-   Add NEW ICONS (support @3X retina display).
-   Add variable `sidebarIconFolderColor`, `sidebarIconFolderExpandedColor`, `sidebarIconFileSize`.
-   Add variable `sidebarLabelExpandableColor`.
-   Add variable `statusbarIconColor`.
-   Add variables for Auto Complete `autoCompleteFontSize`, `autoCompleteColor`, `autoCompleteMatchColor`...
-   Add option `meetio_sidebar_button`.
-   Add support for sidebar icon.
-   Add support for kind.

## BREAKING CHANGES

-   Remove option `meetio_icon_folder`.
-   Remove variable `sidebarIconFileColor`.
-   Remove unused icons.

<a name="3.1.0"></a>

## [3.1.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v3.0.7...v3.1.0) (2019-11-22)

## FEATURES

-   Add support for A File Icon
-   Add NEW ICONS (support @3X retina display)

<a name="3.0.0"></a>

## [3.0.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v2.4.0...v3.0.0) (2019-10-25)

## BREAKING CHANGES

-   Rename option `meetio_arrow_folders` to `meetio_arrow_folder`.
-   Remove option `meetio_tabs_selected_border`.
-   Remove option `meetio_arrow_folder`.
-   Remove Palenight Scheme, Mariana Scheme, Ocean Scheme and Cobalt Scheme.

## FEATURES

-   Add NEW ICONS.
-   Add option `meetio_icon_folder`.
-   Add new variables `scrollBar` and `scrollTrack` to control the color of scroll.
-   Add support for `stylus` syntax.
-   Add some improves `Markdown` syntax.

<a name="2.4.0"></a>

## [2.4.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v2.3.0...v2.4.0) (2019-07-23)

## BREAKING CHANGES

-   Remove options for Tabs: `meetio_tabs_diff_highlight` use only the default `highlight_modified_tabs`.

## FEATURES

-   Add custom git badges in sidebar, for untracked, modified, added, unmerged, and staged files. Thanks [@pykong](https://github.com/pykong) for suggestion.
-   Add variable `vcsBadgeSize` to change the size of badge in sidebar.

<a name="2.2.0"></a>

## [2.2.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v2.1.0...v2.2.0) (2019-06-25)

## FEATURES

-   Add syntax improvements for: `CSS`, `PHP`, `Perl` & `Python`. TY [@pykong](https://github.com/pykong).
-   Add new scheme called `Meetio-Mariana`.

<a name="2.1.0"></a>

## [2.1.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v2.0.1...v2.1.0) (2019-06-11)

## FEATURES

-   Add syntax improvements for: `PHP` & `Python`. Thanks [@pykong](https://github.com/pykong) for your feedback.
-   Add theme colors improvements.
-   Add variable `sidebarLabelPadding`.
-   Add variable `tabBold`.

## BUGFIXES

-   Fix multiple files stay selected on Windows [issue #11](https://github.com/meetio-theme/sublime-meetio-theme/issues/11). Thanks [@f8ttyc8t](https://github.com/f8ttyc8t) for your report.

## BREAKING CHANGES

-   Remove options for Tabs: `meetio_tabs_big`, `meetio_tabs_bold` & `meetio_tabs_autowidth`.
-   Remove options for SideBar: `meetio_sidebar_font_big` & `meetio_compact_sidebar`.
-   Remove options for Title: `meetio_titlebar`.

<a name="2.0.1"></a>

## [2.0.1](https://github.com/meetio-theme/sublime-meetio-theme/compare/v2.0.0...v2.0.1) (2019-05-03)

## FEATURES

-   Add option `meetio_tabs_diff_pencil_icon` to show a pencil icon in tab.
-   Add variables `tabDiffIconColor` to change the color of icon in tab.

## BUGFIXES

-   Fix `overlay_control` layer problem.

<a name="2.0.0"></a>

## [2.0.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.8.0...v2.0.0) (2019-04-09)

## FEATURES

-   Add variables to allow more customize.

## BREAKING CHANGES

-   Naming of variables in theme, for example: `buttonBackground` instead of `button_background`.

<a name="1.8.0"></a>

## [1.8.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.7.1...v1.8.0) (2019-03-14)

## FEATURES

-   Add option `meetio_status_badges` show/hide status badges in status bar.
-   Add variable `font_face`.
-   Add variable `sidebar_label_font_size`.
-   Add variable `panel_row_font_size`.
-   Add variable `panel_row_padding`.
-   Add variable `panel_row_background_color`.
-   Add variable `panel_row_foreground_color`.
-   Add variable `panel_row_selected_background_color`.
-   Add variable `panel_row_selected_foreground_color`.
-   Add variable `panel_row_match_foreground_color`.
-   Add variable `panel_row_selected_match_foreground_color`.

<a name="1.7.1"></a>

## [1.7.1](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.7.0...v1.7.1) (2019-03-14)

## BUGFIXES

-   Fix variables on panel and status bar.

<a name="1.7.0"></a>

## [1.7.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.6.9...v1.7.0) (2019-03-12)

## FEATURES

-   Add option `meetio_tabs_diff_icon` to show/hide the icon diff in tab.
-   Add option `meetio_tabs_diff_highlight` allow possibility to have a different color in modifier tab.
-   Add variable `tabset_diff_color` to change the color of modifier tab.
-   Add variable `tabset_diff_italic` to put the italic in modifier tab.

## BUGFIXES

-   Fix `input_background_color` variable to change the color in correct place.
-   Fix `button_background_color_hover` variable, to use the correct color instead of opacity.

## NOTE

Thanks [abathur](https://github.com/abathur) for you feedback/report on issue [#6](https://github.com/meetio-theme/sublime-meetio-theme/issues/6).

<a name="1.6.0"></a>

## [1.6.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.5.1...v1.6.0) (2019-03-01)

## FEATURES

-   Add syntax Improvements for: `HTML`, `CSS`, `JavaScript`, `PHP` & `Markdown` and others.
-   Add customize colors for `diff.deleted`, `diff.deleted.char`, `diff.inserted`, and `diff.inserted.char` see [build 3193](https://www.sublimetext.com/3dev).

## BUGFIXES

-   Fix background color of `quick_panel`.

<a name="1.5.1"></a>

## [1.5.1](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.5.0...v1.5.1) (2019-02-24)

## BUGFIXES

-   Fix color of lighter scheme.

<a name="1.5.0"></a>

## [1.5.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.4.1...v1.5.0) (2019-02-20)

## FEATURES

-   Add new variation of scheme: `Meetio-Ocean`.
-   Add `block_caret` on colors schemes.
-   Add variable `vsc_deleted` when one or more of a folder‘s files has been added to the index for removal.
-   Add variable `vsc_missing` when one or more of a folder‘s files is no longer on disk.

## CHANGED

-   Update name of `Meetio-Ocean` to `Meetio-Cobalt`.
-   Update color of `caret` in all schemes to use the accent color.

## BUGFIXES

-   Fix typo in messages. Thanks [@pykong](https://github.com/pykong).

<a name="1.4.1"></a>

## [1.4.1](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.4.0...v1.4.1) (2019-02-15)

## FEATURES

-   Add variable of `sidebar_icon_file_color`, to possibility change the color of icons in sidebar.

## BUGFIXES

-   Fix `status_unmerged` icon in sidebar.

<a name="1.4.0"></a>

## [1.4.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.3.0...v1.4.0) (2019-02-01)

## FEATURES

-   Add colors of `line_diff_modified`, `line_diff_added` and `line_diff_deleted` in scheme.

## CHANGED

-   Updated name of option `meetio_tabs_border` to `meetio_tabs_selected_border`.
-   Updated colors of file_system_entry.

## BREAKING CHANGES

-   Remove `meetio_statusbar_big` option.

<a name="1.3.0"></a>

## [1.3.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.2.0...v1.3.0) (2019-01-25)

## FEATURES

-   Add new scheme `Meetio-Ocean`.sublime-scheme
-   Add option `meetio_tabs_border` show border in selected tab.
-   Add various variables to customize the Theme.

## CHANGED

-   Update colors in Palenight Schemes.

<a name="1.2.0"></a>

## [1.2.0](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.1.1...v1.2.0) (2019-01-19)

## FEATURES

-   Add option `Meetio: Theme Configuration` this allow the possibility to overwrite the default variables

## CHANGED

-   Update color of background in Schemes: Default, Lighter and Darker

## BUGFIXES

-   Fix foreground and background color of status bar
-   Fix button hover

## BREAKING CHANGES

-   Remove `Meetio: Theme Activator`

<a name="1.1.1"></a>

## [1.1.1](https://github.com/meetio-theme/sublime-meetio-theme/compare/v1.0.0...v1.1.1) (2019-01-15)

## CHANGED

-   Update color of background in Meetio Darker Scheme

<a name="1.0.0"></a>

## 1.0.0 (2019-01-11)

## FEATURES

-   Add Support for Git Gutter
-   Add Support for Gutter Color
-   Add Support for Color Highlighter
-   Add Support for Markdown Extended
-   Add Theme Activator
