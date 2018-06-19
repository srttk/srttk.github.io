import React, { Component } from 'react';

export default class ContactForm extends Component {
    render() {
        return (
            <form>
                            <div className="form-goup">
                                <label className="form__label block">Name</label>
                                <input type="text" className="form__label block" />
                            </div>
                            <div className="form-goup">
                                <label className="form__label block">Email</label>
                                <input type="email" className="form__label block" />
                            </div>
                            <div className="form-goup">
                                <label className="form__label block">Message</label>
                               <textarea>

                               </textarea>
                            </div>
                            <div className="contact__footer">
                                <button type="button" onClick={ this.props.handleCancel } className="btn">Cancel</button>
                                <button type="button" className="btn">Submit</button>
                            </div>
            </form>
        );
    }
}