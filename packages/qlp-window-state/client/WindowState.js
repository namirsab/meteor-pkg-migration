WindowState = (function () {
    var height = new ReactiveVar(window.outerHeight);
    var width = new ReactiveVar(window.outerWidth);
    var $window = $(window);

    $window.resize(function () {
        height.set(window.outerHeight);
        width.set(window.outerWidth);
    });

    return {
        isMaximized: function () {
            if (height.get() < (screen.availHeight * 0.9) || width.get() < (screen.availWidth * 0.9)) {
                return false;
            }
            else {
                return true;
            }
        }
    };
})();