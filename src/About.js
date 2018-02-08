import React,{ Component } from 'react';
import { connect } from 'react-redux';
import style from './about.css';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftmenuVisible: false,
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }
    handleAdd(){
        this.setState({
            leftmenuVisible: true,
        });
        this.props.dispatch({
            type: 'INCREMENT',
            payload:{

            },
        });
    }
    handleSub(){
        this.setState({
            leftmenuVisible: false,
        });
        this.props.dispatch({
            type: 'DECREMENT',
            payload:{

            },
        });
    }
    render(){
        console.log('style', style);
        const { leftmenuVisible } = this.state;
        return (<div>
            <span>{this.props.num}</span>
            <button onClick={this.handleSub}>-</button>
            <button onClick={this.handleAdd}>+</button>
            <div onClick={this.handleSub} className={leftmenuVisible ? style.showpopup : style.popup}>4567890-</div>
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
