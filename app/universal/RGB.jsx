import React,{Component} from 'react';
import ColorBlock from './ColorBlock';
import Slider from './Slider';

export default class RGB extends Component{
    state = {
        r:222,
        g:111,
        b:333
    }
    render(){
        const {r,g,b} = this.state;
        const update = color => val => this.setState({[color]:val})
        return (
            <center>
                <ColorBlock r={r} g={g} b={b}></ColorBlock>
                <Slider value={r} slide={update('r')}/>
                <Slider value={g} slide={update('g')}/>
                <Slider value={b} slide={update('b')}/>
            </center>
        )
    }
}