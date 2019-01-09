"""Changelog."""
import sublime
import sublime_plugin
import webbrowser

# Repository command.
class MeetioRepoCommand(sublime_plugin.WindowCommand):
    def run(self):
        """Open the repository in a browser tab."""
        webbrowser.open_new_tab('https://github.com/mauroreisvieira/meetio')


# Issues command.
class MeetioIssuesCommand(sublime_plugin.WindowCommand):
    def run(self):
        """Open the issues page in a browser tab"""
        webbrowser.open_new_tab('https://github.com/mauroreisvieira/meetio/issues')
