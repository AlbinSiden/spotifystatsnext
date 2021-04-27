import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import fetchData from "../../lib/lib";
import TracksStats from "../../components/TrackStats";
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
      setInformation(await fetchData("tracks", time));
    }

    getData();
  }, [router]);

  return (
    <StatsWrapper type="tracks" time={time}>
      <TracksStats information={information} />
    </StatsWrapper>
  );
}

export default Artists;
