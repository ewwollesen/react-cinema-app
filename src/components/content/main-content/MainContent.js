import React, { useState } from 'react';

import './MainContent.scss';
import SlideShow from '../slide-show/SlideShow';
import Paginate from '../paginate/Paginate';

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
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <SlideShow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movie-type">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
