import React, { Component } from 'react';
import {Link} from 'react-router';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';

class App extends Component {
  constructor () {
    super() ;
    this.toggleplaySong = this.toggleplaySong.bind(this);
    this.selectSong = this.selectSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.player = {};
    
    this.state = {
      index: 0,
      playing: false
    }
  }

  componentDidMount() {
    this.player = document.getElementById("player");
  }

  selectSong(id) {
    this.setState({
      index: id
    })
  }

   toggleplaySong() {
    const audio = this.player
    if(this.state.playing === false) {
    audio.play();   
      } else{
        audio.pause();
      }
      this.setState({
      playing : !this.state.playing
      })
   }

  
  prevSong() {
    if(this.state.index !=0){
      this.setState({
        index: this.state.index -1,
      })
    
    }
  } 
  
  pauseSong () {
    const audio = this.player;
    audio.pause()
  }
  nextSong(index) {
    if(this.state.index < this.props.route.songs.length - 1){
      this.setState({
        index: this.state.index+1, 
      })
    }
   } 

  componentDidUpdate() {
   if( this.state.playing == true){
     this.player.play();
   } else{
     this.player.pause();
   }
  }

  render() {
    const songs = this.props.route.songs
    console.log(songs);
    

    return (
      <div className="App">
    
        <div className="container-fluid text-center">
        
          <h1>RETRO GAME SONGS</h1>
        <audio id="player" src={songs[this.state.index].source} className="audioPlayer"></audio>
      {/*}  <div className="row">
            <button type="button" onClick={this.prevSong} className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn btn-default btn-lg" onClick={this.toggleplaySong}>
            <span className={this.state.playing === true ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"} aria-hidden="true"></span>
            </button>
            <button type="button" onClick={this.nextSong} className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
            </button>
          </div> */}
          
          </div>

       <div id="GBbody">
            <div id="side">
                <hr/><hr/><hr/><hr/>
            </div>
            <div id="com">▲ COMM.</div>
            <div id="volume"></div>
            <div id="screenWrapper">
                <div id="screenReflection"></div>
                <div id="screen"><p>Now playing: <br/> {songs[this.state.index].title}</p>
                <img id="coverImage" src={songs[this.state.index].img} alt=""/></div>
                <div id="logo">
                    <span className="logoName"><i>GAMEBOY</i></span>
                    <span className="logoModel">
                        <b>
                            <span id="c">C</span><span id="o1">O</span><span id="l">L</span><span id="o2">O</span><span id="r">R</span>
                        </b>
                    </span>
                </div>
                <div id="powerLight"></div>
                <div id="powerSymbols">)))</div>
                <div id="powerWord">POWER</div>
            </div>
            
            <div id="nintendo">
                <span>Nintendo</span>
            </div>
            
            <ul id="arrows">
                <li id="center">●</li>
                <li id="up" type="button" onClick={this.toggleplaySong}>▲</li>
                <li id="right" type="button" onClick={this.nextSong}>►</li>
                <li id="down" type="button" onClick={this.pauseSong}>▼</li>
                <li id="left" type="button" onClick={this.prevSong}>
            ◀</li>
            </ul>
            
            <ul id="ABbtns">
                <li type="button" onClick={this.toggleplaySong}>
            <span className={this.state.playing === true ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"} aria-hidden="true"></span>
            </li>
                <li>B</li>
            </ul>
            
            <div id="SSbtns">
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            
            <div id="holes">
                ・・・・<br/>
                ・・・・・・<br/>
                ・・・・・<br/>
                ・・・・・・<br/>
                ・・・・・<br/>
                ・・・・・・<br/>
                ・・・・<br/>
            </div>
            
            <div id="GBbodyBottomWrapper">
                <div id="GBbodyBottomLeft"></div>
                <div id="GBbodyBottomRight"></div>
            <div>
        </div>
        <br/>
        <br/>
        <br/>
           {React.cloneElement(this.props.children, 
           {songs: songs,  
             playSong: this.toggleplaySong,
            selectSong: this.selectSong})};
      </div>
      </div>
</div>
    );
  }
}

export default App;
