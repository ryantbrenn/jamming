let accessToken = '';
const redirect_uri = 'http://localhost:3000/';
const client_id = '2f148864144f42d1b31b666bcdbbc410';

export let Spotify = {

	
getAccessToken() {
  if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = expiresInMatch[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else { 
    	window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
    }
  },


 search(term) {
    accessToken = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
    });
  }, 

  savePlaylist(playlistName, trackURIs) {
		if (playlistName || trackURIs) {
			return ;
		} 
		accessToken = Spotify.getAccessToken();
		let headers =  {
       		'Authorization': 'Bearer ' + accessToken
   		};
   		const user_id = '';

   		


  }


}














