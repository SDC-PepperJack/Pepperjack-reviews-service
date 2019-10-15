import React from 'react';
import styles from '../styles.js';


class ReviewList extends React.Component {
  constructor() {
    super();

  }



  render() {
    return (
      <div style={styles.container} id='review-list'>
        <h4>Reviews ***** (18,494)</h4>
        <div id='card'>
          <div style={styles.usernameContainer}>
            <img style={styles.avatar} src="https://randomuser.me/api/portraits/men/61.jpg"></img>
            <div style={styles.avatarContainer}>
              <div style={styles.userNameDateDiv}>
                <a style={{ color: 'rgb(34, 34, 34)' }} href='#'>JadenPinks</a>
                <div style={styles.reviewDate}>
                  Aug 30, 2019
                </div>
              </div>
              <p style={styles.reviewStars}>*****</p>
              <p style={styles.reviewComment}> Absolutely adorable!!!! The font is great size, definitely would order again</p>
            </div>
          </div>

          <div style={styles.itemContainer} >
            <img style={{ width: '75px', height: '75px' }} src="https://i.etsystatic.com/9275559/r/il/dd0d6c/1015377788/il_794xN.1015377788_ld71.jpg"></img>
            <a style={styles.itemLink} >Halloween Costume Womens, Skeleton Costume, Cosplay Costume Women, Halloween Costume Women, Halloween Costumes, Adult Halloween Costumes</a>
          </div>

        </div>
      </div >
    );
  }
}

export default ReviewList;