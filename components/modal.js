import React, { Component } from 'react';

export default class Modal  extends Component {
    static defaultProps = { title: 'Modal', chidren: 'Hello'}
    render() {

        const { title, children, closeModal } = this.props;
        return (
            <div className="modal" className={ this.props.show == true ? 'modal active': 'modal'}>
                <div className="modal-header">
                    <div>{ title }</div>
                    <div className="close" ><a href="javascript:void(0);" onClick={ closeModal }>&times;</a></div>
                </div>
                <div className="modal-body">
                { children }
                </div>
            </div>
        );
    }
}