import React from 'react';
import SharedBackground from '../../../Shared/SharedComponent/SharedBackground/SharedBackground';
import contactImg from '../../../assets/contact/banner.jpg'
import ContactCard from './ContactCard/ContactCard';

const ContactUs = () => {
    return (
        <div>
            <SharedBackground bgImage={contactImg} title={'Contact us'} paragraph={'Would you like to try a Dish'}></SharedBackground>
            <ContactCard></ContactCard>
        </div>
    );
};

export default ContactUs;