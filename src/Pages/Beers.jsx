import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  constructor(props) {
    //  <= ???? je sais pas ce que je fais
    //
    super(props);
    //
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    //  <= ???? Axios ? j'ai copier sans comprendre
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beers: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>All Beers Pages</h1>
        <div>
          {this.state.beers.map((beer) => {
            return (
              <div>
                <img src={beer.image_url} alt={beer.name} />
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                <span>{beer.tagline}</span>
                <span>{beer.contributed_by}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
