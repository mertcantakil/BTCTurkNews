import React from 'react';
import { Carousel } from 'antd';
import News from './News';
import '../styles.css';
import { Article } from '../../../interfaces/interface';

interface SliderProps {
  articles: Article[];
}

const Slider: React.FC<SliderProps> = ({ articles }) => {
  const onChange = (current: number) => {
    console.log(current);
  };

  const responsiveSettings = [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ];

  return (
    <Carousel
      dots
      afterChange={onChange}
      slidesToShow={3}
      slidesToScroll={3}
      autoplay
      autoplaySpeed={5000}
      responsive={responsiveSettings}
    >
      {
        articles.map((article: Article, index: number) => (
          <div key={index}>
            <News isBranded article={article} />
          </div>
        ))
      }
    </Carousel>
  );
}

export default Slider;
