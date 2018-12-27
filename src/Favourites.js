import React from 'react';

const Favourites = ({beers}) => {

        const Allbeers = beers.length ? (
            beers.map(beer => {
                return (
                    <div className="beer card" key={beer.id}>
                        <img className="beeri" src={beer.image_url} alt="" height="200"/>
                        <h1>{beer.name}</h1>
                        <p>{beer.description}</p>
                    </div>
                )
            })
        ) : (
            <div className="ceter">Loading...</div>
        )
    return (
        <div className="container">
                <div className="grid">
                    {Allbeers}
                </div>
            </div>
    )
}
export default Favourites