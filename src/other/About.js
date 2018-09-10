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
            type: 'test/incrementAsync',
            payload:{

            },
        });
    }
    handleSub(){
        this.props.dispatch({
            type: 'test/decrementAsync',
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

function mapStateToProps({ test: { num } }){
    return {
        num
    };
}

// export default About;
export default connect(mapStateToProps)(About);
