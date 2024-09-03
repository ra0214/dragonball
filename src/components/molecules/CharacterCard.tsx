import React from 'react';
import CharacterImage from '../atoms/CharacterImage';
import CharacterName from '../atoms/CharacterName';

function CharacterCard({ name, image }: { name: string; image: string }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <CharacterImage src={image} alt={name} />
      <CharacterName name={name} />
    </div>
  );
}

export default CharacterCard;
