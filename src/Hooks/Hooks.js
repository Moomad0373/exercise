import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ plus }) => {
    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const url = `https://reactlearning-d4621-default-rtdb.firebaseio.com/${plus}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching from URL:", url);
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                    },
                });

                setPosts(response.data);
                setIsPending(false);
                setError(null);
            } catch (err) {
                setError(err.message);
                setIsPending(false);
            }
        };

        fetchData();
    }, []);

    return { posts, isPending, error };
};

export default useFetch;
