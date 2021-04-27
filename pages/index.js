import Head from "next/head";
import Router from "next/router";

import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "../settings/settings";

export default function Home() {
  const onSuccess = (response) => {
    console.log(response);
    window.localStorage.setItem("token", JSON.stringify(response.access_token));
    Router.push("/artists/short");
  };

  const onFailure = (response) => console.error(response);

  return (
    <div className="home_container">
      <div>
        <div className="flex-row logo_container">
          <h2>Spotify</h2>
          <h2 className="insight">Insight</h2>
        </div>
        <div className="info_container">
          <h2>Your Spotify Stats</h2>
          <p>
            Get statistics about your top artists, songs, and genres from
            Spotify. Updated daily. Easy to share.
          </p>
        </div>
      </div>

      <SpotifyLogin
        clientId={clientId}
        redirectUri={redirectUri}
        onSuccess={onSuccess}
        onFailure={onFailure}
        scope={["user-top-read"]}
      />
    </div>
  );
}
