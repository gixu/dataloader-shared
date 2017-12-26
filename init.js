import React, {Component} from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';

const mapStateToProps = (state, props) => {
  const initConfig = props.config;
  initConfig.startLoader(state.auth.initRConfig);
  return {
    initR: state.auth.initR
  }
};

@connect(mapStateToProps);
class InitDLoader extends Component {
  static propTypes = {
    initR: PropTypes.func
  };
  
  constructor(props) {
    super(props);
    state = {};
  };
  
  render() {
    return (
      <InitRender={this.props.initR} />
    );
  }
};

export default InitDLoader;
