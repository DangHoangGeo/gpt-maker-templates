'use client'
import React, { useState, useRef } from 'react';
import Button from '../form/Button';

const AudioPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={src} preload="none" />
      <Button
	    buttonType='secondary'
        onClick={togglePlayPause}
        additionalStyles="mx-2"
      >{isPlaying ? 'Pause' : 'Play'}</Button>
      {/* Other controls like volume could be added here */}
    </div>
  );
};

export default AudioPlayer;
