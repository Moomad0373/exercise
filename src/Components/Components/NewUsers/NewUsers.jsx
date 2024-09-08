import React, { useEffect, useState } from "react";
import NewUserComp from "./NewUserComp";
import { newMembers } from "../../../Datas";

const NewUsers = () => {
    // const [newMembers, setNewMembers] = useState([]);

    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/api/newuser/", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Network response was not ok: ${response.statusText}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setNewMembers(data);
    //         })
    //         .catch((error) => {
    //             console.error("There was a problem with the fetch operation:", error);
    //         });
    // }, []);
    return (
        <div className="bg-zinc-800 md:p-4 p-4 text-sm md:text-[1rem] rounded-md space-y-4 flex-1">
            <h3>New Members</h3>
            {newMembers.map((member) => (
                <NewUserComp
                    key={member.id}
                    name={member.name}
                    job={member.job}
                    image={member.image}
                />
            ))}
        </div>
    );
};

export default NewUsers;
