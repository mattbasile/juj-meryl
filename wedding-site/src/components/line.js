import React from 'react';

 const Line = ({ color }) => {
   return (
     <svg
       width="1"
       height="80"
       viewBox="0 0 1 80"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <line
         x1="0.75"
         y1="80"
         x2="0.749996"
         y2="1.09278e-08"
         stroke={color === 'light' ? '#FFFBF4' : '#8C6418'}
         stroke-width="0.5"
       />
     </svg>
   );
 };
export default Line;