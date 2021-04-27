import Head from "next/head";
import Link from "next/link";

function StatsWrapper({ time, type, children }) {
  return (
    <div>
      <Head>
        <title>
          Spotify Insight | {type.charAt(0).toUpperCase() + type.slice(1)}
        </title>
      </Head>
      <div className="outer-wrapper">
        <div className="top-wrapper flex-row">
          <div className="flex-row logo_container">
            <h2>Spotify</h2>
            <h2 className="insight">Insight</h2>
          </div>
        </div>

        <div className={`type-wrapper flex-row ${type}`}>
          <Link href={`/artists/${time}`}>
            <button>Your Top Artists</button>
          </Link>
          <Link href={`/tracks/${time}`}>
            <button>Your Top Tracks</button>
          </Link>
        </div>

        <div className={`info-wrapper ${time}`}>
          <div className="time-wrapper flex-row">
            <Link href={`/${type}/short`}>
              <button>Last Month</button>
            </Link>
            <Link href={`/${type}/medium`}>
              <button>Last 6 Months</button>
            </Link>
            <Link href={`/${type}/long`}>
              <button>All time</button>
            </Link>
          </div>
        </div>
        <div className="stats-wrapper">{children}</div>
      </div>
    </div>
  );
}

export default StatsWrapper;
