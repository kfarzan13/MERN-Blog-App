import React from 'react';
import {formatISO9075} from 'date-fns';

export default function Post ({title, summary, cover, content, createdAt}) {
  return (
    <div className='post'>
        <div className='image'>
          <img src='https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=730&crop=1' alt='' />
        </div>
        <div className='texts'>
          <h2>{title}</h2>
          <p className='info'>
            <span className='author'>Farzan Khan</span>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className='summary'>{summary}</p>
        </div>
      </div>
  )
}