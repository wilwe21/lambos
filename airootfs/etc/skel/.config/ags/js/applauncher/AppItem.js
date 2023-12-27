import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import options from '../options.js';
import { lookUpIcon } from 'resource:///com/github/Aylur/ags/utils.js';

/** @param {import('resource:///com/github/Aylur/ags/service/applications.js').Application} app */
export default app => {
    const title = Widget.Label({
        class_name: 'title',
        label: app.name,
        binds: [['visible', options.applauncher.labvisible]],
        xalign: 0,
        vpack: 'center',
        truncate: 'end',
    });

    const description = Widget.Label({
        class_name: 'description',
        label: app.description || '',
        binds: [['visible', options.applauncher.descvisible]],
        wrap: true,
        xalign: 0,
        justification: 'left',
        vpack: 'center',
    });

    const icon = Widget.Icon({
        icon: lookUpIcon(app.icon_name || '') ? app.icon_name || '' : '',
        binds: [
            ['size', options.applauncher.icon_size],
            ['visible', options.applauncher.icovisible],
        ],
    });

    const textBox = Widget.Box({
        vertical: true,
        vpack: 'center',
        children: app.description ? [title, description] : [title],
    });

    return Widget.Button({
        class_name: 'app-item',
        setup: self => self.app = app,
        on_clicked: () => {
            App.closeWindow('applauncher');
            app.launch();
        },
        child: Widget.Box({
            children: [icon, textBox],
        }),
    });
};