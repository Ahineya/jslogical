;(function(window) {

    function Source() {
        this.name = 'Source';
        //console.log(this.name + " created");

        this.ask = function() {
            return true;
        }

    }

    window.elements = window.elements || {};
    window.elements.Source = Source;

})(window);