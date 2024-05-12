import React from 'react';
import AddMyReadingList from '../../../shared/AddMyReadingList';
import Date from '../../../shared/Date';
import { Row, Col } from 'antd';
import '../styles.css';
import BackButton from '../../../shared/BackButton';
import { Article } from '../../../interfaces/interface';

interface NewsDetailProps {
  article: Article,
}

const NewsDetail: React.FC<NewsDetailProps> = ({ article }) => {

  return (
    <Col span={24} className='news-detail'>
      <div className='news-detail-wrapper'>
        <h3 className='news-detail-title'>{article.title}</h3>
        <img
          src={article.urlToImage}
          alt="news"
          className="news-picture"
        />
        <p className='news-detail-content'>{article.content}</p>
        <Row className='news-detail-content-footer'>
          <AddMyReadingList
            isBranded={false}
            uniqueKey={article.title}
          />
          <Date date={article.publishedAt} />
        </Row>
        <BackButton text="Go to Back" navigateUrl="/category" />
      </div>

    </Col>
  );
};

export default NewsDetail;