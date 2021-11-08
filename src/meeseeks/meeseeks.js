function Meeseeks() {
  this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
  this.messageOnRequest = ["Oooh yeah! Can do!", 
  "Yes sireee!" , 
  "Oh, yeah!, Yes, ma'am!"];
}

Meeseeks.prototype.speakOnCreate = function () {
  console.log(this.messageOnCreate);
};

Meeseeks.prototype.speakOnRequest = function () {
  let message =
    this.messageOnRequest[
      Math.floor(Math.random() * this.messageOnRequest.length)
    ];
  console.log(message);
  return message;
};

Meeseeks.prototype.fulfillRequest = function () {
  console.log(this.accion() + " All done!!");
  return this.accion() + " All done!!";
};

Meeseeks.prototype.makeRequest = function (action, object) {
  let closure = function (cosa) {
    function execute() {
      return action + " " + cosa;
    }
    return execute;
  };
  this.accion = closure(object);
  this.speakOnRequest();
};

Meeseeks.prototype.learnRequest = function (deseo, objeto) {
  this.accion = deseo(objeto);
};

Meeseeks.prototype.formaDeSuicidio = function (arma, forma) {
  let closure = function () {
    return function suicidarse() {
      return forma + " con " + arma;
    };
  };
  this.suicidio = closure()
};

Meeseeks.prototype.endPain = function () {
  console.log('MrMeeseeks ha acabado con su sufrimeinto: ' + this.suicidio())
}

var factory = (function singletonMrMeeseeks() {
  const prototipo = new Meeseeks();

  return {
    get: function () {
      return prototipo;
    },
  };
})();

exports.singletonMrMeeseeks = factory;
