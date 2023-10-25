import React, { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";
import FormAddFriend from "./FormFriend";

const FriendsList = ({ friends, onSelectFriend, selectedFriend }) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            selectedFriend={selectedFriend}
            onSelectFriend={onSelectFriend}
            friend={friend}
            key={friend.id}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
