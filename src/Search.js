import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
    state = {
        beers: [], 
        url: ""
    }
    
    handleChangeUrl = (e) => {
        if(e.target.value.length > 0){
            this.setState({
                url : "https://api.punkapi.com/v2/beers?beer_name=" + e.target.value
            })
        } else {
            this.setState({
                url: "https://api.punkapi.com/v2/beers?page=1&per_page=20"
            })
        }
    }
    handleSendUrl = (e) => {
        e.preventDefault();
        if (this.state.url.length > 0){
        axios.get(this.state.url)
            .then(res => {
                this.setState({
                    beers: res.data
                },function(){
                    
                    this.props.searchBeers(this.state.beers);
                })
            })
        }
            
    }
    render(){
        return (
            <div className="searchbeer">
                <form action="" onSubmit={this.handleSendUrl}>
                <input type="text" placeholder="search for beer" onChange={this.handleChangeUrl}/>
                <button className="btn">Search</button>
                </form>
            </div>
        )
    }
}
export default Search