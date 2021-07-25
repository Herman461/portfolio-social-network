import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setAuthUserData } from '../redux/actions';

import Header from './Header';
import { getAuth } from '../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		
		getAuth().then(data => {
			if (data.resultCode === 0) {
				this.props.setAuthUserData(data.data);
			}
			
		});
	}
	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	data: state.auth.data,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);