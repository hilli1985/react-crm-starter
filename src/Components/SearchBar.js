import React, { Component } from 'react';
import '../Styles/Client.css';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = { 
            jump : 20,
            query: '',
            category:'Select',
            options:{'select':'Select','name':'Name','sold':'Sold','emailType':'Email','owner':'Owner','country':'Country'},       
            jumps:[20,50,100,200,500]        
        }
    }
    handleChange = async (event) => {
        await this.setState({query: event.target.value});
        this.props.getFilterParams(this.state.query,this.state.category);
    }
    handleSelect = async (event) => {
        await this.setState({category: event.target.value});
        this.props.getFilterParams(this.state.query,this.state.category);
    }

    increaseBoundery = () => {
        this.props.changeBoundary(1)
    }

    decreaseBoundery = () => {        
        this.props.changeBoundary(-1)
    }

    changeJump = async (event) =>{
        await this.setState({jump : event.target.value});
        this.props.changeJump(this.state.jump);
    }
    
    render (){

        const optionList = Object.entries(this.state.options).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
          ));
        const jumpLevelList = this.state.jumps.map((jump, index) => (
            <option key={index} value={jump}>{jump}</option>
          ));
        return(
            <div className="wrapper-bar">
            <input className="search-bar-md" type="text" name="name" onChange={this.handleChange}  value={this.state.value} placeholder="Search"/>
            <select className="search-bar-md"  value={this.state.category} onChange={this.handleSelect} >
                {optionList}
            </select>
            <div className="pager">
            <select className="search-bar-sm" value={this.state.jump} onChange={this.changeJump}>
                {jumpLevelList}
            </select>
            <span onClick={this.decreaseBoundery}> ❮ </span>
            <span> {this.props.lowBoundary} - {this.props.highBoundary} </span>
            <span onClick={this.increaseBoundery}> ❯ </span>
            </div>
            </div>
        )
    }
}

export default SearchBar