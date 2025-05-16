import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill, key }) {
    const [bill, setBill] = useState("");
    const [paid, setPaid] = useState("");
    const [paying, setPaying] = useState("you");

    const paidByFriend = bill - paid;

    function handleSubmit(e) {
        e.preventDefault();
        if (!bill || !paid) return;
        onSplitBill(paying === "you" ? paidByFriend : -paid);
    }

    return (
        <form key={key} className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split Bill With {selectedFriend.name}</h2>

            <label>💰Bill Value</label>
            <input
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
            />

            <label>🧔🏻Your Expense</label>
            <input
                type="number"
                value={paid}
                onChange={(e) => {
                    setPaid(
                        Number(e.target.value) > bill
                            ? paid
                            : Number(e.target.value)
                    );
                }}
            />

            <label>🤑Friends Expense</label>
            <input type="number" disabled value={paidByFriend} />

            <label>💰Who is paying</label>
            <select value={paying} onChange={(e) => setPaying(e.target.value)}>
                <option value="you">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

export default FormSplitBill;
