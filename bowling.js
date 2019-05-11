var Frame = require('./frame')

function Bowling() {
  this._frame = new Frame();
  this._frameCount = 1;
  this._play = 1;
  this._scorecard = []
};

Bowling.prototype.roll = function(pin){
  if (this.getPlay() === 1) {
    this._frame.setPlayOne(pin);
    this._play = 2;
  } else if (this.getPlay() === 2) {
    this._frame.setPlayTwo(pin);
    this._scorecard.push(this._frame._result);
    this._frameCount ++;
    this._play = 1;
  };
};

Bowling.prototype.getScorecard = function () {
  return this._scorecard;
};

Bowling.prototype.getPlay = function(){
  return this._play;
}

Bowling.prototype.getFrame = function() {
  return this._frameCount
};

Bowling.prototype.isFinished = function () {
  return this._scorecard.length === 10
};

module.exports = Bowling;
