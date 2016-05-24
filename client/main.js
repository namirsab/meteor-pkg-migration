import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
    windowIsMaximized: () => WindowState.isMaximized(),
    height: () => WindowState.height(),
    width: () => WindowState.width()
});
