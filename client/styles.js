const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
    fontFamily: `Graphik Webfont,-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif`,
    height: '790px',
    // overflow: 'hidden'
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5px',
    paddingLeft: '8px'
  },
  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '50%'
  },
  userRating: {
    display: 'flex',
    flexDirection: 'column'
  },
  usernameContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',

  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '58px',
    fontSize: '14px',
    marginTop: '10px'
  },
  userNameDateDiv: {
    display: 'flex',
  },
  reviewDate: {
    paddingLeft: '10px',
  },
  reviewCommentDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
  },
  reviewComment: {
    marginTop: '0px',
    fontSize: '14px',
  },
  reviewStars: {
    margin: '0px'
  },
  itemLink: {
    paddingTop: '25px',
    paddingLeft: '10px',
    textOverflow: 'ellipsis',
    width: '370px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '12px',
    fontWeight: '300',
    lineHeight: '1.5'
  },
  card: {
    marginBottom: '30px',

  },
  modal: {
    // height: '100%',
    // position: 'fixed',
    display: 'none',
    // zIndex: 10,
    // backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    paddingLeft: '100px',
    zIndex: 10,

  },
  modalWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  modalImg: {
    height: 'auto',
    width: 'auto'
  },
  modalImgContainer: {
    display: 'flex',
    order: 1,
  },

  modalReviewContainer: {
    order: 2,
  }
};


export default styles;