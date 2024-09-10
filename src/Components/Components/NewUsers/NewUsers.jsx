import NewUserComp from "./NewUserComp";
import useFetch from "../../../Hooks/Hooks";

const NewUsers = () => {
    const plus = "users.json?orderBy=%22id%22&limitToLast=5";
    const { posts, isPending, error } = useFetch({ plus });

    if (isPending) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!posts) return <p>*** Loading ***</p>;

    let members = Array.isArray(posts) ? posts : Object.values(posts);
    members = members.sort((a, b) => b.id - a.id);
    return (
        <div className="bg-zinc-800 md:p-4 p-4 text-sm md:text-[1rem] rounded-md space-y-4 flex-1">
            <h3>New Members</h3>
            {members.map((member) => (
                <NewUserComp
                    key={member.id}
                    firstName={member.first_name}
                    lastName={member.last_name}
                    job={member.job}
                    image={member.image}
                />
            ))}
        </div>
    );
};

export default NewUsers;
