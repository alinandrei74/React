import React, { useState } from 'react'

   const Container = ({title, children}) => {
     const [isCollapsed, setIsCollapsed] = useState(false);

     const toggleCollapse = () => {
       setIsCollapsed(!isCollapsed);
     };

     return (
       <div>
         <h3 onClick={toggleCollapse}>
           {title} {isCollapsed ? '▼' : '▲'}
         </h3>
         {!isCollapsed && children}
       </div>
     )
   }

   export default Container;