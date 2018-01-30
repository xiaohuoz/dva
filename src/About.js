import React,{ Component } from 'react';

import { connect } from 'react-redux';

class About extends Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }
    handleAdd(){
        this.props.dispatch({
            type: 'INCREMENT_ASYNC',
            payload:{

            },
        });
    }
    handleSub(){
        this.props.dispatch({
            type: 'DECREMENT',
            payload:{

            },
        });
    }
    render(){
        return (<div>
        <span>{this.props.num}</span>
        <button onClick={this.handleSub}>-</button>
        <button onClick={this.handleAdd}>+</button>
        </div>);
    }
}

function mapStateToProps(state){
    return {
        num: state.num
    };
}

// export default About;
export default connect(mapStateToProps)(About);
