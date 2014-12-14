;(function(window) {

    function And() {
        this.name = 'And';
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
            return (this.pins[0].ask() && this.pins[1].ask());
        }

    }

    window.elements = window.elements || {};
    window.elements.And = And;

})(window);