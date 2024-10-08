import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import AlbumCard from './AlbumCard';

function Library() {
  const likedSongs = useSelector((state) => state.likedSongs);
  const initialSongs = useSelector((state) => Object.values(state.songs).flat());
  const searchResults = useSelector((state) => Object.values(state.search.allResults).flat());

  const allSongs = [...initialSongs, ...searchResults];

  const favoriteSongs = allSongs.filter(song => likedSongs[song.id]);

  return (
    <div className="mainContent">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <h2 className="text-white mb-4">Your Library</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 imgLinks py-3">
              {favoriteSongs.map(song => (
                <AlbumCard key={song.id} song={song} />
              ))}
            </Row>
            {favoriteSongs.length === 0 && (
              <p className="text-white text-center">No liked songs yet. Start liking some songs!</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Library;