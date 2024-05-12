import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopHeadlines } from '../../redux/actions';
import { useLocation } from 'react-router-dom';

import News from './components/News';
import BackButton from '../../shared/BackButton';
import Slider from './components/Slider';
import { Col, Row } from 'antd';
import { Article } from '../../interfaces/interface';
import { capitalizeFirstLetter } from '../../utils';
import './styles.css';

const CategoryPage: React.FC = () => {
  const dispatch = useDispatch();
  const topHeadlines = useSelector((state: any) => state.news.topHeadlines);
  const selectedTags = useSelector((state: any) => state.news.selectedTags);
  const { articles = [] } = topHeadlines;
  const location = useLocation();
  const sourceId = location.state?.sourceId;

  useEffect(() => {
    if (sourceId) {
      dispatch(fetchTopHeadlines(sourceId));
    }
  }, [dispatch, sourceId]);

  return (
    <div className='category-wrapper'>
      <Slider articles={articles} />
      <Row className='title-btn-wrapper'>
        <h3 className='category-title'>
          {selectedTags.map((tag: string, index: number) => `${capitalizeFirstLetter(tag)}${selectedTags.length - 1 === index ? '' : ' + '}`)}
        </h3>
        <span className='category-back-btn'>
          <BackButton text="Go to News" navigateUrl="/" />
        </span>
      </Row>
      <Row>
        {articles.map((article: Article) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <News isBranded={false} article={article} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoryPage;
