import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { toggleLike } from '../store/actions';
import shuffleIcon from '../assets/playerbuttons/shuffle.png';
import prevIcon from '../assets/playerbuttons/prev.png';
import playIcon from '../assets/playerbuttons/play.png';
import nextIcon from '../assets/playerbuttons/next.png';
import repeatIcon from '../assets/playerbuttons/repeat.png';

function Player() {
  const currentSong = useSelector((state) => state.currentSong);
  const likedSongs = useSelector((state) => state.likedSongs);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.preview;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

  const handleLike = () => {
    if (currentSong) {
      dispatch(toggleLike(currentSong.id));
    }
  };

  const togglePlay = () => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container fluid className="player-container text-white">
      <Row className="h-100 align-items-center">
        {currentSong ? (
          <>
            <Col xs={3} className="d-flex align-items-center">
              <Image src={currentSong.album.cover_small} alt="Album cover" className="me-3" />
              <div>
                <h6 className="mb-0">{currentSong.title}</h6>
                <small>{currentSong.artist.name}</small>
              </div>
              <i 
                className={`bi ${likedSongs[currentSong.id] ? 'bi-heart-fill text-danger' : 'bi-heart'} fs-4 ms-3`}
                onClick={handleLike}
                style={{ cursor: 'pointer' }}
              ></i>
            </Col>
            <Col xs={6} className="d-flex flex-column align-items-center">
              <div className="playerControls d-flex justify-content-center align-items-center w-100 mb-2">
                <img src={shuffleIcon} alt="shuffle" className="player-icon mx-2" />
                <img src={prevIcon} alt="prev" className="player-icon mx-2" />
                <div 
                  onClick={togglePlay}
                  className="play-pause-button d-flex justify-content-center align-items-center mx-2"
                >
                  {isPlaying ? (
                    <i className="bi bi-pause-fill fs-4"></i>
                  ) : (
                    <img src={playIcon} alt="play" className="player-icon" />
                  )}
                </div>
                <img src={nextIcon} alt="next" className="player-icon mx-2" />
                <img src={repeatIcon} alt="repeat" className="player-icon mx-2" />
              </div>
              <div className="progress w-100" style={{height: '4px'}}>
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{width: '0%'}}
                  aria-valuenow="0" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
            <Col xs={3} className="d-flex justify-content-end align-items-center">
              {/* Qui puoi aggiungere altri controlli come volume, ecc. */}
            </Col>
          </>
        ) : (
          <Col xs={12} className="text-center">
            <p>Seleziona una canzone per iniziare l'ascolto</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Player;