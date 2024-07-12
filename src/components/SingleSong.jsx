import { Col } from "react-bootstrap";

const SingleSong = ({ song }) => {
  return (
    <Col md={3} className="text-center">
      <img src={song.album.cover_medium} alt={song.title_short} className="img-fluid" />
      <p>
        {song.title}
        <br />
        <p>{song.artist.name}</p>
      </p>
    </Col>
  );
};

export default SingleSong;
