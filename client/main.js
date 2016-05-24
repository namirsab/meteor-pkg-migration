import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { WindowState } from 'meteor/qlp:qlp-window-state';

import './main.html';

Template.body.helpers({
    windowIsMaximized: () => WindowState.isMaximized(),
    height: () => WindowState.height(),
    width: () => WindowState.width()
});
