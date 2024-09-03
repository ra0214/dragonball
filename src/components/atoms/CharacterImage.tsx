import React from 'react';

function CharacterImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} style={{ width: '100px', height: '100px' }} />;
}

export default CharacterImage;
