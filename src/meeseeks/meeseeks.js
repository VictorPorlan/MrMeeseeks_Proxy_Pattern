function Meeseeks () {
    this.createLine = "I'm Mr Meeseeks, look at me!"
    this.doActionLine = ['Can do!', "I'll do it!"]
}

Meeseeks.prototype.greet = function() {console.log(this.createLine)}

Meeseeks.prototype.doAction = function(action) {
    let message = this.doActionLine[Math.floor(Math.random() * this.doActionLine.length)]
    console.log(message)
    console.log(`Action ${action} done!`)
}


var factory = (function singletonMrMeeseeks() {

    const prototipo = new Meeseeks();

    return {
        get: function() {
            return prototipo;
        }
    };
})();

exports.singletonMeeseeks = factory