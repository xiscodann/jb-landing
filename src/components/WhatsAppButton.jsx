import React from 'react';
import Image from 'next/image';
import whatsAppIcon from '@icons/whatsapp.png';

const WhatsAppButton = () => {
  return (
    <a
      href='https://wa.me/2348100000000'
      className='whatsapp__float'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='whatsapp__float--image'>
        <Image src={whatsAppIcon} alt='WhatsApp' fill />
      </div>
    </a>
  );
};

export default WhatsAppButton;
