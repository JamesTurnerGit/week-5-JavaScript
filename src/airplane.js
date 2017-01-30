'use strict';

function Airplane(){
  this.flying = true;
}

Airplane.prototype.isFlying = function(){
  return this.flying;
};

Airplane.prototype.land = function(){
  if (this.flying === false) {
    throw "already landed";
  };
  this.flying = false;
};

Airplane.prototype.takeOff = function(){
  this.flying = true;
};
