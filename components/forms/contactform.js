import React, { Component } from 'react';
import { db } from '../../api/firebaseapp';


export default class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {isFormSubmited: false, contact: { name: '', email: '', message: ''}, isRequesting: false}

        this.onContactInputChanges = this.onContactInputChanges.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    onContactInputChanges(e) {

        let contact = Object.assign(this.state.contact,{});
        contact[e.target.name] = e.target.value;
        this.setState({ contact: contact });

    }

    resetForm() {
        this.setState({contact:{name: '', email: '', message: ''}, isRequesting: false})
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if(!this.state.contact.name.trim() || !this.state.contact.email.trim()) {
            return;
        }
        
        this.setState({isRequesting: true})
        let contact = this.state.contact;
        contact = {...contact, createdAt: new Date(), browserGeoLocation: this.props.browserGeoLocation, source: process.env.REFURL};

        
       
        let self = this;

        db.collection('contacts').add(contact)
            .then((res) => {
                self.resetForm();
                //self.props.handleCancel();
                self.setState({ isFormSubmited: true })
            })
            .catch(err => {

                self.setState({isRequesting: false});
            });

    }
    
    handleCancel() {

        
        this.props.handleCancel();
        this.setState({ isFormSubmited: false});
    }
    render() {

        const { isFormSubmited } = this.state;

        if( isFormSubmited ) {

            return(
                <div className="text-center">
                    <h2>🙏 Thank You 😘 </h2>
                    <div className="thanks-close-div">
                        <button type="submit" className="btn btn-border btn-block" onClick={ this.handleCancel }>Close</button>
                    </div>
                </div>
            )
        }

        return (


            <form onSubmit={ this.handleSubmit }>
                            <div className="form-goup">
                                <label className="form__label block">Name</label>
                                <input type="text" className="form__label block" onChange={ this.onContactInputChanges } value={this.state.contact.name} name="name" />
                            </div>
                            <div className="form-goup">
                                <label className="form__label block">Email</label>
                                <input type="email" className="form__label block" onChange={ this.onContactInputChanges } value={this.state.contact.email} name="email" />
                            </div>
                            <div className="form-goup">
                                <label className="form__label block" >Message</label>
                               <textarea name="message" onChange={ this.onContactInputChanges } value={this.state.contact.message}></textarea>
                            </div>
                            <div className="contact__footer">
                                <button type="submit" className="btn btn-border" disabled={ this.state.isRequesting }>😛 Submit </button>
                                <button type="button" onClick={ this.handleCancel } className="btn btn-border btn-border-danger">😑 Cancel</button>
                            </div>
            </form>
        );
    }
}