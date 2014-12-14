;(function(window) {

    function Not() {
        this.name = 'Not';
        this.pins = [
            {
                ask: function() {
                    return false;
                }
            }
        ];

        //console.log(this.name + " created");

        this.ask = function() {
            trace(this);
            return !(this.pins[0].ask());
        }

    }

    window.elements = window.elements || {};
    window.elements.Not = Not;

})(window);