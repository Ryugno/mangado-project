import React from 'react';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import NewMangaSection from './components/NewMangaSection';
import PopularMangaSection from './components/PopularMangaSection';
import RecommendedMangaSection from './components/RecommendedMangaSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainVisual />
      <NewMangaSection />
      <PopularMangaSection />
      <RecommendedMangaSection />
    </div>
  );
}

export default App;
