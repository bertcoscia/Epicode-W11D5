import { Card } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteAction, PLAY_SONG, removeFromFavouriteAction } from "../redux/actions";

const SingleSong = ({ song }) => {
  const favourites = useSelector(state => state.favourite.content);
  const dispatch = useDispatch();
  const isFav = favourites.some(fav => fav.id === song.id);

  return (
    <div className="card-container me-3">
      <Card className="bg-dark">
        <Card.Img variant="" className="mx-auto" src={song.album.cover_xl} style={{ width: "300px !important", height: "300px !important", cursor: "pointer" }} onClick={() => dispatch({ type: PLAY_SONG, payload: song })} />
        <Card.Body>
          <Card.Title className="text-white line-clamp">{song.title}</Card.Title>
          <Card.Text className="text-secondary line-clamp">{song.artist.name}</Card.Text>
          {isFav ? <HeartFill color="#3CD33C" onClick={() => dispatch(removeFromFavouriteAction(song))} /> : <Heart color="#ffffff" onClick={() => dispatch(addToFavouriteAction(song))} />}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleSong;
