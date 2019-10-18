import React from 'react';
import styles from '../styles.js';


const ModalView = (props) => (
  <div id="modalOverlay" style={styles.modalOverlay}>
    <div className="modalContainer" style={styles.modal}>
      <div style={styles.modalWrapper}>
        <div style={styles.modalImgContainer}>
          <img style={styles.modalImg} src={props.modalHTML.photoInComment}></img>
        </div>
        <div style={styles.modalReviewContainer}>
          <div style={styles.userModalContainer}>
            <img style={styles.avatar} src={props.modalHTML.avatar}></img>
            <a style={{ color: 'rgb(34, 34, 34)', paddingTop: '15px', paddingLeft: '15px' }} href='#'>{props.modalHTML.username}</a>
            <div style={{ paddingTop: '15px', paddingLeft: '15px' }}>
              {props.modalHTML.date}
            </div>

          </div>

          <p style={{ paddingLeft: '35px' }}>*****</p>
          <div style={{ maxHeight: '318px', maxWidth: '600px' }}>
            <p style={{ paddingLeft: '35px', fontSize: '15px', paddingRight: '35px', lineHeight: '1.4' }}> {props.modalHTML.comment}</p>
          </div>

          <div style={{ display: 'flex', position: 'relative', top: '40%', left: '10%' }}>
            <div style={{ width: '142px', height: '142px' }} >
              <img style={{ width: '150px', height: '142px' }} src={props.modalHTML.itemPhoto}></img>
            </div>
            <a style={styles.modalItemLink} >{props.modalHTML.item}</a>
          </div>

          <button onClick={props.handleExitModalView} style={styles.modalExitButton}>X</button>


        </div>
      </div>

    </div>
  </div>
);


export default ModalView;