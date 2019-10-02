import { connect } from 'react-redux';
import Cmp from './cmp.js';

function mapStateToProps (state) {
  return {
    text: state.text
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeText: (e) => dispatch({
      type: 'changeText',
      payload: e.target.value
    })
  } 
}


const App = connect(mapStateToProps,mapDispatchToProps)(Cmp);

export default App;