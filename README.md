# PaletteCommand-JS
PaletteCommand like ctrl+shift+p of SublimeText for modern browser

![Imgur](https://i.imgur.com/6ZJ4TwZ.png)

# Instalation

At the bottom of your html, before end of body.
```html
<script type="application/javascript" src="https://raw.githubusercontent.com/tpoisseau/command-palette.js/master/dist/command-palette.min.js"></script>
```

And for styling in head tab
```html
<link rel="stylesheet" type="text/css" href="https://github.com/tpoisseau/command-palette.js/blob/master/dist/command-palette.min.css">
```

--------------

You can also use with npm
```bash
npm install --save palette-command
```

```js
import PaletteCommand from 'palette-command';
```

# Basic Usage

```js
const palette = new PaletteCommand();

palette.setCategory([
  {
    name: 'Advanced interactivity',
    description: "It's just for testing",
    action() {
      console.log("Advanced interactivity, It's just for testing");
    }
  }
])

// press ctrl+alt+p and palette appear with one item (Advanced interactivity)
```

# Advanced Usage

You'll found generated JSDOC here :

[API](https://tpoisseau.github.io/palette-command.js/PaletteCommand.html)

# Todo
- [ ] Rich Jsdoc with tutorial