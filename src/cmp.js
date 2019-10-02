import React from 'react';
import Cmp2 from './cmp2_logic';

class Cmp extends React.Component {
    render () {
        return <div>
            <Cmp2 />
            <p>{ this.props.text }</p>
            <input type="text" onChange={this.props.changeText} />
        </div>
    }
}

export default Cmp