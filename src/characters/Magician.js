import MagicUnit from './MagicUnit.js';

export default class Magician extends MagicUnit {
  constructor(name, health = 100, attack = 100) {
    super(name, 'magician', health, attack);
  }
}