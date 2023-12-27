/**
 * A Theme is a set of options that will be applied
 * ontop of the default values. see options.js for possible options
 */
import { Theme, WP, HOME } from './settings/theme.js';

export default [

 Theme({
    name: 'Catppuccin Macchiato',
    icon: "~/.config/ags/icons/cat.png",

    "spacing": 2,
    "padding": 7,
    "radii": 7,
    "popover_padding_multiplier": 1.4,
    "misc.pywal.theme": "base16-seti",
    "misc.gtk.theme": "Catppuccin-Macchiato-Standard-Mauve-Dark",
    "misc.gtkIcons.theme": "Catppuccin-Macchiato",
    "color.red": "#F38BA8",
    "color.green": "#A6E3A1",
    "color.yellow": "#F9E2AF",
    "color.moon": "#F9E2AF",
    "color.blue": "#89B4FA",
    "color.temp": "#F38BA8",
    "color.download": "#A6E3A1",
    "color.cpucolor": "#F9E2AF",
    "color.upload": "#89B4FA",
    "color.magenta": "#CBA6F7",
    "color.teal": "#94E2D5",
    "color.orange": "#FAB387",
    "color.playcolor": "#FAB387",
    "theme.scheme": "dark",
    "theme.bg": "#181825",
    "theme.fg": "#CDD6F4",
    "theme.accent.accent": "#CBA6F7",
    "theme.accent.fg": "$bg-color",
    "theme.accent.gradient": "to right, $accent, lighten(#D2AC31, 20%)",
    "theme.widget.bg": "$fg-color",
    "theme.widget.opacity": 94,
    "bar.decorator1": "~/.config/ags/icons/null.png",
    "bar.decorator2": "~/.config/ags/icons/null.png",
    "bar.dsize": 120,
    "clock.main": '%H:%M',
    "clock.font": 'Concert One',
    "clock.fontsize": '90',
    "clock.color": '#dbb5ff',
    "clock.ml": '100',
    "clock.mt": '140',
    "clock.a2": 'right',
    "clock.a1": 'top',
    "clock.visible": true,
    "moon.visible": false,
    "menu.visible": false,
    "border.color.": "#0000FB",
    "border.opacity": 100,
    "border.width": 2,
    "border.barcolor": "$accent",
    "hypr.inactive_border": "rgba(333333ff)",
    "hypr.wm_gaps": 3,
    "font.font": "Ubuntu Nerd Font",
    "font.mono": "Mononoki Nerd Font",
    "font.size": 13,
    "applauncher.width": 500,
    "applauncher.height": 400,
    "applauncher.icon_size": 32,
    "bar.position": "top",
    "bar.style": "floating",
    "bar.flat_buttons": true,
    "bar.separators": false,
    "bar.icon": "~/.config/ags/icons/cat.png",
    "battery.bar.width": 50,
    "battery.bar.height": 14,
    "battery.low": 15,
    "battery.medium": 35,
    "desktop.wallpaper.fg": "#fff",
    "desktop.wallpaper.img": "~/.config/ags/wallpapers/main.png",
    "desktop.avatar": "/var/lib/AccountsService/icons/wilwe",
    "desktop.drop_shadow": false,
    "desktop.shadow": "rgba(0, 0, 0, .6)",
    "notifications.black_list": [
      "Spotify"
    ],
    "notifications.position": [
      "top"
    ],
    "notifications.width": 450,
    "dashboard.sys_info_size": 70,
    "mpris.preferred": "spotify",
    "workspaces": 5,
  }),

 Theme({
    name: 'Catppuccin Latte',
    icon: "~/.config/ags/icons/cat.png",

    "spacing": 2,
    "padding": 7,
    "radii": 7,
    "popover_padding_multiplier": 1.4,
    "misc.pywal.theme": "base16-seti",
    "misc.gtk.theme": "Catppuccin-Latte-Standard-Blue-Light",
    "misc.gtkIcons.theme": "Catppuccin-Latte",
    "color.red": "#3CB6B6",
    "color.green": "#00ce12",
    "color.yellow": "#9d6c00",
    "color.moon": "#F9E2AF",
    "color.blue": "#0051d5",
    "color.temp": "#FF8B47",
    "color.download": "#00ce12",
    "color.cpucolor": "#9d6c00",
    "color.upload": "#0051d5",
    "color.magenta": "#CBA6F7",
    "color.teal": "#94E2D5",
    "color.orange": "#FAB387",
    "color.playcolor": "#3CB6B6",
    "theme.scheme": "light",
    "theme.bg": "#F1ECFA",
    "theme.fg": "#452C1F",
    "theme.accent.accent": "#4DB0DD",
    "theme.accent.fg": "$bg-color",
    "theme.accent.gradient": "to right, $accent, lighten(#35ADAE, 20%)",
    "theme.widget.bg": "$fg-color",
    "theme.widget.opacity": 94,
    "bar.decorator1": "~/.config/ags/icons/null.png",
    "bar.decorator2": "~/.config/ags/icons/null.png",
    "clock.visible": false,
    "moon.visible": false,
    "menu.visible": false,
    "border.color.": "$orange",
    "border.opacity": 100,
    "border.width": 2,
    "border.barcolor": "$accent",
    "hypr.inactive_border": "#FAB387",
    "hypr.wm_gaps": 3,
    "font.font": "Ubuntu Nerd Font",
    "font.mono": "Mononoki Nerd Font",
    "font.size": 13,
    "applauncher.width": 500,
    "applauncher.height": 400,
    "applauncher.icon_size": 32,
    "bar.position": "top",
    "bar.style": "floating",
    "bar.flat_buttons": true,
    "bar.separators": false,
    "bar.icon": "~/.config/ags/icons/cat.png",
    "battery.bar.width": 50,
    "battery.bar.height": 14,
    "battery.low": 15,
    "battery.medium": 35,
    "desktop.wallpaper.fg": "#fff",
    "desktop.wallpaper.img": "~/.config/ags/wallpapers/mainwhite.png",
    "desktop.avatar": "/var/lib/AccountsService/icons/wilwe",
    "desktop.drop_shadow": false,
    "desktop.shadow": "rgba(0, 0, 0, .6)",
    "notifications.black_list": [
      "Spotify"
    ],
    "notifications.position": [
      "top"
    ],
    "notifications.width": 450,
    "dashboard.sys_info_size": 70,
    "mpris.preferred": "spotify",
    "workspaces": 5,
  }),
];


