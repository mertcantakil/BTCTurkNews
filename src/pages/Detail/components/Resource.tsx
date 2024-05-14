import React from 'react';
import '../styles.css';

interface ResourceProps {
  url: string,
}

const Resource: React.FC<ResourceProps> = ({ url }) => {
  return <a className='resource-url' href={url} target='blank'>Resource: {url}</a>;
};

export default Resource;