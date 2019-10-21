import React from 'react';
import styles from '../styles.js';
import ReviewItem from './ReviewItem.jsx';
import ModalView from './ModalView.jsx';
import StarRatingComponent from 'react-star-rating-component';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHTML: {
        photoInComment: 'test',
      }
    };
  }

  handleModalView({ avatar, date, item, username, itemPhoto, photoInComment, comment, rating }) {
    let modalView = {
      date, item, username, itemPhoto, photoInComment, comment, avatar, rating
    };

    let modal = document.querySelector('.modalContainer');


    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';

    let body = document.querySelector('body');
    body.style.overflow = 'hidden';

    let modalOverlay = document.querySelector('#modalOverlay');

    setTimeout(() => {
      modalOverlay.style.removeProperty('opacity');
    }, 0);

    modalOverlay.style.display = 'block';
    modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

    this.setState({
      modalHTML: modalView,
    });
  }

  handleExitModalView() {
    let modal = document.querySelector('.modalContainer');
    modal.style.display = 'none';
    let modalOverlay = document.querySelector('#modalOverlay');
    modalOverlay.style.display = 'none';
    modalOverlay.style.backgroundColor = '';
    modalOverlay.style.opacity = '0';

    let body = document.querySelector('body');
    body.style.overflow = 'scroll';
  }

  render() {
    return (
      <div style={styles.container} id='review-list'>
        <div style={styles.reviewHeader}>
          <h4 style={{ display: 'flex' }}>
            Reviews
            <span style={{ marginLeft: '5px', marginRight: '5px' }}>
              <StarRatingComponent value={this.props.ratings} starCount={5} starColor={'black'} emptyStarColor={'#E1E3DF'} />
            </span>
            ({this.props.reviews})
          </h4>
        </div>

        <div id='card'>

          <ModalView
            handleExitModalView={this.handleExitModalView.bind(this)}
            modalHTML={this.state.modalHTML}
          />


          {this.props.comments.map(ele =>
            <ReviewItem
              key={ele.id}
              avatar={ele.reviewerAvatar}
              comment={ele.reviewerComment}
              date={ele.reviewerDate}
              item={ele.reviewerItem}
              username={ele.reviewerName}
              itemPhoto={ele.reviewerItemPhoto}
              photoInComment={ele.reviewerPhotoInComment}
              rating={ele.rating}
              handleModalView={this.handleModalView.bind(this)}
            />
          )}
          <button onClick={this.props.getComments}>+ More</button>
        </div>

      </div >
    );
  }
}



export default ReviewList;