import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";

const PlayerSong = () => {
  const song = useSelector(state => state.playing.song);

  return (
    <>
      {song ? (
        <Col xs={3} md={4}>
          <div className="d-flex footer-flex-div align-items-center justify-content-start text-white">
            <img src={song.album.cover_medium} alt={song.title} style={{ width: "60px" }} className="me-2 rounded-1 player-cover" />
            <div className="d-flex flex-column me-5 player-info">
              <div className="player-title line-clamp">{song.title}</div>
              <small className="player-artist line-clamp">{song.artist.name}</small>
            </div>
          </div>
        </Col>
      ) : (
        <Col xs={3} md={4}>
          <div className="d-flex footer-flex-div align-items-center justify-content-start text-white">
            <img src="https://api.deezer.com/album/115888392/image" alt="Never Gonna Give You Up - Rick Astley" style={{ width: "60px" }} className="me-2 rounded-1 player-cover" />
            <div className="d-flex flex-column me-5 player-info">
              <div className="player-title line-clamp">Never Gonna Give You Up</div>
              <small className="player-artist line-clamp">Rick Astley</small>
            </div>
          </div>
        </Col>
      )}
    </>
  );
};

export default PlayerSong;
