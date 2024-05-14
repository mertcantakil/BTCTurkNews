import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsDetail from './components/NewsDetail';

const DetailPage: React.FC = () => {
  const location = useLocation();
  const article = location.state?.article || {};

  return <NewsDetail article={article} />;
}

export default DetailPage;
