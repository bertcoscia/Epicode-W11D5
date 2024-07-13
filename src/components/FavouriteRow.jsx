import { Col, Row } from "react-bootstrap";
import SingleSong from "./SingleSong";
import { useSelector } from "react-redux";

const FavouriteRow = () => {
  const favourites = useSelector(state => state.favourite.content);

  return (
    <>
      {favourites.length > 0 ? (
        <Row>
          <Col xs={12}>
            <div className="song-row">
              <h2>Your Library</h2>

              <div className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 d-flex flex-wrap row-gap-3">
                {favourites.map(song => (
                  <SingleSong key={song.id} song={song} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col xs={12}>
            <div className="song-row">
              <h2>Your Library</h2>
              <h4 className="mt-5">There are no songs in your library, please add some to your favourites</h4>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default FavouriteRow;
