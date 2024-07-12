import { Card, Col } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";

const SingleSong = ({ song }) => {
  return (
    <Col xs={5} className="text-center">
      <Card className="bg-transparent border-0">
        <Card.Img className="img-fluid mx-auto" src={song.album.cover_xl} />
        <Card.Body>
          <Card.Title className="text-white">{song.title}</Card.Title>
          <Card.Text>{song.artist.name}</Card.Text>
          {/* {isFav ? <HeartFill color="#3CD33C" /> : <Heart />} */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleSong;
