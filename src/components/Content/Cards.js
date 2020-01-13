import React, { Component } from 'react'
import Navigation from '../Navbar/Index'
import axios from 'axios';
import Card from './Card'
import './style.css'

class Cards extends Component {
    state = {
        data : []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
          .then(res => {
              console.log(res.data)
              const data = res.data;
              this.setState({ data });
              console.log(this.state.data)
          })
      }
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="content">
                    <div className = "row">
                        {this.state.data.length === 0 ? <p>Fetching Data</p>:<Card data={this.state.data} />}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Cards