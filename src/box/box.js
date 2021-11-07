var singletonMrMeeseeks = require('../meeseeks/meeseeks')

function Box() {
  this.name = "Rick's Box";
  this.mrMeeseeks = null;
}

Box.prototype.createMrMeeseeks = function () {
    if (! this.mrMeeseeks) {
        this.mrMeeseeks = singletonMrMeeseeks.singletonMrMeeseeks.get();
    }
    let meeseeksClon = Object.create(this.mrMeeseeks);
    return meeseeksClon;
}

Box.prototype.pressButton = function (reality) {
    let mrMeeseeksTemp = this.createMrMeeseeks();
    mrMeeseeksTemp.speakOnCreate();
    reality.push(mrMeeseeksTemp)
}

Box.prototype.getProtoMeeseks = function() {
    return this.mrMeeseeks;
};

var factory = (function singleBox() {
    
    const boxInstance = new Box();

    return { 
        getBox :function getBox() {
            return boxInstance;
        }
    };
})(); 

exports.singletonBox = factory;
