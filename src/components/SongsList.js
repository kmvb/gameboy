import React, {Component} from 'react';
import {Link} from 'react-router';

class SongsList extends Component {      
    render() {
       const songs = this.props.songs
       console.log(songs);
       const newSongsArray = songs.map((element, index) => {
        return <div key={index}><p id={index} key={index} src={element.source}><Link to={`/songs/${element.id}`}>{element.title}</Link>&nbsp;&nbsp;&nbsp;<button onClick={() => {this.props.selectSong(element.id)}} type="button" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button></p>
        </div>
        
        console.log(newSongsArray)
       })

        return (
            <div className="flexContainer">
            <h1>Click for Disk Information</h1>     
            {newSongsArray}
            </div>
        )
    }
}

export default SongsList;