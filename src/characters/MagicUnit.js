export default class MagicUnit {
    constructor(name, type, health, attack) {
      this.name = name;
      this.type = type;
      this.health = health;
      this._attack = attack;
      this._stoned = false;
      this._distance = 1; 
    }
  
    get attack() {
      
      const distanceFactor = Math.max(60, 100 - (this._distance - 1) * 10);
      let currentAttack = this._attack * (distanceFactor / 100);
  
      if (this._stoned) {
        currentAttack -= Math.log2(this._distance) * 5;
      }
  
      return Math.round(currentAttack);
    }
  
    set attack(value) {
      
      if (value >= 0) {
        this._attack = value;
      }
    }
  
    get stoned() {
      return this._stoned;
    }
  
    set stoned(value) {
      this._stoned = Boolean(value);
    }
  
    get distance() {
      return this._distance;
    }
  
    set distance(value) {
      this._distance = value;
    }
  }