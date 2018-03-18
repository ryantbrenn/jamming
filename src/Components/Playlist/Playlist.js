import React from 'react';

import './Playlist.css';

class Playlist extends React.component {
	render() {
		return (	
			<div className="Playlist">
			  <input defaulValue={'New Playlist'}/>
			  // <TrackList />
			  <a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

export default Playlist;