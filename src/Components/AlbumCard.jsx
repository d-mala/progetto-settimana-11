import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, toggleLike } from '../store/actions';
import { Col, Image } from 'react-bootstrap';

function AlbumCard({ song }) {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs);

  const handleClick = () => {
    dispatch(setCurrentSong(song));
  };

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch(toggleLike(song.id));
  };

  return (
    <Col className="text-center" onClick={handleClick}>
      <div className="position-relative album-card">
        <Image className="img-fluid cursor-pointer" src={song.album.cover_medium} alt="track" />
        <i 
          className={`bi ${likedSongs[song.id] ? 'bi-heart-fill' : 'bi-heart'} position-absolute heart-icon`}
          onClick={handleLike}
        ></i>
      </div>
      <p className="cursor-pointer">
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
    </Col>
  );
}

export default AlbumCard;