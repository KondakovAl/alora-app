import React from 'react';
import { CommentsProps } from '../../types/types';

interface AboutCommentsProps {
    comments: CommentsProps[];
    className?: string,
}

const AboutComments = ({comments, className}:AboutCommentsProps) => {
    return (
        <ul className={`${className ? `${className}__comments` : ''} comments`}>
            {comments.map((comment, index) => (
                <li className={`${className ? `${className}__comment` : ''} comment`} key={index}>
                <p className="comment__text">{comment.comment}</p>
                <div className="comment__wrapper_main">
                    <div className="comment__image-container">
                        <img src={comment.photo}  alt="photo" className="comment__image" />
                    </div>
                    <div className="comment__wrapper_mini">
                        <span className="comment__info">{comment.name}</span>
                        <span className="comment__info">{comment.position}</span>
                    </div>
                </div>
            </li> 
            ))}    
        </ul>
    );
};
export {AboutComments};