import React, { Component } from 'react';

export default class Ribbon extends Component {
    static defaultProps = { status: null}
    constructor(props) {
        super(props);

    }
    render() {
        const { status } = this.props;

        let statusClass = 'loading';

        switch(status) {
            case true :
                statusClass = 'yep';break;
            case false:
                statusClass = 'nope'; break;
        }

        return (
            <div className={ 'ribbon '+statusClass}>
                { (status === true) && <span>Available For Hire 😁 </span>}
                { (status === false) && <span>Not Available For Hire 😶</span>}
                { (status === null) && <span>loading...</span>}
            </div>
        );
    }
}