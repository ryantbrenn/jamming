


import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

		searchResults: [
			{
                name: 'Girlfriend Is Better',
                artist: 'Talking Heads',
                album: 'Speaking in Tongues'
              },
              {
                name: 'Say What',
                artist: 'Joy Orbison',
                album: 'ep'
              },
              {
                name: 'Girlfriend Is Better',
                artist: 'Talking Heads',
                album: 'Speaking in Tongues'
              },
              {
                name: 'Girlfriend Is Better',
                artist: 'Talking Heads',
                album: 'Speaking in Tongues'
              }
            ],

       playlistName: 'Playlist1',

        playlistTracks: [
        	  {
        		name: '17 Days',
                artist: 'Prince',
                album: 'Random'
              },
             
              {name: '17 Days',
                artist: 'Prince',
                album: 'Random'
              },
              {name: '17 Days',
                artist: 'Prince',
                album: 'Random'
              }
        ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
 }

  addTrack(track) {
      const notInPlaylist = this.state.playlistTracks.every(playlistTrack =>
        playlistTrack.id !== track.id);
      if (notInPlaylist) {
        this.setState({
          playlistTracks: this.state.playlistTracks.concat([track]),
        });
      }
    }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
      this.setState({playlistName: name})
  }
  
  savePlaylist() {
    //generate an array of uri valuse called trackURIs
    let trackURIs = this.state.playlistTracks.map(track => track.uri);
   
  }

  search(term) {
    

  }

  render() {
    return (
      <div>
		  <h1>Ja<span className="highlight">mmm</span>ing</h1>
		  <div className="App">
		    <SearchBar onSearch={this.search} />
		    <div className="App-playlist">
		      <SearchResults 
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />

		      <Playlist 
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack} 
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
            />
		    </div>
		  </div>
		</div>
    );
  }
}

export default App;
