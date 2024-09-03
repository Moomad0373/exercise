import React from "react";
import NewUserComp from "./NewUserComp";
import { newMembers } from "../../../Datas";

const NewUsers = () => {
    return (
        <div className="bg-zinc-800 md:p-4 p-4 text-sm md:text-[1rem] rounded-md space-y-4 flex-1">
            <h3>New Members</h3>
            {newMembers.map((member) => (
                <NewUserComp key={member.id} name={member.username} job={member.title} image={member.img} />
            ))}
        </div>
    );
};

export default NewUsers;
