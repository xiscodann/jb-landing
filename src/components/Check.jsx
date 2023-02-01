import React from 'react';

const Check = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1200'>
      <path
        class='circle1'
        d='M400 850c-138.071 0-250-111.929-250-250s111.929-250 250-250 250 111.929 250 250-111.929 250-250 250z'
        fill='#FF7B80'
      />
      <path
        class='circle2'
        d='M400 850c-138.071 0-250-111.929-250-250s111.929-250 250-250 250 111.929 250 250-111.929 250-250 250z'
        fill='#007B80'
      />
      <path
        class='check'
        d='M269.5 592.875l92.5 89.5 169.5-163.75'
        stroke='#FFF'
        stroke-width='40'
        stroke-linecap='round'
        stroke-linejoin='round'
        fill='none'
      />
    </svg>
  );
};

export default Check;
