
import React, { useState } from 'react';
// import Footer from './Footer';
// import TicTacToe from './TicTacToe';

// Helper function to import all gifs from a folder
const importAll = (r) => r.keys().map(r);

// === Arms ===
const bicepsGifs = importAll(require.context('../assets/folders/arms/biseps', false, /\.gif$/));
const forearmGifs = importAll(require.context('../assets/folders/arms/fore_arms', false, /\.gif$/));
const tricepsGifs = importAll(require.context('../assets/folders/arms/triseps', false, /\.gif$/));

// === Back ===
const lowerBackGifs = importAll(require.context('../assets/folders/back/lower_back', false, /\.gif$/));
const upperBackGifs = importAll(require.context('../assets/folders/back/upper_back', false, /\.gif$/));
const middleBackGifs = importAll(require.context('../assets/folders/back/middle_back', false, /\.gif$/));

// === Belly ===
// const lowerBellyGifs = importAll(require.context('../assets/folders/belly/lower_belly', false, /\.gif$/));
const topBellyGifs = importAll(require.context('../assets/folders/belly/top_belly', false, /\.gif$/));
const sideBellyGifs = importAll(require.context('../assets/folders/belly/side_belly', false, /\.gif$/));

// === Glutes ===
const glutesGifs = importAll(require.context('../assets/folders/buttocus_glutes', false, /\.gif$/));

// === Chest ===
const upperChestGifs = importAll(require.context('../assets/folders/chest/upper_chest', false, /\.gif$/));
const lowerChestGifs = importAll(require.context('../assets/folders/chest/lower_chest', false, /\.gif$/));

// === Legs ===
const backUpperLegsGifs = importAll(require.context('../assets/folders/legs/back_upper_legs', false, /\.gif$/));
const calvesGifs = importAll(require.context('../assets/folders/legs/calves', false, /\.gif$/));
const frontUpperLegsGifs = importAll(require.context('../assets/folders/legs/front_upper_legs', false, /\.gif$/));

// === Shoulders ===
const backShouldersGifs = importAll(require.context('../assets/folders/sholders/back&sholders', false, /\.gif$/));
const frontShouldersGifs = importAll(require.context('../assets/folders/sholders/front sholders', false, /\.gif$/));
const sideShouldersGifs = importAll(require.context('../assets/folders/sholders/side_solders', false, /\.gif$/));
const zShouldersGifs = importAll(require.context('../assets/folders/sholders/z', false, /\.gif$/));

// Helper for creating visible states dynamically
const createVisibleState = (gifs, showAll) => (showAll ? gifs : gifs.slice(0, 5));

// Generic Section Component
const GifSection = ({ title, gifs, showAll, setShowAll }) => (
  <>
    <h3 style={{ margin: '40px 0 20px' }}>{title}</h3>
    <div style={gridStyle}>
      {createVisibleState(gifs, showAll).map((src, idx) => (
        <img key={idx} src={src} alt={`${title.toLowerCase()}-${idx}`} style={imgStyle} />
      ))}
    </div>
    <div style={btnContainerStyle}>
      <button onClick={() => setShowAll(!showAll)} style={buttonStyle}>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  </>
);

const Explore = () => {
  const [states, setStates] = useState({
    biceps: false, forearms: false, triceps: false,
    lowerBack: false, upperBack: false, middleBack: false,
    lowerBelly: false, topBelly: false, sideBelly: false,
    glutes: false, upperChest: false, lowerChest: false,
    backUpperLegs: false, calves: false, frontUpperLegs: false,
    backShoulders: false, frontShoulders: false, sideShoulders: false, zShoulders: false
  });

  const toggleState = (key) => setStates((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="explore-page" style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <section>
        <h2>Exercise GIFs</h2>

        <GifSection title="Arms - Biceps" gifs={bicepsGifs} showAll={states.biceps} setShowAll={() => toggleState('biceps')} />
        <GifSection title="Arms - Forearms" gifs={forearmGifs} showAll={states.forearms} setShowAll={() => toggleState('forearms')} />
        <GifSection title="Arms - Triceps" gifs={tricepsGifs} showAll={states.triceps} setShowAll={() => toggleState('triceps')} />

        <GifSection title="Back - Lower Back" gifs={lowerBackGifs} showAll={states.lowerBack} setShowAll={() => toggleState('lowerBack')} />
        <GifSection title="Back - Upper Back" gifs={upperBackGifs} showAll={states.upperBack} setShowAll={() => toggleState('upperBack')} />
        <GifSection title="Back - Middle Back" gifs={middleBackGifs} showAll={states.middleBack} setShowAll={() => toggleState('middleBack')} />

        {/* <GifSection title="Belly - Lower Belly" gifs={lowerBellyGifs} showAll={states.lowerBelly} setShowAll={() => toggleState('lowerBelly')} /> */}
        <GifSection title="Belly - Top Belly" gifs={topBellyGifs} showAll={states.topBelly} setShowAll={() => toggleState('topBelly')} />
        <GifSection title="Belly - Side Belly" gifs={sideBellyGifs} showAll={states.sideBelly} setShowAll={() => toggleState('sideBelly')} />

        <GifSection title="Glutes" gifs={glutesGifs} showAll={states.glutes} setShowAll={() => toggleState('glutes')} />

        <GifSection title="Chest - Upper Chest" gifs={upperChestGifs} showAll={states.upperChest} setShowAll={() => toggleState('upperChest')} />
        <GifSection title="Chest - Lower Chest" gifs={lowerChestGifs} showAll={states.lowerChest} setShowAll={() => toggleState('lowerChest')} />

        <GifSection title="Legs - Back Upper Legs" gifs={backUpperLegsGifs} showAll={states.backUpperLegs} setShowAll={() => toggleState('backUpperLegs')} />
        <GifSection title="Legs - Calves" gifs={calvesGifs} showAll={states.calves} setShowAll={() => toggleState('calves')} />
        <GifSection title="Legs - Front Upper Legs" gifs={frontUpperLegsGifs} showAll={states.frontUpperLegs} setShowAll={() => toggleState('frontUpperLegs')} />

        <GifSection title="Shoulders - Back & Shoulders" gifs={backShouldersGifs} showAll={states.backShoulders} setShowAll={() => toggleState('backShoulders')} />
        <GifSection title="Shoulders - Front Shoulders" gifs={frontShouldersGifs} showAll={states.frontShoulders} setShowAll={() => toggleState('frontShoulders')} />
        <GifSection title="Shoulders - Side Shoulders" gifs={sideShouldersGifs} showAll={states.sideShoulders} setShowAll={() => toggleState('sideShoulders')} />
        <GifSection title="Shoulders - Z" gifs={zShouldersGifs} showAll={states.zShoulders} setShowAll={() => toggleState('zShoulders')} />
      </section>


      {/* <Footer /> */}
    </div>
  );
};

// Styles
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
};

const imgStyle = {
  width: '100%',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const btnContainerStyle = {
  marginTop: '20px',
  textAlign: 'center',
};

const buttonStyle = {
  display: 'inline-block',
  padding: '6px 14px',
  backgroundColor: '#d90368',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  transition: 'background 0.3s, transform 0.2s',
  border: 'none',
  textAlign: 'center',
  fontSize: '14px',
  cursor: 'pointer',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
};

export default Explore;
