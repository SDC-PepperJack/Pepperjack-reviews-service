import React from 'react';
import styles from '../styles.js';
import StarRatingComponent from 'react-star-rating-component';
import { Card, UsernameContainer, Avatar } from './styled.js'

const ReviewItem = (props) => (
  <Card>
    <UsernameContainer >
      <Avatar src={props.avatar} />
      <div style={styles.avatarContainer}>
        <div style={styles.userNameDateDiv}>
          <a style={{ color: 'rgb(34, 34, 34)' }} href='#'>{props.username}</a>
          <div className="date" style={styles.reviewDate}>
            {props.date}
          </div>
        </div>
        <h2 style={styles.reviewStars}> <StarRatingComponent value={props.rating} starCount={5} starColor={'black'} emptyStarColor={'#E1E3DF'} /></h2>

        {
          (props.photoInComment !== 'none'
            ? <p style={styles.reviewComment}> {props.comment}
              <br />
              <img
                onClick={() => props.handleModalView(props)}
                style={{ height: '300px', width: '300px' }}
                src={props.photoInComment} />
            </p>

            : <p style={styles.reviewComment}> {props.comment} </p>)
        }

      </div>
    </UsernameContainer>

    <div style={styles.itemContainer} >
      <img style={{ width: '75px', height: '75px' }} src={props.itemPhoto}></img>
      <a style={styles.itemLink} >{props.item}</a>
    </div>


  </Card>

);

export default ReviewItem;






