import React, { Component } from 'react';

export default class Ribbon extends Component {
    static defaultProps = { status: null}
    constructor(props) {
        super(props);

    }
    render() {
        const { status, isLoaded } = this.props;

        let statusClass = 'loading';

        switch(isLoaded) {
            case true :
                statusClass = 'yep';break;
            case false:
                statusClass = 'nope'; break;
        }


        return (
            <div className={ 'ribbon '+statusClass}>
                { (isLoaded === true) && <span>{status} </span>}
                { (isLoaded === false) && <span>Loading...</span>}

            </div>
        );
    }
}