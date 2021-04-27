import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import fetchData from "../../lib/lib";
import ArtistsStats from "../../components/ArtistsStats";
import StatsWrapper from "../../components/StatsWrapper";

function Artists() {
  const [time, setTime] = useState("");
  const [information, setInformation] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (router.asPath == router.route) return;

    const { time } = router.query;
    setTime(time);

    async function getData() {
      setInformation(await fetchData("artists", time));
    }

    getData();
  }, [router]);

  return (
    <StatsWrapper type="artists" time={time}>
      <ArtistsStats information={information} />
    </StatsWrapper>
  );
}

export default Artists;
