import "./App.css";
import Button from "./assets/Button";
import { useState } from "react";
import FriendsList from "./assets/FriendList";
import FormSplitBill from "./assets/FormSplitBill";
import FormAddFriends from "./assets/FormAddFriends";

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
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleClickAdd() {
        setShowAddFriend(() => {
            return !showAddFriend;
        });
        setSelectedFriend(null);
    }

    function handleAddFriends(friend) {
        setFriends((prev) => [...prev, friend]);
        setShowAddFriend(() => {
            return !showAddFriend;
        });
    }

    function handleSelection(friend) {
        setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );

        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelection}
                    selectedFriend={selectedFriend}
                />

                {showAddFriend && (
                    <FormAddFriends onAddFriends={handleAddFriends} />
                )}

                <Button handleClickAdd={handleClickAdd}>
                    {showAddFriend ? "Close" : "Add Friend"}
                </Button>
            </div>

            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}

export default App;
