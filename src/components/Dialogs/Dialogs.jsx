import React from 'react';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = (props) => {
   let dialogsElements = props.dialogs.map((dialog) => (
      <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
   ));
   let messagesElements = props.messages.map((message) => (
      <Message text={message.text} key={message.id} id={message.id} />
   ));

   const sendNewMessage = (e) => {
      e.preventDefault();
      props.sendMessage();
   };
   const onMessageChange = (e) => {
      let messageText = e.target.value;
      props.updateNewMessageText(messageText);
   };
   return (
      <div className="dialogs">
         <div className="dialogs__body">
            <ul className="dialogs__names">{dialogsElements}</ul>
            <ul className="dialogs__messages">{messagesElements}</ul>
         </div>
         <form className="dialogs__form form-dialogs">
            <textarea
               value={props.newMessageText}
               onChange={onMessageChange}
               className="form-dialogs__textarea"
            />
            <button onClick={sendNewMessage} className="form-dialogs__button">
               Отправить
            </button>
         </form>
      </div>
   );
};

export default Dialogs;
