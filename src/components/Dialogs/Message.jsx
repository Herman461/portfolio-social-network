import React from 'react';

const Message = (props) => {
   return <li className="dialogs__message">{props.text}</li>;
};

export default Message;