import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsSources, setSelectedTags as setActionSelectedTags } from '../../redux/actions';
import Filter from './components/Filter';
import NewsResource from './components/NewResource';
import { Divider } from 'antd';
import './styles.css';
import { filterNewsByTagsAndLang } from '../../utils';

const DEFAULT_TAG = ['general'];

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.news.sources);
  const defaultTags = useSelector((state: any) => state.news.selectedTags);

  const { sources = [] } = data;
  const [selectedTags, setSelectedTags] = React.useState<string[]>(defaultTags.length > 0 ? defaultTags : DEFAULT_TAG);
  const filteredSources = filterNewsByTagsAndLang(sources, selectedTags);

  useEffect(() => {
    dispatch(setActionSelectedTags(selectedTags));
    dispatch(fetchNewsSources());
  }, [dispatch, selectedTags]);

  const handleTagChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <>
      <Filter
        sources={sources}
        selectedTags={selectedTags}
        onTagChange={handleTagChange}
      />
      <Divider />
      <NewsResource
        sources={filteredSources}
        selectedTags={selectedTags}
      />
    </>
  );
};

export default MainPage;
