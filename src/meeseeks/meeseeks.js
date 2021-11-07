function Meeseeks() {
  this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
  this.messageOnRequest = ["Can do!", "I'll do it!"];
}

Meeseeks.prototype.speakOnCreate = function () {
  console.log(this.messageOnCreate);
};

Meeseeks.prototype.speakOnRequest = function () {
  let message = this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]
  console.log(message);
  return message;
};

Meeseeks.prototype.fulfillRequest = function() {
    console.log(this.accion() + " All done!!");
    return this.accion() + " All done!!";
};

Meeseeks.prototype.makeRequest = function (action, object) {
  let closure = function (cosa) {
    function execute() {
      return deseo + " " + cosa;
    }
    return execute;
  };
  this.accion = closure(objeto);
  this.speakOnRequest();
};
var factory = (function singletonMrMeeseeks() {
  const prototipo = new Meeseeks();

  return {
    get: function () {
      return prototipo;
    },
  };
})();

exports.singletonMrMeeseeks = factory;
