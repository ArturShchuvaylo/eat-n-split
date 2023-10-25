import React, { useState } from "react";
import FriendsList from "./FriendList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import FormAddFriend from "./FormFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const onSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };

  const onSplitBill = (value) => {
    setFriends(
      friends.map((elem) => {
        if (elem.id === selectedFriend.id) {
          return { ...elem, balance: elem.balance + value };
        } else {
          return elem;
        }
      })
    );
  };

  const onAddFriend = (friend) => {
    setFriends([...friends, friend]);
    setShowAddForm(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showAddForm && <FormAddFriend onAddFriend={onAddFriend} />}
        <Button
          onClick={() => {
            setShowAddForm((prev) => !prev);
          }}
        >
          {showAddForm ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          onSplitBill={onSplitBill}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}

export default App;
