import React from 'react';
import '../index.css';
import { dateFormatter } from '../utils';

interface DateProps {
  date: string;
}
const Date: React.FC<DateProps> = ({ date }) => {
  return (<span className='date'>{dateFormatter(date)}</span>);
};

export default Date;