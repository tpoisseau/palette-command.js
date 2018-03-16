const palette = new PaletteCommand();

palette.setCategory([
  {
    name: 'Toto',
    description: 'Log toto dans la console',
    action() {
      console.log(this.name);
    }
  },
  {
    name: 'Boo',
    description: 'Log boo dans la console',
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
  },
  {
    name: 'Titi',
    description: 'Log titi dans la console',
    action() {
      console.log(this.name);
    }
  },
  {
    name: 'Tutu',
    description: 'Log tutu dans la console',
    action() {
      console.log(this.name);
    }
  },
  {
    name: 'Tyty',
    description: 'Log tyty dans la console',
    action() {
      console.log(this.name);
    }
  },
], 'Projet');