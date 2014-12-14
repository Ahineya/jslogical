;(function(window) {

    function Or() {
        this.name = 'Or';

        this.pins = [
            {
                ask: function() {
                    return false;
                }
            },
            {
                ask: function() {
                    return false;
                }
            }
        ];

        //console.log(this.name + " created");

        this.ask = function() {
            trace(this);
            return (this.pins[0].ask() || this.pins[1].ask());
        }

    }

    window.elements = window.elements || {};
    window.elements.Or = Or;

})(window);