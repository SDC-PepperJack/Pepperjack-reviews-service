import React from 'react';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      ratings: 0,
      reviews: 0,
      seller: '',

    };
  }

  componentDidMount() {
    fetch('/api/seller/5da6350a92b86a1332313b4c')
      .then(res => res.json())
      .then(res => {
        const { ratings, reviews, comments, seller, } = res;

        //only get 4 comments
        this.setState({ ratings, reviews, comments: comments.slice(0, 4), seller });
      });
  }


  getAllComments() {
    fetch('/api/seller/5da6350a92b86a1332313b4c')
      .then(res => res.json())
      .then(res => {
        const { comments } = res;

        //get all the rest of the comments once the more button is clicked
        this.setState({ comments });
      });
  }


  render() {
    return (
      <>
        <ReviewList getComments={this.getAllComments.bind(this)} comments={this.state.comments} ratings={this.state.ratings} reviews={this.state.reviews} />

      </>


    );
  }
}

export default App;