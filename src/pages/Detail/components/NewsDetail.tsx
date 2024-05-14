import React from 'react';
import AddMyReadingList from '../../../shared/AddMyReadingList';
import Date from '../../../shared/Date';
import { Row, Col } from 'antd';
import '../styles.css';
import Resource from './Resource';
import BackButton from '../../../shared/BackButton';
import { Article } from '../../../interfaces/interface';

interface NewsDetailProps {
  article: Article,
}

const NewsDetail: React.FC<NewsDetailProps> = ({ article: { title, urlToImage, content, url, publishedAt} }) => {

  return (
    <Col span={24} className='news-detail'>
      <div className='news-detail-wrapper'>
        <h3 className='news-detail-title'>{title}</h3>
        <img
          src={urlToImage}
          alt="news"
          className="news-picture"
        />
        <p className='news-detail-content'>{content}</p>
        <Resource url={url} />
        <Row className='news-detail-content-footer'>
          <AddMyReadingList
            isBranded={false}
            uniqueKey={title}
          />
          <Date date={publishedAt} />
        </Row>
        <BackButton text="Go to Back" navigateUrl="/category" />
      </div>

    </Col>
  );
};

export default NewsDetail;