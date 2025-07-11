import * as fs from 'fs';
import * as path from 'path';
import { GenerateTheme, ThemeSetting, ThemeVariables } from './interfaces';

export const variables: ThemeVariables = {
    accent: 'var(--accent)',
    foreground: 'var(--foreground)',
    background: 'var(--background)',
    fontSizeSm: 11,
    fontSizeMd: 12,
    fontSizeLg: 14,
    fontSizeHuge: 24,
    fontFace: 'system',
    kindFontFace: 'system',
    kindFontSize: 'var(fontSizeLg)',
    dialogLabelColor: 'color(var(background) blend(var(foreground) 30%))',
    buttonBackground: ['background', 0.5],
    buttonBackgroundHover: 'color(var(accent) a(0.2))',
    buttonSmall: [80, 16],
    buttonMedium: [80, 22],
    buttonLarge: [80, 28],
    buttonIconFileColor: 'color(var(accent) a(0.70))',
    buttonIconFileSelectedColor: 'var(accent)',
    buttonIconFileBackground: 'var(background)',
    buttonIconFileSelectedBackground: 'var(buttonIconFileBackground)',
    buttonIconFileContentMargin: [12, 12],
    autoCompleteFontSize: 'var(fontSizeSm)',
    autoCompleteRowPadding: [10, 6],
    autoCompleteFontItalic: true,
    autoCompleteColor: ['foreground', 0.5],
    autoCompleteMatchColor: 'var(accent)',
    autoCompleteSelectedColor: 'var(foreground)',
    autoCompleteSelectedMatchColor: 'var(accent)',
    autoCompleteBlend: true,
    autoCompleteSelectedBackground: ['foreground', 0.1],
    overlayControlBackground: 'var(background)',
    overlayControlBorder: 'var(overlayControlBackground)',
    panelControlBackground: 'var(background)',
    panelControlBorder: 'var(panelControlBackground)',
    panelPathRowFontSize: 'var(fontSizeSm)',
    panelPathRowFontItalic: true,
    panelPathRowColor: 'var(foreground)',
    panelRowPadding: [10, 10],
    panelRowFontSize: 'var(fontSizeMd)',
    panelRowBackground: 'var(background)',
    panelRowColor: 'color(var(background) blend(var(foreground) 30%))',
    panelRowSelectedBackground: ['foreground', 0.1],
    panelRowSelectedColor: 'var(foreground)',
    panelRowMatchColor: 'var(accent)',
    panelRowSelectedMatchColor: 'var(accent)',
    inputBackground: 'var(background)',
    inputBorderColor: ['foreground', 0.1],
    inputBorderSize: [0, 0, 0, 1],
    inputBorderMargin: [12, 8, 12, 8],
    sidebarBackground: 'var(background)',
    sidebarBorder: 'var(sidebarBackground)',
    sidebarHeadingFontSize: 'var(fontSizeSm)',
    sidebarLabelFontSize: 'var(fontSizeMd)',
    sidebarLabelPadding: [16, 4],
    sidebarIndent: 20,
    sidebarIndentOffset: 14,
    sidebarLabelColor: 'color(var(background) blend(var(foreground) 30%))',
    sidebarLabelColorHover: 'var(foreground)',
    sidebarLabelSelectedBackground: ['foreground', 0.06],
    sidebarLabelSelectedColor: 'var(accent)',
    sidebarLabelExpandableColor: 'var(accent)',
    sidebarLabelSelectedBorderSize: [2, 0, 0, 0],
    sidebarLabelSelectedBorderColor: 'var(accent)',
    sidebarIconFolderColor: 'var(sidebarLabelColor)',
    sidebarIconFolderExpandedColor: 'var(sidebarLabelExpandableColor)',
    sidebarIconFileSize: 7,
    statusbarBackground: 'var(background)',
    statusBarBorder: 'var(statusbarBackground)',
    statusbarLabelColor: 'color(var(background) blend(var(foreground) 30%))',
    statusbarLabelColorHover: 'var(foreground)',
    statusbarIconColor: 'var(statusbarLabelColor)',
    statusbarIconColorHover: 'var(statusbarLabelColorHover)',
    statusbarLabelFontSize: 'var(fontSizeSm)',
    tabBold: false,
    tabFontSize: 'var(fontSizeMd)',
    tabColor: ['foreground', 0.5],
    tabBackground: 'var(background)',
    tabBorder: 'var(tabBackground)',
    tabBackgroundSheetModifier: 'blend(var(accent) 95%)',
    tabSelectedBorderColor: 'var(accent)',
    tabSelectedBorderSize: [0, 0, 0, 1],
    tabSelectedColor: 'var(foreground)',
    tabDiffIconColor: 'var(accent)',
    tabDiffColor: 'var(--bluish)',
    tabCloseNew: 'var(--greenish)',
    tabCloseModified: 'var(--bluish)',
    tabCloseDeleted: 'var(--redish)',
    tabDiffItalic: true,
    tabHeight: 45,
    tabWidth: 50,
    tabMargin: 0,
    tabNavigationColor: 'var(foreground)',
    tabMoreColor: 'var(foreground)',
    tabCloseColor: ['foreground', 0.5],
    tabCloseSelectedColor: 'var(foreground)',
    tabCloseHoverColor: 'var(accent)',
    titleBarBackground: 'var(background)',
    titleBarColor: 'var(foreground)',
    tooltipBackground: 'var(foreground)',
    tooltipLabelColor: 'var(background)',
    gridLayoutBorderColor: 'color(var(accent) blend(var(foreground) 30%))',
    gridLayoutBorderSize: 1,
    minimapColor: 'color(var(accent) a(0.2))',
    minimapOpacity: '0.5',
    scrollBar: ['foreground', 0.2],
    scrollTrack: ['foreground', 0.4],
    vcsBadgeSize: 5,
    // when a file is ignored
    vcsIgnored: 'color(var(sidebarLabelColor) a(0.5))',
    // when a file is new or not recognized
    vcsUntracked: 'color(darkseagreen a(0.9))',
    // when a file has been changed on disk
    vcsModified: 'color(cornflowerblue a(0.9))',
    // when one or more of a folder‘s files is no longer on disk
    vcsMissing: 'color(sandybrown a(0.9))',
    // when a new file has been newly added to the index
    vcsAdded: 'color(darkseagreen a(0.9))',
    // when a modified file has been added to the index
    vcsStaged: 'color(goldenrod a(0.9))',
    // when one or more of a folder‘s files has been added to the index for removal
    vcsDeleted: 'color(red a(0.9))',
    // when a file is in a conflict state and needs to be resolved
    vcsUnmerged: 'color(slateblue a(0.9))',
};

