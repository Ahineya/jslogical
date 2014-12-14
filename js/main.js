;(function(window) {

    var source1 = new window.elements.Source();
    var source2 = new window.elements.Source();
    var not = new window.elements.Not();
    var or = new window.elements.Or();
    var and = new window.elements.And();

    var nand = new elements.Nand();
    var xor = new elements.Xor();


    var end = pin(xor, pin(not, source1), source2);

   /*

    var end = pin(nand, source1, source2);
    */
    console.log( end.ask() );

})(window);