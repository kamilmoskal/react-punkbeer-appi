import React, { Component } from 'react';
import axios from 'axios'
import Star from './star.png'
import Search from './Search'

class Home extends Component {
    state = {
        beers: [], url: 'https://api.punkapi.com/v2/beers?page=1&per_page=20',
        favId: []
    }
    componentDidMount(){
        axios.get(this.state.url)
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
    }
    
    handleClick = (e) => {
        let id = e.target.id;
      /*   let idList = [...this.state.favId, id]
        this.setState({
            favId: idList
        }) */
        
        let index = this.state.beers.findIndex(e => e.id == id);
       // console.log(index);
        this.props.getId(this.state.beers[index]);
        e.target.classList = 'starclicked'
    }
    searchBeers = (beers) => {
        this.setState({
            beers: beers
        })
    }
    
    render(){
        const  beers = this.state.beers;
        const Allbeers = beers.length ? (
            beers.map(beer => {

                /* let as = this.state.favId.some(i => {
                    return i === beer.id
                  })
                  if(as){console.log(as);} */
                  

                return (
                    <div className="beer card" key={beer.id}>
                        <img className="beeri" src={beer.image_url} alt="" height="200"/>
                        <h1>{beer.name}</h1>
                        <p>{beer.description}</p>
                        <img id={beer.id} className="star" src={Star} alt="" width="30" onClick={this.handleClick}/>
                    </div>
                )
            })
        ) : (
            <div className="ceter">Loading...</div>
        )
        return (
            <div className="container">
                    <Search searchBeers={this.searchBeers}/>
                <div className="grid">
                    {Allbeers}
                </div>
            </div>
        );
    }

}

export default Home