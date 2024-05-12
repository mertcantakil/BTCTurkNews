import React from 'react';
import { Tag } from 'antd';
import PlusIcon from '../../../images/plus.svg';
import CheckIcon from '../../../images/check.svg';
import { Source } from '../../../interfaces/interface';
import '../styles.css';

interface FilterProps {
  sources: Source[];
  selectedTags: string[];
  onTagChange: (tag: string, checked: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ sources, selectedTags, onTagChange }) => {

  const tagsData = Array.from(new Set(sources.map((source: Source) => source.category)));

  const renderCheckableTag = () => {
    return tagsData.map((tag) => {
      const iconUrl = selectedTags.includes(tag) ? CheckIcon : PlusIcon;
      return (
        <Tag.CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => onTagChange(tag, checked)}
        >
          <img alt='icon' src={iconUrl} /><span className='m-2'>{tag}</span>
        </Tag.CheckableTag>
      )
    })
  }

  return (
    <div className='filter-wrapper'>
      <div className='main-title'>News</div>
      <div className='tag-container'>{renderCheckableTag()}</div>
    </div>
  );
}

export default Filter;
