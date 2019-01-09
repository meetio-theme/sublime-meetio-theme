# -*- coding: utf-8 -*-

"""
Meetio Changelog
"""

import sublime
import sublime_plugin
import webbrowser

STYLES = '''
.mdpopups {
  {{'.background'|css}}
}

.mo-config-changes ul li, .mo-config-changes p {
  {{'.foreground'|css}}
}

.mo-config-changes a {
  text-decoration: none;
  color: #6D88FF;
}

.mo-config-changes h1,
.mo-config-changes h2,
.mo-config-changes h3,
.mo-config-changes h4,
.mo-config-changes h5,
.mo-config-changes h6 {
  {{'.string'|css('color')}}
}

.mo-config-changes h1,
.mo-config-changes h2 {
  margin-top: 50px;
}

.mo-config-changes h3,
.mo-config-changes h4 {
  margin-top: 30px;
}
'''

class MoChangesCommand(sublime_plugin.WindowCommand):
  def on_navigate(self, href):
    webbrowser.open_new_tab(href)

  def run(self):
      import mdpopups
      text = sublime.load_resource('Packages/Meetio/CHANGELOG.md')
      view = self.window.new_file()
      view.set_name('Meetio Changelog')
      view.settings().set('gutter', False)
      html = '<div class="mo-config-changes">%s</div>' % mdpopups.md2html(view, text)
      mdpopups.add_phantom(view, 'changelog', sublime.Region(0), html, sublime.LAYOUT_INLINE, css=STYLES, on_navigate=self.on_navigate)
      view.set_read_only(True)
      view.set_scratch(True)

  def is_enabled(self):
      try:
          import mdpopups
      except Exception:
          return False

      return (mdpopups.version() >= (1, 9, 0)) and (int(sublime.version()) >= 3119)

  is_visible = is_enabled
