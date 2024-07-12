import { Card, Col } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteAction, PLAY_SONG, removeFromFavouriteAction } from "../redux/actions";

const SingleSong = ({ song }) => {
  const favourites = useSelector(state => state.favourite.content);
  const dispatch = useDispatch();
  const isFav = favourites.some(fav => fav.id === song.id);

  return (
    <Col xs={5} className="text-center">
      <Card className="bg-transparent border-0" style={{ cursor: "pointer" }} onClick={() => dispatch({ type: PLAY_SONG, payload: song })}>
        <Card.Img className="img-fluid mx-auto" src={song.album.cover_xl} />
        <Card.Body>
          <Card.Title className="text-white">{song.title}</Card.Title>
          <Card.Text>{song.artist.name}</Card.Text>
          {isFav ? <HeartFill color="#3CD33C" onClick={() => dispatch(removeFromFavouriteAction(song))} /> : <Heart color="#ffffff" onClick={() => dispatch(addToFavouriteAction(song))} />}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleSong;
