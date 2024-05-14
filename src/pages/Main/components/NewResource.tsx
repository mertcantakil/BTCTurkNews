import React from 'react';
import { Col, Divider, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import ArrowButton from '../../../images/arrow-button.svg'
import { Source } from '../../../interfaces/interface';
import '../styles.css';

interface NewResourceProps {
  sources: Source[];
  selectedTags: string[];
}

const NewsResource: React.FC<NewResourceProps> = ({ sources, selectedTags }) => {

  const navigate = useNavigate();

  const handleClick = (sourceId: string) => {
    navigate('/category', { state: { sourceId, selectedTags } });
  };

  return (
    <>
      {sources.map((source: Source) => (
        <Row>
          <Col span={22}>
            <div className='news-resource-wrapper'>
              <h3 className='news-resource-title' onClick={() => handleClick(source.id)}>{source.name}</h3>
              <p className='news-resource-content'>{source.description}</p>
            </div>
          </Col>
          <Col className='arrow-button-column' span={2}>
            <img
              src={ArrowButton}
              alt="Go to detail page"
              className="right-arrow-icon"
              onClick={() => handleClick(source.id)}
            />
          </Col>
          <Divider />
        </Row>
      ))}
    </>
  );
}

export default NewsResource;
