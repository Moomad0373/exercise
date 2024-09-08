import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetch from "../../Hooks/Hooks";
import axios from "axios";
import { useEffect, useState } from "react";

const UsersList = () => {
    const plus = "users.json";
    const { posts: initialPosts, isPending, error } = useFetch({ plus });
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (initialPosts) {
            const filteredPosts = initialPosts.filter((post) => post !== null);
            setPosts(filteredPosts);
        }
    }, [initialPosts]);

    if (isPending) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!posts) return <p>*** Loading ***</p>;

    const deleteUser = async (userId) => {
        const ID = userId - 1;
        const firebaseUrl = `https://reactlearning-d4621-default-rtdb.firebaseio.com/users/${ID}.json`;

        try {
            const response = await axios.delete(firebaseUrl);

            if (response.status === 200) {
                console.log(`User with ID ${userId} deleted successfully`);
                const updatedPosts = posts.filter((post) => post.id !== userId);
                setPosts(updatedPosts);
            }
        } catch (error) {
            console.error(`Error deleting user with ID ${userId}:`, error);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "user",
            headerName: "Username",
            width: 300,
            renderCell: (params) => (
                <Link to="/">
                    <div className="flex gap-x-6 items-center">
                        <img
                            className="rounded-full w-8 h-8"
                            src={params.row.image}
                            alt="profile photo"
                        />
                        <span>{params.row.username}</span>
                    </div>
                </Link>
            ),
        },
        { field: "email", headerName: "Email", width: 200 },
        { field: "status", headerName: "Status", width: 200 },
        { field: "transaction", headerName: "Transaction", width: 300 },
        {
            field: "action",
            headerName: "Action",
            width: 300,
            renderCell: (params) => (
                <div className="flex items-center gap-x-5 mt-1">
                    <Link to="/">
                        <button className="flex items-center justify-center w-20 h-10 bg-emerald-800">Edit</button>
                    </Link>
                    <button
                        onClick={() => deleteUser(params.row.id)}
                        className="text-red-700 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                        </svg>
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div>
            <DataGrid
                autoHeight={true}
                rows={posts}
                columns={columns}
                autoPageSize={true}
            />
        </div>
    );
};

export default UsersList;
