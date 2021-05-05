import sublime
import sublime_plugin

OPTIONAL_SETTINGS = {
    # Show icon diff in tab.
    "meetio_tabs_diff_icon": {
        "default": True,
        "description": "Show icon diff in tab",
        "title": "Meetio Tabs Diff Icon"
    },
    # Show diff pencil icon in tab.
    "meetio_tabs_diff_pencil_icon": {
        "default": True,
        "description": "Show diff pencil icon in tab",
        "title": "Meetio Tabs Diff Pencil Icon"
    },

    # Set disclosure tree controls.
    "meetio_sidebar_disclosure": {
        "default": False,
        "description": "Set disclosure tree controls",
        "title": "Meetio Sidebar Disclosure"
    },

    # Show icon search in inputs.
    "meetio_input_search_icon": {
        "default": True,
        "description": "Show icon search in inputs",
        "title": "Meetio Input Search Icon"
    },

    # Show button close on "Find" panel.
    "meetio_panel_close_button": {
        "default": True,
        "description": "Show button close on \"Find\" panel",
        "title": "Meetio Panel Close Button"
    },

    # Enable high contrast colors
    "meetio_high_contrast": {
        "default": True,
        "description": "Enable the high contrast theme",
        "title": "Meetio High Contrast Theme"
    },
}


class MeetioSettingsCommand(sublime_plugin.TextCommand):
    def run(self, edit, setting, value):
        if not isinstance(value, bool):
            return

        if setting not in OPTIONAL_SETTINGS.keys():
            return

        s = sublime.load_settings('Preferences.sublime-settings')

        s.set(setting, value)
        sublime.save_settings('Preferences.sublime-settings')

    def input(self, args):
        return MeetioSettingsInputHandler()

    def is_visible(self):
        s = sublime.load_settings('Preferences.sublime-settings')
        theme = s.get('theme')
        return theme in ['Meetio Theme.sublime-theme', 'Meetio Theme High Contrast.sublime-theme']


class MeetioSettingsInputHandler(sublime_plugin.ListInputHandler):
    def name(self):
        return 'setting'

    def list_items(self):

        s = sublime.load_settings('Preferences.sublime-settings')
        return [
            sublime.ListInputItem(
                OPTIONAL_SETTINGS[index]['title'],
                index,
                '<strong>State:</strong> %s <strong>Description:</strong> %s' % (
                    s.get(index, OPTIONAL_SETTINGS[index]['default']), OPTIONAL_SETTINGS[index]['description'])
            )
            for index in OPTIONAL_SETTINGS
        ]

    def next_input(self, args):
        return MeetioBooleanInputHandler()


class MeetioBooleanInputHandler(sublime_plugin.ListInputHandler):
    def name(self):
        return 'value'

    def list_items(self):
        return [sublime.ListInputItem(str(item), item) for item in [True, False]]
