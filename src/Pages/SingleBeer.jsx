import React from 'react';
import axios from 'axios';

class SingleBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const id = this.props.match.params.beerId;
    //console.log(id)

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers' + id)
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(id)
  }

  render() {
    console.log(this.state.beer);
    return (
      <div>
        <h1>SingleBeer Page</h1>
        {this.state.beer && (
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        )}
        <span>{this.state.beer && this.state.beer.name}</span>
        <span>{this.state.beer && this.state.beer.tagline}</span>
        <span>{this.state.beer && this.state.beer.first_brewed}</span>
        <span>{this.state.beer && this.state.beer.attenuation_level}</span>
        <span>{this.state.beer && this.state.beer.description}</span>
        <span>{this.state.beer && this.state.beer.contributed_by}</span>
      </div>
    );
  }
}

export default SingleBeer;
