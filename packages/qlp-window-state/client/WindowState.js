import { ReactivVar} from 'meteor/reactive-var';
import { jQuery as $} from 'meteor/jquery'; // Note we import everything now

const height = new ReactiveVar(window.outerHeight);
const width = new ReactiveVar(window.outerWidth);
const $window = $(window);

Meteor.startup(() => {
    $window.resize(function () {
        height.set(window.outerHeight);
        width.set(window.outerWidth);
    });
});

// The symbol is not global anymore
const WindowState = {
    isMaximized() {
        const currentHeight = height.get();
        const currentWidth = width.get();
        const availHeight = screen.availHeight * 0.9;
        const availWidth = screen.availWidth * 0.9;

        return !(currentHeight < availHeight || currentWidth < availWidth);
    },

    height: () => height.get(),
    width: () => width.get()
};

export {
    WindowState
};
