import  { WindowState }  from './WindowState.js';
// We have to import the WindowState symbol to use it
Template.registerHelper('windowIsMaximized', function() {
    return WindowState.isMaximized();
});
