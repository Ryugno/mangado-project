import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContentSection from './ContentSection';

const NewMangaSection = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const fetchMangas = async () => {
      const response = await axios.get('/api/manga/new');
      setMangas(response.data);
    };

    fetchMangas();
  }, []);

  return (
    <ContentSection title="新着漫画">
      {mangas.map(manga => (
        <div key={manga._id} className="manga-item">
          <img src={manga.image} alt={manga.title} />
          <h3>{manga.title}</h3>
        </div>
      ))}
    </ContentSection>
  );
}

export default NewMangaSection;
