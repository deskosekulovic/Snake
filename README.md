## App Info

Snake game

## Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:8080
npm start

# Build for production
npm run build
```

## Built With

- Canvas
- [React](https://reactjs.org/) - a JavaScript library for building user interfaces
- [React-router](https://reacttraining.com/react-router/) - declarative routing for React
- [Styled-components](https://www.styled-components.com/) - styled-components is the result of wondering how we could enhance CSS for styling React component systems
- [Webpack](https://webpack.js.org/) - a static module bundler for modern JavaScript applications

## About game

Game starts by pressing "Enter" on keyboard.

By default, game is set to be played on medium grid size and speed with no walls.
On settings page is full list of game settings. You can choose between 3 grid sizes, big (40 units), medium (30 units) and small (20 units).

At the beginning, snake is 1 unit size. Food is 1 unit size, green color. Sometimes, bonus food appears, also 1 unit size, but different color (blue) to indicate
that it is "special". "Ordinary" food worths 1 point, special 2. Snake always grows 1 unit when eats!

In no walls mode, snake appears on oposite side when it reaches the end of the grid.

Snake is controled with arrow keys by default, but you can change it in settings. You cannot asign same key for more inputs.

Snake's speed can be changed with speed slider. Smaller number - faster snake!

At the end of the game, you can see replay of last game by pressing "r" on keyboard. You can change this as well.

All settings are saved automatically on local storage, so you can have your favorite settings everytime you play the game.
Also, list of top 10 results is saved on local storage. There is a different list for different settings(eg. list for big grid on speed 50...).
Toplist page shows only list with current settings. To see other lists, change settings...

### Author

Desko Sekulovic

### Version

1.0.0

### License

This project is licensed under the MIT License
