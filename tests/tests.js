import CommandPalette from '../src/CommandPalette';

const palette = new CommandPalette();

palette.setCategory([
  {
    name: 'Toto',
    description: 'Log toto dans la console',
    action() {
      console.log(this.name);
    }
  }
]);

palette.setCategory([
  {
    name: 'Toto',
    description: 'Log toto dans la console',
    action() {
      console.log(this.name);
    }
  },
  {
    name: 'Tata',
    description: 'Log tata dans la console',
    action() {
      console.log(this.name);
    }
  }
], 'Projet');