;(function(window) {

    function Xor() {
        this.name = 'Xor';
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

        console.log(this.name + " created");

        this.ask = function() {

            trace(this);

            var nand1 = new window.elements.Nand();
            var nand2 = new window.elements.Nand();
            var nand3 = new window.elements.Nand();
            var nand4 = new window.elements.Nand();

            pin(nand1, this.pins[0], this.pins[1]);

            pin(nand2, this.pins[0], nand1);
            pin(nand3, this.pins[1], nand1);

            pin(nand4, nand2, nand3);

            return nand4.ask();

        }

    }

    window.elements = window.elements || {};
    window.elements.Xor = Xor;

})(window);