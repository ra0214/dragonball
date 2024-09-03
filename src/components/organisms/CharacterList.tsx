import React, { useEffect, useState } from 'react';
import CharacterCard from '../molecules/CharacterCard';

function CharacterList() {
  const [characters, setCharacters] = useState<{ id: number; name: string; image: string }[]>([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {characters.map(character => (
        <CharacterCard key={character.id} name={character.name} image={character.image} />
      ))}
    </div>
  );
}

export default CharacterList;
