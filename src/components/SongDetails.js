import React, {Component} from 'react';
import {Link} from 'react-router';

class SongDetails extends Component {
    render() {
        const songs = this.props.songs
        console.log(songs)
        console.log(this.props.routeParams)
        return (
            <div>
            <Link to={`/songs/${songs[this.props.routeParams.id].id}`} />

             <p>Song Title: {songs[this.props.routeParams.id].title}</p>

             <p>Description: {songs[this.props.routeParams.id].description}</p>

             <Link to="/"><button>Back</button></Link>
            </div>
        )
    }
}

export default SongDetails;