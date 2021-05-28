import sublime
import sublime_plugin

OPTIONAL_SETTINGS = {
    "meetio_tabs_diff_icon": {
        "default": True,
        "description": "Icon diff if the tab as modified.",
        "title": "Show Tab Diff Icon"
    },
    "meetio_tabs_diff_pencil_icon": {
        "default": True,
        "description": "Diff pencil if the tab as modified.",
        "title": "Show Tab Diff Pencil"
    },
    "meetio_sidebar_disclosure": {
        "default": True,
        "description": "An expand/collapse icon present in all tree rows that can be expanded.",
        "title": "Show Sidebar Disclosure"
    },
    "meetio_input_search_icon": {
        "default": True,
        "description": "The search icon in the text input used by the Quick Panel.",
        "title": "Show Search Icon"
    },
    "meetio_panel_close_button": {
        "default": True,
        "description": "The button to close the open panel.",
        "title": "Show close button in Panel."
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
                '%s' % (OPTIONAL_SETTINGS[index]['description']))
            for index in OPTIONAL_SETTINGS
        ]

    def next_input(self, args):
        return MeetioBooleanInputHandler()

class MeetioBooleanInputHandler(sublime_plugin.ListInputHandler):
    def name(self):
        return 'value'

    def list_items(self):
        return [sublime.ListInputItem(str(item), item) for item in [True, False]]
