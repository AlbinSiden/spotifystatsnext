function TrackStats({ information }) {
  return (
    <>
      {information.map((item, index) => (
        <div key={item.id} className="artist-wrapper flex-row">
          <p>{index + 1}.</p>
          <img src={item.album.images[0].url} />
          <div className="artist-info">
            <a href={item.external_urls.spotify} target="_blank">
              {item.name}
            </a>
            <div>
              <p>Artists:</p>
              <div className="genre-wrapper">
                {item.artists.map((artist) => (
                  <div key={artist.name}>
                    <span>{artist.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TrackStats;
