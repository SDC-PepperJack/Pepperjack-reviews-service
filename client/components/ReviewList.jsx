import React from 'react';
import styles from '../styles.js';
import ReviewItem from './ReviewItem.jsx';


const ReviewList = (props) => (
  <div style={styles.container} id='review-list'>
    <h4>Reviews ***** ({props.reviews})</h4>
    <div id='card'>
      {props.comments.map(ele =>
        <ReviewItem
          key={ele.id}
          avatar={ele.reviewerAvatar}
          comment={ele.reviewerComment}
          date={ele.reviewerDate}
          item={ele.reviewerItem}
          username={ele.reviewerName}
          itemPhoto={ele.reviewerItemPhoto}
          photoInComment={ele.reviewerPhotoInComment}
        />
      )}
      <button onClick={props.getComments}>+ More</button>
    </div>

  </div>

);

export default ReviewList;