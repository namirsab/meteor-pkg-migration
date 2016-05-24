import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// Now we don't prefix it with 'meteor/'
import { WindowState } from 'qlp-window-state';

import './main.html';

Template.body.helpers({
    windowIsMaximized: () => WindowState.isMaximized(),
    height: () => WindowState.height(),
    width: () => WindowState.width()
});
