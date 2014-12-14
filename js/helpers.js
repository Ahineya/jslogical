;(function(window) {

    function pin(element) {
        var args = Array.prototype.slice.call(arguments);

        for (var i = 1; i<args.length; i++) {
            element.pins[i-1] = args[i];
        }

        return element;
    }

    function trace(element) {
        var pinNames = element.pins.map(function(item) {return item.name;});
        console.log(element.name + ": ", pinNames);
        return element;
    }

    window.pin = window.pin || pin;
    window.trace = window.trace || trace;

})(window);