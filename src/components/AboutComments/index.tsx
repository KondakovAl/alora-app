import React from 'react';
import { CommentsProps } from '../../types/types';

interface AboutCommentsProps {
  comments: CommentsProps[];
  className?: string;
  positionX: number;
  positionY: number;
}

const AboutComments = ({
  comments,
  className,
  positionX,
  positionY,
}: AboutCommentsProps) => {
  return (
    <ul className={`${className ? `${className}__comments` : ''} comments`}>
      {comments.map((comment, index) => (
        <li
          className={`${className ? `${className}__comment` : ''} comment`}
          key={index}
          style={{
            transform: `translate(${-positionX * (index + 1) * 50}px, ${
              -positionY * (index + 1) * 50
            }px)`,
          }}
        >
          <p className='comment__text'>{comment.comment}</p>
          <div className='comment__wrapper_main'>
            <div className='comment__image-container'>
              <img src={comment.photo} alt='photo' className='comment__image' />
            </div>
            <div className='comment__wrapper_mini'>
              <span className='comment__info'>{comment.name}</span>
              <span className='comment__info'>{comment.position}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export { AboutComments };