export const rules = [
    {
        class: 'annotation_close_button',
        content_margin: 8,
        'layer0.texture': 'Meetio Theme/textures/actions/close.png',
        'layer0.tint': 'var(accent)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'annotation_close_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'button_control',
        content_margin: [6, 6],
        min_size: 'var(buttonSmall)',
        'layer0.tint': 'var(buttonBackground)',
        'layer0.opacity': {
            target: 0.6,
            speed: 5,
            interpolation: 'smoothstep',
        },
        'layer0.inner_margin': [6, 6],
    },
    {
        class: 'button_control',
        attributes: ['hover'],
        'layer0.tint': 'var(buttonBackgroundHover)',
        'layer0.opacity': 1,
    },
    {
        class: 'button_control',
        attributes: ['pressed'],
        'layer0.opacity': {
            target: 0.1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'button_control',
        attributes: ['disabled'],
        'layer0.opacity': {
            target: 0,
            speed: 0,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'button_control',
        min_size: 'var(buttonMedium)',
        content_margin: [6, 8],
        parents: [{ class: 'dialog' }],
    },
    {
        class: 'button_control',
        min_size: 'var(buttonLarge)',
        content_margin: [8, 10],
        parents: [{ class: 'panel_grid_control' }],
    },
    {
        class: 'dialog',
        'layer0.tint': ['background', 0.94],
        'layer0.opacity': 1,
    },
    {
        class: 'label_control',
        parents: [{ class: 'dialog' }],
        fg: 'var(dialogLabelColor)',
        'font.face': 'var(fontFace)',
        'font.size': 'var(fontSizeMd)',
    },
    {
        class: 'popup_control',
        content_margin: 0,
        'layer0.tint': ['background', 1],
        'layer0.opacity': 1,
    },
    {
        class: 'auto_complete_details',
    },
    {
        class: 'auto_complete_info',
        spacing: 8,
    },
    {
        class: 'auto_complete',
        row_padding: 0,
        tint_index: 0,
        tint_modifier: ['background', 1],
        'layer0.opacity': 1,
    },
    {
        class: 'auto_complete_label',
        fg: 'var(autoCompleteColor)',
        match_fg: 'var(autoCompleteMatchColor)',
        selected_fg: 'var(autoCompleteSelectedColor)',
        selected_match_fg: 'var(autoCompleteSelectedMatchColor)',
        fg_blend: 'var(autoCompleteBlend)',
        'font.face': 'var(fontFace)',
        'font.size': 'var(autoCompleteFontSize)',
        'font.italic': 'var(autoCompleteFontItalic)',
    },
    {
        class: 'auto_complete_kind_name_label',
        border_color: 'color(var(--accent) a(0.8))',
        'font.italic': true,
    },
    {
        class: 'auto_complete_description_label',
        'font.italic': true,
    },
    {
        class: 'auto_complete_hint',
        opacity: 0.7,
        'font.italic': true,
    },
    {
        class: 'table_row',
        'layer0.tint': 'var(autoCompleteSelectedBackground)',
        'layer0.opacity': 0,
    },
    {
        class: 'table_row',
        attributes: ['selected'],
        'layer0.opacity': 1,
    },
    {
        class: 'dropdown_button_control',
        content_margin: [8, 8],
        'layer0.texture': 'Meetio Theme/textures/actions/history.png',
        'layer0.tint': 'var(accent)',
        'layer0.opacity': 1,
        'layer0.inner_margin': 0,
    },
    {
        class: 'dropdown_button_control',
        attributes: ['hover'],
        'layer0.opacity': 0.8,
    },
    {
        class: 'grid_layout_control',
        border_color: 'var(gridLayoutBorderColor)',
        border_size: 'var(gridLayoutBorderSize)',
    },
    {
        class: 'disclosure_button_control',
        'layer0.texture': 'Meetio Theme/textures/tree/disclosure_collapsed.png',
        'layer0.tint': 'var(sidebarIconFolderColor)',
        'layer0.opacity': 1.0,
        content_margin: [8, 8],
    },
    {
        class: 'disclosure_button_control',
        attributes: ['expanded'],
        'layer0.texture': 'Meetio Theme/textures/tree/disclosure_expanded.png',
        'layer0.tint': 'var(sidebarIconFolderExpandedColor)',
    },
    {
        class: 'disclosure_button_control',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'disclosure_button_control',
        settings: ['!meetio_sidebar_disclosure'],
        content_margin: 0,
        'layer0.opacity': 0,
    },
    {
        class: 'icon_folder',
        'layer0.texture': 'Meetio Theme/textures/tree/folder_closed.png',
        'layer0.tint': 'var(sidebarIconFolderColor)',
        'layer0.opacity': 1,
        content_margin: [9, 9],
    },
    {
        class: 'icon_folder',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expanded'],
            },
        ],
        'layer0.texture': 'Meetio Theme/textures/tree/folder_open.png',
        'layer0.tint': 'var(sidebarIconFolderExpandedColor)',
        'layer0.opacity': 1,
        content_margin: [9, 9],
    },
    {
        class: 'icon_folder_dup',
        'layer0.texture': 'Meetio Theme/textures/tree/folder_dup.png',
        'layer0.tint': 'var(sidebarIconFolderColor)',
        'layer0.opacity': 1,
        content_margin: [9, 9],
    },
    {
        class: 'icon_folder_loading',
        'layer0.texture': {
            keyframes: [
                'Meetio Theme/textures/spinner11.png',
                'Meetio Theme/textures/spinner10.png',
                'Meetio Theme/textures/spinner9.png',
                'Meetio Theme/textures/spinner8.png',
                'Meetio Theme/textures/spinner7.png',
                'Meetio Theme/textures/spinner6.png',
                'Meetio Theme/textures/spinner5.png',
                'Meetio Theme/textures/spinner4.png',
                'Meetio Theme/textures/spinner3.png',
                'Meetio Theme/textures/spinner2.png',
                'Meetio Theme/textures/spinner1.png',
                'Meetio Theme/textures/spinner.png',
            ],
            loop: true,
            frame_time: 0.08,
        },
        'layer0.tint': 'var(sidebarIconFolderColor)',
        'layer0.opacity': 1,
        content_margin: [9, 9],
    },
    {
        class: 'icon_file_type',
        'layer0.opacity': 1,
        content_margin: 'var(sidebarIconFileSize)',
    },
    {
        class: 'icon_file_type',
        parents: [
            {
                class: 'tree_row',
                attributes: ['hover'],
            },
        ],
        'layer0.opacity': 1,
    },
    {
        class: 'icon_file_type',
        parents: [
            {
                class: 'tree_row',
                attributes: ['selected'],
            },
        ],
        'layer0.opacity': 1,
    },
    {
        class: 'icon_button_group',
        spacing: 8,
    },
    {
        class: 'icon_button_control',
        'layer0.tint': 'var(buttonIconFileBackground)',
        'layer0.inner_margin': 0,
        'layer0.opacity': 1,
        content_margin: 8,
    },
    {
        class: 'icon_button_control',
        attributes: ['selected'],
        'layer0.tint': 'var(buttonIconFileSelectedBackground)',
    },
    {
        class: 'icon_regex',
        'layer0.texture': 'Meetio Theme/textures/find/regex.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_regex',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_regex',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_case',
        'layer0.texture': 'Meetio Theme/textures/find/case_sensitive.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_case',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_case',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_whole_word',
        'layer0.texture': 'Meetio Theme/textures/find/whole_word.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_whole_word',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_whole_word',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_wrap',
        'layer0.texture': 'Meetio Theme/textures/find/wrap.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_wrap',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_wrap',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_in_selection',
        'layer0.texture': 'Meetio Theme/textures/find/in_selection.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_in_selection',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_in_selection',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_highlight',
        'layer0.texture': 'Meetio Theme/textures/find/highlight_matches.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_highlight',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_highlight',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_preserve_case',
        'layer0.texture': 'Meetio Theme/textures/find/preserve_case.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_preserve_case',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_preserve_case',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_context',
        'layer0.texture': 'Meetio Theme/textures/find/in_context.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_context',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_context',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_use_buffer',
        'layer0.texture': 'Meetio Theme/textures/find/use_buffer.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_use_buffer',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_use_buffer',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'icon_use_gitignore',
        'layer0.texture': 'Meetio Theme/textures/find/use_gitignore.png',
        'layer0.tint': 'var(buttonIconFileColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [12, 12],
    },
    {
        class: 'icon_use_gitignore',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 0.9,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'icon_use_gitignore',
        parents: [
            {
                class: 'icon_button_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(buttonIconFileSelectedColor)',
        'layer0.opacity': 1,
    },
    {
        class: 'fold_button_control',
        'layer0.texture': 'Meetio Theme/textures/navigation/arrow_right.png',
        'layer0.tint': 'var(accent)',
        'layer0.opacity': 0.4,
        'layer0.inner_margin': 0,
        content_margin: [12, 12],
    },
    {
        class: 'fold_button_control',
        attributes: ['hover'],
        'layer0.opacity': 1,
        content_margin: [12, 12],
    },
    {
        class: 'fold_button_control',
        attributes: ['expanded'],
        'layer0.texture': 'Meetio Theme/textures/navigation/arrow_down.png',
        'layer0.tint': 'var(accent)',
        content_margin: [12, 12],
    },
    {
        class: 'kind_container',
        content_margin: 'var(autoCompleteRowPadding)',
        'layer0.opacity': 0,
        'layer1.opacity': 0,
    },
    {
        class: 'kind_container',
        parents: [
            {
                class: 'quick_panel',
            },
        ],
        'layer0.opacity': 0,
    },
    {
        class: 'kind_container',
        parents: [
            {
                class: 'auto_complete',
            },
            {
                class: 'table_row',
                attributes: ['selected'],
            },
        ],
    },
    {
        class: 'kind_label',
        'font.face': 'var(kindFontFace)',
        'font.size': 'var(kindFontSize)',
        'font.bold': true,
        'font.italic': true,
    },
    {
        class: 'kind_container kind_function',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--redish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_function',
            },
        ],
        color: 'var(--redish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_function',
            },
        ],
        color: 'color(var(--redish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'kind_container kind_keyword',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--pinkish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_keyword',
            },
        ],
        color: 'var(--pinkish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_keyword',
            },
        ],
        color: 'color(var(--pinkish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'kind_container kind_markup',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--orangish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_markup',
            },
        ],
        color: 'var(--orangish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_markup',
            },
        ],
        color: 'color(var(--orangish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'kind_container kind_namespace',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--bluish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_namespace',
            },
        ],
        color: 'var(--bluish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_namespace',
            },
        ],
        color: 'color(var(--bluish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'kind_container kind_navigation',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--yellowish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_navigation',
            },
        ],
        color: 'var(--yellowish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_navigation',
            },
        ],
        color: 'color(var(--yellowish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'kind_container kind_snippet',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--greenish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_snippet',
            },
        ],
        color: 'var(--greenish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_snippet',
            },
        ],
        color: 'color(var(--greenish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'kind_container kind_type',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--purplish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_type',
            },
        ],
        color: 'var(--purplish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_type',
            },
        ],
        color: 'color(var(--purplish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'kind_container kind_variable',
        'layer0.opacity': 0.2,
        'layer1.tint': 'var(--cyanish)',
        'layer1.opacity': 0.1,
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'kind_container kind_variable',
            },
        ],
        color: 'var(--cyanish)',
    },
    {
        class: 'kind_label',
        parents: [
            {
                class: 'quick_panel',
            },
            {
                class: 'kind_container kind_variable',
            },
        ],
        color: 'color(var(--cyanish) min-contrast(rgb(235, 237, 239) 2.5))',
    },
    {
        class: 'symbol_container',
        content_margin: [4, 3, 4, 3],
    },
    {
        class: 'trigger_container',
        content_margin: [4, 3],
    },
    {
        class: 'auto_complete_detail_pane',
        tint_index: 0,
        'layer0.opacity': 1,
        tint_modifier: [0, 0, 0, 0.1],
        content_margin: [8, 5, 8, 5],
    },
    {
        class: 'auto_complete_info',
        spacing: 8,
    },
    {
        class: 'auto_complete_kind_name_label',
        'font.size': 'var(fontSizeSm)',
        'font.italic': true,
        border_color: 'color(var(--accent) a(0.8))',
    },
    {
        class: 'text_line_control',
        content_margin: [8, 6],
        tint_index: 0,
        color_scheme_tint: 'var(inputBackground)',
        'layer0.texture': null,
        'layer0.tint': null,
        'layer0.opacity': 1.0,
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'panel_control' }],
        content_margin: 'var(inputBorderMargin)',
        'layer0.opacity': 1,
        'layer0.inner_margin': [20, 5, 20, 5],
        'layer0.tint': 'var(inputBackground)',
        'layer1.tint': 'var(inputBorderColor)',
        'layer1.opacity': 1,
        'layer1.inner_margin': 'var(inputBorderSize)',
        'layer1.draw_center': false,
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'overlay_control' }],
        content_margin: [52, 9, 13, 13],
        'layer1.draw_center': false,
        'layer1.inner_margin': [52, 50, 0, 0],
        'layer1.texture': 'Meetio Theme/textures/input/search.png',
        'layer1.tint': 'var(accent)',
        'layer1.opacity': 1.0,
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'overlay_control' }],
        platforms: ['osx'],
        content_margin: [52, 14, 14, 14],
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'switch_project_window' }],
        content_margin: [52, 9, 13, 13],
        settings: ['meetio_input_search_icon'],
        'layer1.draw_center': false,
        'layer1.inner_margin': [52, 48, 0, 0],
        'layer1.texture': 'Meetio Theme/textures/input/search.png',
        'layer1.tint': 'var(accent)',
        'layer1.opacity': 1.0,
    },
    {
        class: 'text_line_control',
        parents: [{ class: 'switch_project_window' }],
        platforms: ['osx'],
        content_margin: [52, 14, 14, 14],
    },
    {
        class: 'close_button',
        content_margin: [8, 8],
        'layer0.texture': 'Meetio Theme/textures/actions/close.png',
        'layer0.tint': 'var(accent)',
        'layer0.opacity': 1,
        'layer0.inner_margin': [3, 3],
    },
    {
        class: 'close_button',
        parents: [
            {
                class: 'tree_row',
                attributes: ['hover'],
            },
        ],
        'layer0.opacity': 1,
    },
    {
        class: 'close_button',
        attributes: ['dirty'],
        'layer0.texture': 'Meetio Theme/textures/tab/dirty_pencil.png',
        'layer0.tint': 'var(tabDiffIconColor)',
        'layer0.inner_margin': [4, 4],
    },
    {
        class: 'panel_control',
        content_margin: [12, 12],
        'layer0.tint': 'var(panelControlBackground)',
        'layer0.opacity': 1,
        'layer0.inner_margin': [2, 2, 2, 2],
        'layer1.tint': 'var(panelControlBorder)',
        'layer1.opacity': 1,
        'layer1.draw_center': false,
        'layer1.inner_margin': [0, 1, 0, 1],
    },
    {
        class: 'panel_control',
        parents: [
            {
                class: 'window',
            },
        ],
    },
    {
        class: 'switch_project_panel_cancel_container',
        'layer0.tint': 'var(panelControlBackground)',
        'layer0.opacity': 1.0,
        content_margin: [10, 4],
    },
    {
        class: 'panel_grid_control',
        inside_spacing: 4,
        outside_hspacing: 4,
        outside_vspacing: 4,
    },
    {
        class: 'panel_close_button',
        content_margin: [8, 8],
        settings: ['meetio_panel_close_button'],
        'layer0.texture': 'Meetio Theme/textures/actions/close.png',
        'layer0.opacity': {
            target: 0.4,
            speed: 5,
            interpolation: 'smoothstep',
        },
        'layer0.tint': 'var(accent)',
        'layer0.inner_margin': [3, 3],
    },
    {
        class: 'panel_close_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'panel_close_button',
        settings: ['!meetio_panel_close_button'],
        content_margin: 0,
        'layer0.inner_margin': 0,
    },
    {
        class: 'mini_quick_panel_row',
        'layer0.tint': 'var(panelRowBackground)',
        'layer0.inner_margin': [2, 2, 2, 2],
        'layer0.opacity': 1,
    },
    {
        class: 'mini_quick_panel_row',
        attributes: ['selected'],
        'layer0.tint': 'var(panelRowSelectedBackground)',
    },
    {
        class: 'quick_panel',
        row_padding: 'var(panelRowPadding)',
        'layer0.tint': ['background', 1],
        'layer0.opacity': 1,
    },
    {
        class: 'quick_panel',
        parents: [
            {
                class: 'overlay_control goto_symbol',
            },
        ],
        row_padding: [0, 0, 0, 0],
    },
    {
        class: 'quick_panel',
        parents: [
            {
                class: 'overlay_control goto_symbol_in_project',
            },
        ],
        row_padding: [0, 0, 0, 0],
    },
    {
        class: 'quick_panel_row',
        'layer0.opacity': 1,
    },
    {
        class: 'quick_panel',
        parents: [
            {
                class: 'overlay_control kind_info',
            },
        ],
        row_padding: [0, 0, 0, 0],
    },
    {
        class: 'quick_panel_row',
        'layer0.tint': 'var(panelRowBackground)',
        'layer0.opacity': 1,
    },
    {
        class: 'quick_panel_row',
        attributes: ['selected'],
        'layer0.tint': 'var(panelRowSelectedBackground)',
    },
    {
        class: 'quick_panel_entry',
        spacing: 1,
    },
    {
        class: 'quick_panel_label',
        fg: 'var(panelRowColor)',
        match_fg: 'var(panelRowMatchColor)',
        selected_fg: 'var(panelRowSelectedColor)',
        selected_match_fg: 'var(panelRowSelectedMatchColor)',
        'font.face': 'var(fontFace)',
        'font.size': 'var(panelRowFontSize)',
    },
    {
        class: 'quick_panel_path_label',
        fg: 'var(panelPathRowColor)',
        match_fg: 'var(panelRowMatchColor)',
        selected_fg: 'var(panelRowSelectedColor)',
        selected_match_fg: 'var(panelRowSelectedMatchColor)',
        'font.face': 'var(fontFace)',
        'font.size': 'var(panelPathRowFontSize)',
    },
    {
        class: 'quick_panel_detail_label',
        fg: 'var(panelPathRowColor)',
        link_color: 'var(accent)',
        'font.face': 'var(fontFace)',
        'font.size': 'var(panelPathRowFontSize)',
    },
    {
        class: 'quick_panel_label hint',
        'font.size': 'var(panelPathRowFontSize)',
        'font.italic': true,
    },
    {
        class: 'quick_panel_label key_binding',
        'font.size': 'var(panelPathRowFontSize)',
    },
    {
        class: 'overlay_control',
        content_margin: [16, 16, 16, 31],
        'layer0.inner_margin': [24, 19, 24, 34],
        'layer0.texture': 'Meetio Theme/textures/overlay/shadow.png',
        'layer0.opacity': 1.0,
        'layer1.inner_margin': [20, 16, 20, 32],
        'layer1.texture': 'Meetio Theme/textures/overlay/background.png',
        'layer1.tint': 'var(overlayControlBackground)',
        'layer1.opacity': 1.0,
        'layer2.inner_margin': [20, 16, 20, 32],
        'layer2.texture': 'Meetio Theme/textures/overlay/border.png',
        'layer2.tint': 'var(overlayControlBorder)',
        'layer2.draw_center': false,
        'layer2.opacity': 1.0,
    },
    {
        class: 'overlay_control',
        parents: [{ class: 'window', attributes: ['file_light'] }],
        'layer0.opacity': 0.4,
    },
    {
        class: 'progress_bar_control',
        'layer0.tint': ['background', 0.94],
        'layer0.opacity': 1,
    },
    {
        class: 'progress_gauge_control',
        'layer0.tint': 'var(accent)',
        'layer0.opacity': 1,
        content_margin: [0, 8],
    },
    // STATUS BAR
    {
        class: 'status_bar',
        'layer0.opacity': 1,
        'layer0.tint': 'var(statusbarBackground)',
        'layer1.opacity': 1,
        'layer1.tint': 'var(statusBarBorder)',
        'layer1.draw_center': false,
        content_margin: [8, 4, 0, 4],
    },
    {
        class: 'status_bar',
        settings: ['sidebar_on_right'],
        content_margin: [0, 4, 8, 4],
    },
    {
        class: 'status_bar',
        settings: ['!show_sidebar_button'],
        content_margin: [0, 4, 0, 4],
    },
    {
        class: 'status_bar',
        attributes: ['panel_visible'],
        'layer1.opacity': 0,
    },
    {
        class: 'status_bar',
        attributes: ['!panel_visible'],
        'layer1.opacity': 1,
    },
    {
        class: 'vcs_branch_icon',
        settings: ['!show_git_status_in_status_bar'],
        content_margin: 0,
    },
    {
        class: 'vcs_branch_icon',
        settings: ['show_git_status_in_status_bar'],
        'layer0.texture': 'Meetio Theme/textures/actions/branch.png',
        content_margin: 8,
        'layer0.tint': 'var(statusbarIconColor)',
        'layer0.inner_margin': 2,
        'layer0.opacity': 1,
    },
    {
        class: 'vcs_branch_icon',
        attributes: ['hover'],
        'layer0.tint': 'var(statusbarIconColorHover)',
    },

    //  SIDEBAR BUTTON
    {
        class: 'sidebar_button_control',
        settings: ['show_sidebar_button'],
        'layer0.texture': 'Meetio Theme/textures/actions/sidebar.png',
        'layer0.tint': 'var(statusbarIconColor)',
        content_margin: 6,
        'layer0.opacity': 1,
    },
    {
        class: 'sidebar_button_control',
        attributes: ['hover'],
        settings: ['show_sidebar_button'],
        'layer0.tint': 'var(statusbarIconColorHover)',
    },
    {
        class: 'sidebar_button_control',
        settings: ['!show_sidebar_button'],
        content_margin: 0,
        'layer0.opacity': 0.0,
    },
    {
        class: 'sidebar_button_control',
        settings: ['sidebar_on_right'],
        'layer0.texture': 'GitHub Theme/textures/actions/sidebar-right.png',
    },
    {
        class: 'status_container',
        content_margin: [8, 0, 0, 0],
    },
    {
        class: 'status_button',
        content_margin: [10, 0, 10, 0],
        min_size: [80, 0],
    },
    {
        class: 'sidebar_container',
        'layer0.tint': 'var(sidebarBackground)',
        'layer0.opacity': 1,
        'layer1.opacity': 1,
        'layer1.inner_margin': [0, 1, 1, 0],
        'layer1.draw_center': false,
        'layer1.tint': 'var(sidebarBorder)',
        content_margin: [0, 6, 0, 0],
    },
    {
        class: 'sidebar_tree',
        row_padding: 'var(sidebarLabelPadding)',
        indent: 'var(sidebarIndent)',
        indent_offset: 'var(sidebarIndentOffset)',
        indent_top_level: false,
        dark_content: false,
        spacer_rows: true,
    },
    {
        class: 'tree_row',
        attributes: ['!hover'],
        'layer0.opacity': 0,
        'layer1.opacity': 0,
    },
    {
        class: 'tree_row',
        attributes: ['selectable', 'hover'],
        'layer0.tint': 'var(sidebarLabelSelectedBackground)',
        'layer0.opacity': 1,
        'layer1.opacity': 0,
    },
    {
        class: 'tree_row',
        attributes: ['selected'],
        'layer0.tint': 'var(sidebarLabelSelectedBackground)',
        'layer0.opacity': 1,
        'layer1.tint': 'var(sidebarLabelSelectedBorderColor)',
        'layer1.inner_margin': 'var(sidebarLabelSelectedBorderSize)',
        'layer1.draw_center': false,
        'layer1.opacity': 1,
    },
    {
        class: 'sidebar_heading',
        color: ['foreground', 0.4],
        'font.bold': true,
        'font.size': 'var(sidebarHeadingFontSize)',
        'font.face': 'var(fontFace)',
    },
    {
        class: 'sidebar_heading',
        parents: [
            {
                class: 'tree_row',
                attributes: ['selected'],
            },
        ],
    },
    {
        class: 'sidebar_label',
        color: 'var(sidebarLabelColor)',
        'font.size': 'var(sidebarLabelFontSize)',
        'font.face': 'var(fontFace)',
        'font.bold': false,
        'font.italic': false,
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'tree_row',
                attributes: ['hover'],
            },
        ],
        color: 'var(sidebarLabelColorHover)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'tree_row',
                attributes: ['selected'],
            },
        ],
        'font.bold': false,
        color: 'var(sidebarLabelSelectedColor)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expandable'],
            },
        ],
        color: 'var(sidebarLabelColor)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expandable'],
            },
        ],
        settings: ['bold_folder_labels'],
        'font.bold': true,
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expandable', 'selected'],
            },
        ],
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expanded'],
            },
        ],
        color: 'var(sidebarLabelExpandableColor)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expanded'],
            },
        ],
        settings: ['bold_folder_labels'],
        'font.bold': true,
    },
    {
        class: 'sidebar_label',
        attributes: ['transient'],
        'font.italic': false,
    },
    {
        class: 'label_control',
        parents: [
            {
                class: 'status_bar',
            },
        ],
        'font.size': 'var(statusbarLabelFontSize)',
        fg: 'var(statusbarLabelColor)',
    },
    {
        class: 'label_control',
        parents: [
            {
                class: 'window',
            },
            {
                class: 'status_button',
                attributes: ['hover'],
            },
        ],
        fg: 'var(statusbarLabelColorHover)',
    },
    {
        class: 'label_control',
        parents: [
            {
                class: 'button_control',
            },
        ],
        color: ['foreground', 1],
        'font.bold': true,
    },
    {
        class: 'label_control',
        parents: [
            {
                class: 'panel_control',
            },
        ],
        color: ['foreground', 1],
        'font.bold': true,
    },
    {
        class: 'title_label_control',
        fg: ['foreground', 1],
        'font.size': 'var(fontSizeHuge)',
    },
    {
        class: 'label_control',
        parents: [
            {
                class: 'button_control',
            },
        ],
    },
    {
        class: 'scroll_area_control',
        settings: ['overlay_scroll_bars'],
        overlay: true,
    },
    {
        class: 'scroll_area_control',
        settings: ['!overlay_scroll_bars'],
        overlay: false,
    },
    {
        class: 'scroll_area_control',
        parents: [
            {
                class: 'sidebar_container',
            },
        ],
        content_margin: [0, 10, 0, 10],
    },
    {
        class: 'scroll_bar_control',
        'layer0.opacity': 1,
        content_margin: 4,
        tint_index: 0,
    },
    {
        class: 'scroll_bar_control',
        settings: ['overlay_scroll_bars'],
        'layer0.opacity': 0,
    },
    {
        class: 'scroll_bar_control',
        settings: ['!overlay_scroll_bars'],
        'layer0.opacity': 1,
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'popup_control auto_complete_popup',
            },
        ],
        tint_modifier: [0, 0, 0, 0.05],
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'switch_project_window',
            },
        ],
        'layer0.tint': [235, 237, 239],
        tint_index: -1,
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'sidebar_container',
            },
        ],
        'layer0.opacity': 0,
    },
    {
        class: 'scroll_corner_control',
        parents: [
            {
                class: 'sidebar_container',
            },
        ],
        'layer0.opacity': 0,
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'overlay_control',
            },
        ],
        'layer0.opacity': 0,
        content_margin: [4, 0, 0, 0],
    },
    {
        class: 'scroll_track_control',
        'layer0.tint': 'var(scrollBar)',
        'layer0.opacity': 1,
        'layer0.inner_margin': 2,
        content_margin: [4, 4, 3, 4],
    },
    {
        class: 'puck_control',
        'layer0.tint': 'var(scrollTrack)',
        'layer0.opacity': 1,
    },
    {
        class: 'scroll_corner_control',
        'layer0.opacity': 1,
        tint_index: 0,
    },
    {
        class: 'scroll_track_control',
        attributes: ['horizontal'],
        'layer0.tint': 'var(scrollBar)',
        content_margin: [4, 4, 4, 3],
    },
    {
        class: 'puck_control',
        attributes: ['horizontal'],
        'layer0.tint': 'var(scrollTrack)',
    },
    {
        class: 'sheet_contents',
        background_modifier: '',
    },
    {
        class: 'sheet_contents',
        settings: {
            inactive_sheet_dimming: true,
        },
        attributes: ['file_dark', '!highlighted'],
        background_modifier: 'var(tabBackgroundSheetModifier)',
    },
    {
        class: 'sheet_contents',
        settings: {
            inactive_sheet_dimming: true,
        },
        attributes: ['file_medium_dark', '!highlighted'],
        background_modifier: 'var(tabBackgroundSheetModifier)',
    },
    {
        class: 'sheet_contents',
        settings: {
            inactive_sheet_dimming: true,
        },
        attributes: ['file_medium', '!highlighted'],
        background_modifier: 'var(tabBackgroundSheetModifier)',
    },
    {
        class: 'sheet_contents',
        settings: {
            inactive_sheet_dimming: true,
        },
        attributes: ['file_light', '!highlighted'],
        background_modifier: 'var(tabBackgroundSheetModifier)',
    },
    {
        class: 'symbol_container',
        content_margin: 4,
    },
    {
        class: 'symbol_container',
        platforms: ['windows'],
        content_margin: 4,
    },

    {
        class: 'tabset_control',
        'layer0.tint': 'var(tabBackground)',
        'layer0.opacity': 1,
        'layer1.draw_center': false,
        'layer1.inner_margin': [0, 1, 0, 0],
        'layer1.tint': 'var(tabBorder)',
        'layer1.opacity': 1,

        connector_height: 0,
        tint_index: 0,
        tab_overlap: 0,
        tab_width: 'var(tabWidth)',
        tab_height: 'var(tabHeight)',
        content_margin: 'var(tabMargin)',
        mouse_wheel_switch: false,
        tint_modifier: 'var(tabBackground)',
    },
    {
        class: 'tabset_control',
        settings: ['mouse_wheel_switches_tabs', '!enable_tab_scrolling'],
        mouse_wheel_switch: true,
    },
    {
        class: 'tab_control',
        'layer0.tint': ['background', 0],
        'layer0.inner_margin': [24, 8],
        'layer0.opacity': 1,
        tint_index: 0,
        'layer1.tint': ['background', 1],
        'layer1.inner_margin': 8,
        'layer1.opacity': 0,
        'layer2.opacity': 0,
        'layer3.draw_center': false,
        'layer3.inner_margin': [0, 1, 0, 0],
        'layer3.tint': 'var(tabBorder)',
        'layer3.opacity': 1,
        content_margin: [8, 0, 8, 0],
        max_margin_trim: 0,
    },
    {
        class: 'tab_control',
        attributes: ['selected', 'dirty'],
        'layer1.opacity': 1,
        settings: ['highlight_modified_tabs'],
        'layer3.opacity': 1,
        'layer3.inner_margin': 'var(tabSelectedBorderSize)',
        'layer3.draw_center': false,
        'layer3.tint': 'var(tabDiffColor)',
        tint_index: 1,
    },
    {
        class: 'tab_control',
        attributes: ['selected'],
        'layer1.opacity': 1,
        'layer2.opacity': 1,
        'layer2.inner_margin': 'var(tabSelectedBorderSize)',
        'layer2.draw_center': false,
        'layer2.tint': 'var(tabSelectedBorderColor)',
        tint_index: 1,
    },
    {
        class: 'tab_label',
        'font.face': 'var(fontFace)',
        'font.size': 'var(tabFontSize)',
        fg: 'var(tabColor)',
        'font.bold': 'var(tabBold)',
    },
    {
        class: 'tab_label',
        parents: [
            {
                class: 'tab_control',
                attributes: ['selected'],
            },
        ],
        fg: 'var(tabSelectedColor)',
    },
    {
        class: 'tab_label',
        attributes: ['transient'],
        'font.italic': true,
    },
    {
        class: 'tab_label',
        attributes: ['dirty'],
        settings: ['highlight_modified_tabs'],
        fg: 'var(tabDiffColor)',
        'font.italic': 'var(tabDiffItalic)',
    },
    // Tabs - close button
    {
        class: 'tab_control',
        settings: ['show_tab_close_buttons_on_left'],
        close_button_side: 'left',
        content_margin: [8, 8],
    },
    {
        class: 'tab_control',
        settings: ['!show_tab_close_buttons'],
    },
    {
        class: 'tab_close_button',
        settings: ['show_tab_close_buttons'],
        content_margin: [8, 8],
        'layer0.texture': 'Meetio Theme/textures/actions/close.png',
        'layer0.tint': 'var(tabCloseColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        'layer0.inner_margin': [4, 4],
    },
    {
        class: 'tab_close_button',
        attributes: ['!hover'],
        parents: [{ class: 'tab_control', attributes: ['dirty'] }],
        'layer0.texture': 'Meetio Theme/textures/tab/dirty_dot.png',
    },
    {
        class: 'tab_close_button',
        attributes: ['!hover'],
        parents: [{ class: 'tab_control', attributes: ['dirty'] }],
        'layer0.texture': 'Meetio Theme/textures/tab/dirty_pencil.png',
        settings: ['meetio_tabs_diff_pencil_icon'],
    },
    {
        class: 'tab_close_button',
        parents: [
            {
                class: 'tab_control',
                attributes: ['selected'],
            },
        ],
        'layer0.tint': 'var(tabCloseSelectedColor)',
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tab_close_button',
        attributes: ['hover'],
        'layer0.tint': 'var(tabCloseHoverColor)',
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
        'layer1.opacity': 0,
    },
    {
        class: 'tab_close_button',
        parents: [{ class: 'tab_control', attributes: ['added'] }],
        'layer0.tint': 'var(tabCloseNew)',
    },
    {
        class: 'tab_close_button',
        parents: [{ class: 'tab_control', attributes: ['modified'] }],
        'layer0.tint': 'var(tabCloseModified)',
    },
    {
        class: 'tab_close_button',
        parents: [{ class: 'tab_control', attributes: ['deleted'] }],
        'layer0.tint': 'var(tabCloseDeleted)',
    },
    {
        class: 'scroll_tabs_left_button',
        'layer0.texture':
            'Meetio Theme/textures/navigation/arrow_left_small.png',
        'layer0.tint': 'var(tabNavigationColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [10, 10],
    },
    {
        class: 'scroll_tabs_left_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'scroll_tabs_left_button',
        settings: ['hide_tab_scrolling_buttons'],
        content_margin: 0,
    },
    {
        class: 'scroll_tabs_right_button',
        'layer0.texture':
            'Meetio Theme/textures/navigation/arrow_right_small.png',
        'layer0.tint': 'var(tabNavigationColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [10, 10],
    },
    {
        class: 'scroll_tabs_right_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'scroll_tabs_right_button',
        settings: ['hide_tab_scrolling_buttons'],
        content_margin: 0,
    },
    {
        class: 'new_tab_button',
        'layer0.texture': 'Theme - Default/common/new_tab.png',
        'layer0.tint': 'var(tabMoreColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        'layer0.inner_margin': [21, 0, 0, 0],
        content_margin: [12, 12, 10, 12],
    },
    {
        class: 'new_tab_button',
        settings: ['!enable_tab_scrolling'],
        content_margin: [15, 12],
    },
    {
        class: 'new_tab_button',
        settings: ['hide_new_tab_button'],
        content_margin: 0,
    },
    {
        class: 'new_tab_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'show_tabs_dropdown_button',
        'layer0.texture': 'Meetio Theme/textures/actions/more.png',
        'layer0.tint': 'var(tabMoreColor)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [15, 12],
    },
    {
        class: 'show_tabs_dropdown_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tool_tip_control',
        'layer0.tint': 'var(tooltipBackground)',
        'layer0.opacity': 1,
        content_margin: [12, 8],
    },
    {
        class: 'tool_tip_label_control',
        fg: 'var(tooltipLabelColor)',
    },
    {
        class: 'title_bar',
        settings: ['themed_title_bar'],
        bg: 'var(titleBarBackground)',
        fg: 'var(titleBarColor)',
        style: 'system',
    },
    {
        class: 'title_bar',
        settings: ['themed_title_bar'],
        fg: 'var(titleBarColor)',
        style: 'system',
    },
    {
        class: 'title_bar',
        settings: ['themed_title_bar'],
        attributes: ['file_dark'],
        bg: 'var(titleBarBackground)',
        style: 'dark',
    },
    {
        class: 'title_bar',
        attributes: ['file_medium_dark'],
        settings: ['themed_title_bar'],
        bg: 'var(titleBarBackground)',
        style: 'dark',
    },
    {
        class: 'title_bar',
        attributes: ['file_medium'],
        settings: ['themed_title_bar'],
        bg: 'var(titleBarBackground)',
        style: 'light',
    },
    {
        class: 'title_bar',
        attributes: ['file_light'],
        settings: ['themed_title_bar'],
        bg: 'var(titleBarBackground)',
        fg: 'var(titleBarColor)',
        style: 'light',
    },
    {
        class: 'minimap_control',
        settings: ['always_show_minimap_viewport'],
        viewport_color: 'color(var(accent) a(0.2))',
        viewport_opacity: 'var(minimapOpacity)',
    },
    {
        class: 'minimap_control',
        settings: ['!always_show_minimap_viewport'],
        viewport_opacity: {
            target: 0,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'minimap_control',
        attributes: ['hover'],
        settings: ['!always_show_minimap_viewport'],
        viewport_opacity: {
            target: 0.4,
            speed: 20,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['untracked'],
            },
        ],
        'layer0.texture': 'Meetio Theme/textures/vcs/vcs_untracked.png',
        'layer0.tint': 'var(vcsUntracked)',
        content_margin: 'var(vcsBadgeSize)',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['modified'],
            },
        ],
        'layer0.texture': 'Meetio Theme/textures/vcs/vcs_modified.png',
        'layer0.tint': 'var(vcsModified)',
        content_margin: 'var(vcsBadgeSize)',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['added'],
            },
        ],
        'layer0.texture': 'Meetio Theme/textures/vcs/vcs_added.png',
        'layer0.tint': 'var(vcsAdded)',
        content_margin: 'var(vcsBadgeSize)',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['unmerged'],
            },
        ],
        'layer0.texture': 'Theme - Default/common/status_unmerged.png',
        'layer0.tint': 'var(vcsUnmerged)',
        content_margin: 'var(vcsBadgeSize)',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['staged'],
            },
        ],
        'layer0.texture': 'Meetio Theme/textures/vcs/vcs_staged.png',
        'layer0.tint': 'var(vcsStaged)',
        content_margin: 'var(vcsBadgeSize)',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['deleted'],
            },
        ],
        'layer0.tint': 'var(vcsDeleted)',
        content_margin: 'var(vcsBadgeSize)',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['missing'],
            },
        ],
        'layer0.tint': 'var(vcsMissing)',
        content_margin: 'var(vcsBadgeSize)',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expandable'],
            },
        ],
        'layer0.texture': 'Theme - Default/common/status_modified.png',
    },
    {
        class: 'vcs_status_badge',
        parents: [
            {
                class: 'tree_row',
                attributes: ['expandable'],
            },
            {
                class: 'file_system_entry',
                attributes: ['unmerged'],
            },
        ],
        'layer0.texture': 'Theme - Default/common/status_unmerged.png',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['ignored'],
            },
        ],
        color: 'color(var(vcsIgnored)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['untracked'],
            },
        ],
        color: 'var(vcsUntracked)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['modified'],
            },
        ],
        color: 'var(vcsModified)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['added'],
            },
        ],
        color: 'var(vcsAdded)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['unmerged'],
            },
        ],
        color: 'var(vcsUnmerged)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['missing'],
            },
        ],
        color: 'var(vcsMissing)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['deleted'],
            },
        ],
        color: 'var(vcsDeleted)',
    },
    {
        class: 'sidebar_label',
        parents: [
            {
                class: 'file_system_entry',
                attributes: ['staged'],
            },
        ],
        color: 'var(vcsStaged)',
    },
    {
        class: 'vcs_changes_annotation',
        border_color: 'var(statusbarLabelColor)',
        content_margin: [3, 1, 3, 1],
    },
];

