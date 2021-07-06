import React from 'react';
import SlideShow from '../slide-show/SlideShow';

import './MainContent.scss';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/6134742/pexels-photo-6134742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      url: 'https://images.pexels.com/photos/8497533/pexels-photo-8497533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      url: 'https://images.pexels.com/photos/2577848/pexels-photo-2577848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ];
  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movie-type">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
