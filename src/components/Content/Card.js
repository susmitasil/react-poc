import React, { Component } from 'react';
import './style.css'

export default class Card extends Component {
    render() {
        return (
            <React.Fragment>
                {/* {JSON.stringify(this.props.data[0])} */}
                {this.props.data.map(data => {
                    return (
                        <div className="col col-md-4 col-sm-12">
                            <div class="card ">
                                {/* <div className="card-block"></div> */}
                                <div className = "card-body caption "><p className="text-white">{data.title}</p></div>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <img alt="Card image cap" class="card-img-top embed-responsive-item" src={data.url} />
                                </div>
                                <div class="card-block">
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}