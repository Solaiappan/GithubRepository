"use strict";

(function(services) {
    services.factory('helper', function () {

        return {
            formatString: function () {
                var newStr = arguments[0], i = 0;
                while (/%s/.test(newStr))
                    newStr = newStr.replace("%s", arguments[++i]);

                return newStr;
            },
            debounce: function (fn, delay) {
                var timer = null;
                return function () {
                        var context = this, args = arguments;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            fn.apply(context, args);
                        }, delay);
                    }
            }
        }

    });
}(sharedServices));

