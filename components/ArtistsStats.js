function ArtistsStats({ information }) {
  return (
    <>
      {information.map((item, index) => (
        <div key={item.id} className="artist-wrapper flex-row">
          <p>{index + 1}.</p>
          <img src={item.images[0].url} />
          <div className="artist-info">
            <a href={item.external_urls.spotify} target="_blank">
              {item.name}
            </a>
            <div>
              <p>Genres:</p>
              <div className="genre-wrapper">
                {item.genres.map((genre) => (
                  <div key={genre}>
                    <span>{genre}</span>
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

export default ArtistsStats;
