import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import './index.css';

function Song(source, title, description, id, img) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
  this.img = img;
}

const songs = [
  new Song('/lego_starwars.mp3', 'Lego StarWars', 'Star Wars Remake Lego Style', 0, './lego_starwars.ico'),
  new Song('/tetris.mp3', 'Tetris', 'Tetris Puzzle Original Soundtrack', 1, './tetris.jpeg'),
  new Song('/mortal_kombat.mp3', 'Mortal Kombat', 'Mortal Kombat Arcade Soundtrack', 2, './MK.ico'),
  new Song('/mario.mp3', 'Mario','Super Mario World Original Soundtrack', 3, './mario.ico'),
  new Song('/tmnt.mp3', 'TMNT', 'Teenage Mutant Ninja Turtles - Original Soundtrack - Arcade', 4, './tmnt.ico',),
  new Song('/DK.mp3', 'Donkey Kong', 'Donkey Kong Country Original Soundtrack.', 4, './DK.ico',)
]

ReactDOM.render((
  <Router history={browserHistory}>
    <Route songs={songs} path="/" component={App}>
      <IndexRoute component={SongsList} />
      <Route path="songs" component={SongsList} />
      <Route path="songs/:id" component={SongDetails} />
    </Route>
  </Router>
),document.getElementById('root'));