export function getThemeHidden(): ThemeSetting {
    return {
        variables,
        rules,
    };
}

export function getThemeDefault(): ThemeSetting {
    return {
        extends: 'Meetio Theme.hidden-theme',
        variables,
        rules,
    };
}

export function getThemeHighContrast(): ThemeSetting {
    return {
        extends: 'Meetio Theme.hidden-theme',
        variables: {
            ...variables,
            backgroundContrast:
                'color(var(foreground) blend(var(background) 5%)))',
            borderContrast:
                'color(var(foreground) blend(var(background) 15%)))',
            titleBarBackground: 'var(backgroundContrast)',
            sidebarBackground: 'var(backgroundContrast)',
            statusbarBackground: 'var(backgroundContrast)',
            sidebarBorder: 'var(borderContrast)',
            tabBorder: 'var(borderContrast)',
            statusBarBorder: 'var(borderContrast)',
            panelControlBorder: 'var(borderContrast)',
        },
        rules,
    };
}

export function generateTheme(options: GenerateTheme) {
    const { settings, output } = options;

    // eslint-disable-next-line no-undef
    const dist = output.path || path.resolve(__dirname, '../');

    fs.mkdir(dist, () => {
        try {
            fs.writeFileSync(
                `${dist}/${output.filename}${
                    output.extension || '.sublime-theme'
                }`,
                JSON.stringify(
                    {
                        extends: settings.extends,
                        variables: settings.variables || [],
                        rules: settings.rules,
                    },
                    null,
                    4
                )
            );
        } catch (e) {
            console.error(e);
        }
    });
}
