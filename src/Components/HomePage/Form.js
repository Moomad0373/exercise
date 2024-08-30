import React, { useState } from "react";
import "./Form.css";

export default function Form() {
    const [firstName, setFistName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const url = "https://reactlearning-d4621-default-rtdb.firebaseio.com/users/users.json";

    const data = {
        firstName,
        lastName,
        email,
    };

    const registerHandler = (event) => {
        event.preventDefault();

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => console.log(response.status));
        setFistName("");
        setLastName("");
        setEmail("");
    };
    return (
        <div className="form-container">
            <form className="register-form" autoComplete="off" onSubmit={registerHandler}>
                <input id="first-name" value={firstName} onChange={(event) => setFistName(event.target.value)} className="form-field" type="text" placeholder="First Name" name="firstName" />
                <input id="last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} className="form-field" type="text" placeholder="Last Name" name="lastName" />

                <input id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-field" type="text" placeholder="Email" name="email" />
                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
