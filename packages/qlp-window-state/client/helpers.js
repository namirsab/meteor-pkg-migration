// We don't need to import it, it's global for the package
Template.registerHelper('windowIsMaximized', function() {
    return WindowState.isMaximized();
});
