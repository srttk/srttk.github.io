import React, { Component } from 'react';
import { db } from '../../api/firebaseapp';


export default class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = { contact: { name: '', email: '', message: ''}, isRequesting: false}

        this.onContactInputChanges = this.onContactInputChanges.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
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
                alert('Thank you!!!')
                self.resetForm();
                self.props.handleCancel();
            })
            .catch(err => {

                self.setState({isRequesting: false});
            });

    }
    render() {
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
                                <button type="button" onClick={ this.props.handleCancel } className="btn btn-border btn-border-danger">😑 Cancel</button>
                            </div>
            </form>
        );
    }
}