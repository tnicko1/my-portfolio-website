
import React from 'react';

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-2.8 1.4c-.7 0-1.4-.2-2.1-.5.8 3.5 2.5 5.5 2.5 5.5s-1.5 1.5-3.5 1.5c-1.5 0-2.8-.8-3.5-1.5.7 2.8 2.5 4.5 2.5 4.5s-2.1 1.5-4.5 1.5c-2.5 0-4.5-1.5-4.5-1.5s1.8-1.8 2.5-4.5c-.7.8-2 1.5-3.5 1.5-2 0-3.5-1.5-3.5-1.5s.8-2 2.5-5.5c-1.4 0-2.8-1.4-2.8-1.4s1.8-3 3.3-4.4C3.7 6.1 3 4 3 4s2.1.8 3.5 1.5C8.3 2.5 11.2 2 12.5 2c1.3 0 4.2.5 5.5 3.5 1.4-.7 3.5-1.5 3.5-1.5z" />
  </svg>
);

export default TwitterIcon;
