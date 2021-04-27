async function fetchData(type, time) {
  let token = JSON.parse(window.localStorage.getItem("token"));
  let res = await fetch(
    `https://api.spotify.com/v1/me/top/${type}?time_range=${time}_term&limit=50`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  let info = await res.json();
  return info.items;
}

export default fetchData;
