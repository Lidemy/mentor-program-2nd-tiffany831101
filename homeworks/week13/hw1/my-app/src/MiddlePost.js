import React, { Component } from 'react'

export default class MiddlePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postChild: props,
        }
    }

    render() {
        const { postChild } = this.state;
        console.log(postChild);

        return (
            <div className="col-lg-4 col-md-4 red">
                {postChild.map((num) => {
                    return (
                        <div className="red">{num.id}</div>)
                })}

            </div>
        )
    }
}

