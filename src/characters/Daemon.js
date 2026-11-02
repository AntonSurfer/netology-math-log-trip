import MagicUnit from './MagicUnit.js';

export default class Daemon extends MagicUnit {
  constructor(name, health = 100, attack = 100) {
    super(name, 'daemon', health, attack);
  }
}