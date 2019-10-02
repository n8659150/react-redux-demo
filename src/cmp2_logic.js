import { connect } from 'react-redux';
import Cmp2UI from './cmp2UI.js';

function mapStateToProps (state) {
  return {
    anotherText: state.anotherText
  }
}

function mapDispatchToProps (dispatch) {
  return {} 
}


const Cmp2 = connect(mapStateToProps,mapDispatchToProps)(Cmp2UI);

export default Cmp2;