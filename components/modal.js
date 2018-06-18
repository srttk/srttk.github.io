import React, { Component } from 'react';

export default class Modal  extends Component {
    static defaultProps = { title: 'Modal', chidren: 'Hello'}

    constructor(props) {
        super(props);

        this.overlayEl = null;
        this.state = {ready: false };
    }
    componentDidMount() {

        this.setState({ ready: true})

    }
    render() {

        

        const { title, children, closeModal, show } = this.props;
        if(this.state.ready ) {
            if(show && this.overlayEl == null) {
                this.overlayEl = document.createElement('div')
                this.overlayEl.classList.add('overlay')
                document.body.appendChild(this.overlayEl);
            }
            if(!show && this.overlayEl) {
                   this.overlayEl.remove();
                   this.overlayEl = null;
               
            }
           
        }
 
        
        
        return (
            <div className="modal" className={ show == true ? 'modal active': 'modal'}>
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