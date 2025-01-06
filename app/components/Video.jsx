import React from 'react';

export default function Video({ videoCarousel }) {
    return (
    <video 
        style={{ width: '100%', height: '100%' }}
        // controls 
        autoPlay 
        muted 
        loop
        playsInline
    >
        <source src={videoCarousel} type="video/mp4" />
    </video>
    );
}