// src/components/GifSection.js
import React, { useState } from 'react';

const GifSection = ({ title, path, count }) => {
  const [showAll, setShowAll] = useState(false);
  const gifs = Array.from({ length: count }, (_, i) => require(`${path}/${i + 1}.gif`));
  const visibleGifs = showAll ? gifs : gifs.slice(0, 5);

  return (
    <section style={{ marginBottom: '40px' }}>
      <h3 style={{ marginBottom: '16px' }}>{title}</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {visibleGifs.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${title}-${idx + 1}`}
            style={{
              width: '100%',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#d90368',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            transition: 'background 0.3s, transform 0.2s',
            textAlign: 'center',
            fontSize: '14px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default GifSection; // Make sure this is the default export
