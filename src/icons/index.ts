export interface ISetting {
    width: number;
    height: number;
    suffix: string | boolean;
    preserveAspectRatio?: boolean | string;
}

export interface IIcon {
    name: string;
    settings: ISetting[];
}

export interface IOptions {
    folder: string;
    icons: IIcon[];
}

const defaultSettings: ISetting[] = [
    { width: 24, height: 24, suffix: false, preserveAspectRatio: true },
    { width: 48, height: 48, suffix: '@2x', preserveAspectRatio: true },
    { width: 72, height: 72, suffix: '@3x', preserveAspectRatio: true },
];

export const icons: IOptions[] = [
    {
        folder: 'actions',
        icons: [
            {
                name: 'branch',
                settings: defaultSettings,
            },
            {
                name: 'close',
                settings: defaultSettings,
            },
            {
                name: 'history',
                settings: defaultSettings,
            },
            {
                name: 'more',
                settings: [
                    {
                        width: 52,
                        height: 48,
                        suffix: false,
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                    {
                        width: 104,
                        height: 96,
                        suffix: '@2x',
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                    {
                        width: 156,
                        height: 144,
                        suffix: '@3x',
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                ],
            },
            {
                name: 'sidebar',
                settings: defaultSettings,
            },
        ],
    },
    {
        folder: 'input',
        icons: [
            {
                name: 'search',
                settings: [
                    {
                        width: 52,
                        height: 48,
                        suffix: false,
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                    {
                        width: 104,
                        height: 96,
                        suffix: '@2x',
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                    {
                        width: 156,
                        height: 144,
                        suffix: '@3x',
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                ],
            },
        ],
    },
    {
        folder: 'find',
        icons: [
            {
                name: 'case_sensitive',
                settings: defaultSettings,
            },
            {
                name: 'highlight_matches',
                settings: defaultSettings,
            },
            {
                name: 'in_context',
                settings: defaultSettings,
            },
            {
                name: 'in_selection',
                settings: defaultSettings,
            },
            {
                name: 'preserve_case',
                settings: defaultSettings,
            },
            {
                name: 'regex',
                settings: defaultSettings,
            },
            {
                name: 'use_buffer',
                settings: defaultSettings,
            },
            {
                name: 'use_gitignore',
                settings: defaultSettings,
            },
            {
                name: 'whole_word',
                settings: defaultSettings,
            },
            {
                name: 'wrap',
                settings: defaultSettings,
            },
        ],
    },
    {
        folder: 'navigation',
        icons: [
            {
                name: 'arrow_down',
                settings: defaultSettings,
            },
            {
                name: 'arrow_left',
                settings: defaultSettings,
            },
            {
                name: 'arrow_left_small',
                settings: defaultSettings,
            },
            {
                name: 'arrow_right',
                settings: defaultSettings,
            },
            {
                name: 'arrow_right_small',
                settings: defaultSettings,
            },
        ],
    },
    {
        folder: 'tab',
        icons: [
            {
                name: 'dirty_dot',
                settings: [
                    {
                        width: 52,
                        height: 52,
                        suffix: false,
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                    {
                        width: 96,
                        height: 96,
                        suffix: '@2x',
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                    {
                        width: 156,
                        height: 156,
                        suffix: '@3x',
                        preserveAspectRatio: 'xMinYMid meet',
                    },
                ],

            },
            {
                name: 'dirty_pencil',
                settings: defaultSettings,
            },
        ],
    },
    {
        folder: 'tree',
        icons: [
            {
                name: 'disclosure_collapsed',
                settings: defaultSettings,
            },
            {
                name: 'disclosure_expanded',
                settings: defaultSettings,
            },
            {
                name: 'folder_closed',
                settings: defaultSettings,
            },
            {
                name: 'folder_dup',
                settings: defaultSettings,
            },
            {
                name: 'folder_open',
                settings: defaultSettings,
            },
        ],
    },
    {
        folder: 'vcs',
        icons: [
            {
                name: 'vcs_added',
                settings: defaultSettings,
            },
            {
                name: 'vcs_modified',
                settings: defaultSettings,
            },
            {
                name: 'vcs_staged',
                settings: defaultSettings,
            },
            {
                name: 'vcs_untracked',
                settings: defaultSettings,
            },
        ],
    },
];
