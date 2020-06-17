import React from 'react';
import MessageMe from './MessageMe';
import MessageYou from './MessageYou';

const ChatItem = ({messageMe}) => {
  if (messageMe) {
    return <MessageMe />;
  }
  return <MessageYou />;
};

export default ChatItem;
