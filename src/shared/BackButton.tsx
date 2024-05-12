import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../index.css';

interface BackButtonProps {
  text: string
  navigateUrl: string;
}
const BackButton: React.FC<BackButtonProps> = ({ text, navigateUrl }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateUrl);
  };

  return (
    <Button className='back-btn' onClick={handleClick}>{'< '}{text}</Button>
  );
};

export default BackButton;