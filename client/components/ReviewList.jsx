import React from 'react';
import styles from '../styles.js';
import ReviewItem from './ReviewItem.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalHTML: {
        photoInComment: 'test',
      }
    };
  }

  handleModalView({ avatar, date, item, username, itemPhoto, photoInComment, comment }) {
    let modalView = {
      date, item, username, itemPhoto, photoInComment, comment, avatar
    };
    console.log(modalView);

    // let modalCSS = this.state.modal;
    // modalCSS.display = 'block';

    let modal = document.querySelector('.modalContainer');
    modal.style.display = 'block';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';

    let body = document.querySelector('body');



    this.setState({
      modalHTML: modalView,
      // modal: modalCSS
    });
  }

  render() {
    return (
      <div style={styles.container} id='review-list'>
        <h4>Reviews ***** ({this.props.reviews})</h4>
        <div id='card'>
          <div className="modalContainer" style={styles.modal}>
            <div style={styles.modalWrapper}>
              <div styles={styles.modalImgContainer}>
                <img style={styles.modalImg} src={this.state.modalHTML.photoInComment}></img>

              </div>
              <div styles={styles.modalReviewContainer}>
                <h2> {this.state.modalHTML.username}</h2>
                <p>{this.state.modalHTML.comment}</p>
              </div>
            </div>

          </div>
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