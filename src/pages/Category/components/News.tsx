import React from 'react';
import '../styles.css';
import AddMyReadingList from '../../../shared/AddMyReadingList';
import { useNavigate } from 'react-router-dom';

import Date from '../../../shared/Date';
import { Row } from 'antd';
import { Article } from '../../../interfaces/interface';

interface NewsProps {
  isBranded: boolean,
  article: Article,
};

const News: React.FC<NewsProps> = ({ isBranded, article }) => {
  const { urlToImage, title, description, publishedAt } = article;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detail', { state: { article } });
  };

  return (
    <div className='news-wrapper'>
      <img alt='sliderImage' src={urlToImage} onClick={handleClick} />
      <h3 className='news-title' onClick={handleClick}>{title}</h3>
      {isBranded && <p className='news-content'>{description}</p>}
      <Row className='news-footer'>
        <AddMyReadingList
          isBranded={isBranded}
          uniqueKey={title}
        />
        <Date date={publishedAt} />
      </Row>
    </div>
  );
}

export default News;
