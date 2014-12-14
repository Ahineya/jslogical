;(function(window) {

    function NotAnd() {
        this.name = 'NotAnd';
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

            var and = new window.elements.And();
            var not = new window.elements.Not();

            pin(and, this.pins[0], this.pins[1]);
            pin(not, and);

            return not.ask();

        }

    }

    window.elements = window.elements || {};
    window.elements.Nand = NotAnd;

})(window);