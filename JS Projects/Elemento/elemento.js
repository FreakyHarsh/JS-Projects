(function (global, $) {

    //Elemento is a constructor function that does all the work and later exported to global object for direct access;
    var Elemento = function(element, txt, appendToId){
        return new Elemento.init(element, txt, appendToId);
    }

    Elemento.init = function(element='', txt='', appendToId=''){
        var self = this;
        let el = document.createElement(element);
        let text = document.createTextNode(txt);
        el.appendChild(text);
        document.getElementById(appendToId).appendChild(el);
        console.log(`<${element}>${txt}<${element}>`)
    }

    Elemento.init.prototype = Elemento.prototype;
    
    global.Elemento = global.E$ = Elemento;


})(window, jQuery);