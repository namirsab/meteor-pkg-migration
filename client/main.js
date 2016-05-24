import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { WindowState } from 'meteor/qlp:qlp-window-state';

import './main.html';

Template.body.helpers({
    height() {
        return WindowState.height();
    },
    width() {
        return WindowState.width();
    }
});
