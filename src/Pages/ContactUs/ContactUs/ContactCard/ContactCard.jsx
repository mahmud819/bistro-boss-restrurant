import React from 'react';
import SharedContactCard from '../../../../Shared/SharedComponent/SharedContactCard/SharedContactCard';
import { FaPhone } from 'react-icons/fa6';

const ContactCard = () => {
    return (
        <div>
            <SharedContactCard icon={<FaPhone></FaPhone>} titile={'Phone'} paragraph={'+8801125-125436'}></SharedContactCard>
        </div>
    );
};

export default ContactCard;