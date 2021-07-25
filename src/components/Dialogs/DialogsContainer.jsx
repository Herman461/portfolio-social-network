import React from 'react';
import { sendMessage, updateNewMessageText } from '../../redux/actions';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText
   }
}

const DialogsContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage })(Dialogs);

export default DialogsContainer;
