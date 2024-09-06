import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import AlbumCard from './AlbumCard';

function Search() {
  const { results: searchResults, query: searchQuery, isLoading: isSearching } = useSelector((state) => state.search);

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
            <h2 className="text-white">Search Results for "{searchQuery}"</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 imgLinks py-3">
              {isSearching
                ? Array(12).fill().map((_, index) => <AlbumPlaceholder key={index} />)
                : searchResults.map(song => <AlbumCard key={song.id} song={song} />)
              }
            </Row>
            {!isSearching && searchResults.length === 0 && (
              <p className="text-white text-center">No results found for "{searchQuery}"</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;