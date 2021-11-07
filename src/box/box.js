var singletonMeeseeks = require('../meeseeks/meeseeks')

function Box() {
  this.name = "Rick's Box";
  this.meeseeks = null;
}

Box.prototype.createMeeseeks = function () {
    this.meeseeks = singletonMeeseeks.singletonMeeseeks.get()
    return this.meeseeks
}

Box.prototype.singletonMeeseeks 

var factory = (function singleBox() {
    
    const boxInstance = new Box();

    return { 
        getBox :function getBox() {
            return boxInstance;
        }
    };
})(); 

exports.singletonBox = factory;
