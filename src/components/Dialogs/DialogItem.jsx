import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
       <li>
          <NavLink activeClassName="_active" to={`/dialogs/${props.id}`} className="dialogs__name">
             {props.name}
          </NavLink>
       </li>
    );
 };

 export default DialogItem;