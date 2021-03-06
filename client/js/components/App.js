import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

function mapStateToProps(state) {
	return {
		data: state.data
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector;
