import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContentSection from './ContentSection';

const RecommendedMangaSection = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const fetchMangas = async () => {
      const response = await axios.get('/api/manga/recommended');
      setMangas(response.data);
    };

    fetchMangas();
  }, []);

  return (
    <ContentSection title="ジャンル別おすすめ">
      {mangas.map(manga => (
        <div key={manga._id} className="manga-item">
          <img src={manga.image} alt={manga.title} />
          <h3>{manga.title}</h3>
        </div>
      ))}
    </ContentSection>
  );
}

export default RecommendedMangaSection;