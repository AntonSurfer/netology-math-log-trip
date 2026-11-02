import { Magician, Daemon } from '../index.js';

describe('Magician', () => {
  let magician;

  beforeEach(() => {
    magician = new Magician('Gandalf', 100, 100);
  });

  test('should have correct base properties', () => {
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('magician');
    expect(magician.health).toBe(100);
    expect(magician.attack).toBe(100);
    expect(magician.stoned).toBe(false);
    expect(magician.distance).toBe(1);
  });

  test('should set and get attack, stoned, distance correctly', () => {
    magician.attack = 150;
    expect(magician.attack).toBe(150);
    
    magician.stoned = true;
    expect(magician.stoned).toBe(true);
    
    magician.distance = 3;
    expect(magician.distance).toBe(3);
  });

  test('should calculate attack based on distance (no stoned)', () => {
    magician.attack = 100;
    magician.stoned = false;
    
    magician.distance = 1;
    expect(magician.attack).toBe(100);
    
    magician.distance = 2;
    expect(magician.attack).toBe(90);
    
    magician.distance = 3;
    expect(magician.attack).toBe(80);
    
    magician.distance = 4;
    expect(magician.attack).toBe(70);
    
    magician.distance = 5;
    expect(magician.attack).toBe(60);
    
    magician.distance = 10;
    expect(magician.attack).toBe(60);
  });

  test('should calculate attack with stoned debuff (example from task)', () => {
    magician.attack = 100;
    magician.stoned = true;
    
    magician.distance = 2;
    expect(magician.attack).toBe(85); 
    
    magician.distance = 4;
    expect(magician.attack).toBe(60); 
  });

  test('should calculate attack with stoned and distance > 5', () => {
    magician.attack = 100;
    magician.stoned = true;
    magician.distance = 10;
    
    expect(magician.attack).toBe(43);
  });
});

describe('Daemon', () => {
  let daemon;

  beforeEach(() => {
    daemon = new Daemon('Balrog', 120, 110);
  });

  test('should have correct base properties', () => {
    expect(daemon.name).toBe('Balrog');
    expect(daemon.type).toBe('daemon');
    expect(daemon.health).toBe(120);
    expect(daemon.attack).toBe(110);
  });

  test('should calculate attack correctly with stoned', () => {
    daemon.distance = 2;
    expect(daemon.attack).toBe(99); 
    
    daemon.stoned = true;
    expect(daemon.attack).toBe(94); 
  });
});