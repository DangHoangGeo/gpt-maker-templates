'use client'
import React, { useState, useRef } from 'react';
import Button from '../form/Button';

const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative bg-black">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto"
        onClick={togglePlayPause}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
        <Button
		  buttonType='secondary'
          onClick={togglePlayPause}
        >{isPlaying ? 'Pause' : 'Play'}</Button>
        {/* Additional video controls (volume, fullscreen, etc.) would go here */}
      </div>
    </div>
  );
};

export default VideoPlayer;
