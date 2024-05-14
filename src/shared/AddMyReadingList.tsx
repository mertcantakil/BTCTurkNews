import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import PlusIcon from '../images/plus.svg';
import RemoveIcon from '../images/remove.svg';
import '../index.css';

interface AddMyReadingListProps {
  isBranded: boolean;
  uniqueKey: string;
};

const AddMyReadingList: React.FC<AddMyReadingListProps> = ({ isBranded, uniqueKey }) => {

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const readingListArray = localStorage.getItem('readingList');
    if (readingListArray) {
      const tempArr = JSON.parse(readingListArray);

      if (tempArr.includes(uniqueKey)) {
        setIsAdded(true);
      }
      else {
        setIsAdded(false);
      }
    }
  }, [uniqueKey]);

  const handleClick = () => {
    let tempArr = [];
    const readingListArray = localStorage.getItem('readingList');

    if (readingListArray) {
      tempArr = JSON.parse(readingListArray);
    }

    if (tempArr.includes(uniqueKey)) {
      tempArr = tempArr.filter((key: string) => key !== uniqueKey);
    }
    else {
      tempArr.push(uniqueKey);
    }

    localStorage.setItem('readingList', JSON.stringify(tempArr));
    setIsAdded(!isAdded)
  };

  return (
    <>
      <Button
        className='add-my-read-list-btn'
        onClick={handleClick}
        style={{ backgroundColor: isBranded ? '#F4F7FF' : '#FFFFFF' }}
      >
        <img alt='icon' src={isAdded ? RemoveIcon : PlusIcon} />
        <span className='m-2'>{isAdded ? 'Remove My Reading List' : 'Add My Reading List'}</span>
      </Button>
    </>
  );
};

export default AddMyReadingList;