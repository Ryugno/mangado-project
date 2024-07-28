import React from 'react';
import './ContentSection.css';

const ContentSection = ({ title, children }) => {
  return (
    <section className="content-section">
      <h2>{title}</h2>
      <div className="content-items">
        {children}
      </div>
    </section>
  );
}

export default ContentSection;