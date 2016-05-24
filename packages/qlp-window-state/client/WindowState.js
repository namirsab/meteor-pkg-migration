let height = new ReactiveVar(window.outerHeight);
let width = new ReactiveVar(window.outerWidth);
var $window = $(window);

Meteor.startup(() => {
    $window.resize(function () {
        height.set(window.outerHeight);
        width.set(window.outerWidth);
    });    
});


WindowState = {
    isMaximized() {
        const currentHeight = height.get();
        const currentWidth = width.get();
        const availHeight = screen.availHeight * 0.9;
        const availWidth = screen.availWidth * 0.9;

        return !(currentHeight < availHeight || currentWidth < availWidth)
    }
};
