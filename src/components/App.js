import React, { Component, PropTypes } from 'react'; 
import { connect } from 'react-redux'; 

class App extends Component {
  
}

mapStateToProps = () {
  
}

//Export connect which returns result app. This is how we map react to redux
export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
)(App);