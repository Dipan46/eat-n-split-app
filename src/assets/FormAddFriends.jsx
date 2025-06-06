import { useState } from "react";
import Button from "./Button";

function FormAddFriends({ onAddFriends }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();
        const id = crypto.randomUUID();

        if (!name || !image) return;

        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriends(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧔🏻Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <label>🌆Image URL</label>
            <input
                type="text"
                value={image}
                onChange={(e) => {
                    setImage(e.target.value);
                }}
            />
            <Button>Add</Button>
        </form>
    );
}

export default FormAddFriends;