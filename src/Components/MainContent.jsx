import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import AlbumCard from './AlbumCard';
import { setSongs } from '../store/actions';

function MainContent() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const searchResults = useSelector((state) => state.searchResults);
  const searchQuery = useSelector((state) => state.searchQuery);
  const [isLoading, setIsLoading] = useState(true);

  const searchQueries = [
    { id: 'searchResults1', query: 'queen', title: 'Rock Classics' },
    { id: 'searchResults2', query: 'katyperry', title: 'Pop Culture' },
    { id: 'searchResults3', query: 'eminem', title: '#HipHop' }
  ];

  const fetchSongs = async (searchId, query) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSongs(searchId, data.slice(0, 4)));
      } else {
        throw new Error('Error in fetching songs');
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    const fetchAllSongs = async () => {
      for (const { id, query } of searchQueries) {
        await fetchSongs(id, query);
      }
      setIsLoading(false);
    };
    fetchAllSongs();
  }, []);

  const AlbumPlaceholder = () => (
    <Col className="text-center">
      <div className="position-relative album-card placeholder-glow">
        <div className="placeholder bg-secondary" style={{ width: '100%', paddingBottom: '100%' }}></div>
      </div>
      <p className="placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
      </p>
    </Col>
  );

  return (
    <div className="mainContent">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Row className="mb-3">
              <Col xs={12} className="mainLinks d-none d-md-flex justify-content-center">
                <a href="/">TRENDING</a>
                <a href="/">PODCAST</a>
                <a href="/">MOODS AND GENRES</a>
                <a href="/">NEW RELEASES</a>
                <a href="/">DISCOVER</a>
              </Col>
            </Row>
            {searchQuery ? (
              <Row>
                <Col xs={12}>
                  <h2 className="text-white">Search Results for "{searchQuery}"</h2>
                  <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 imgLinks py-3">
                    {searchResults.map(song => <AlbumCard key={song.id} song={song} />)}
                  </Row>
                </Col>
              </Row>
            ) : (
              searchQueries.map(({ id, title }) => (
                <Row key={id}>
                  <Col xs={12}>
                    <div id={id}>
                      <h2 className="text-white">{title}</h2>
                      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 imgLinks py-3">
                        {isLoading
                          ? Array(4).fill().map((_, index) => <AlbumPlaceholder key={index} />)
                          : songs[id] && songs[id].map(song => <AlbumCard key={song.id} song={song} />)
                        }
                      </Row>
                    </div>
                  </Col>
                </Row>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainContent;
