import React from 'react';

import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

import { addPost, updateNewPostText, setUserProfile } from '../../redux/actions';
import Profile from './Profile';
import { getUserProfile } from '../../api/api';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId || 2;
      getUserProfile(userId).then(data => this.props.setUserProfile(data))
   }
   render() {
      return <Profile {...this.props} />
   }
}
 
const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: state.profilePage.profile
   }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(WithUrlDataContainerComponent);
