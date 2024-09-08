import React, { createContext } from "react";

const BaseDBUrl = createContext();

const Contexts = ({ children }) => {
    return <BaseDBUrl.Provider value={"https://reactlearning-d4621-default-rtdb.firebaseio.com/"}>{children}</BaseDBUrl.Provider>;
};

export default Contexts;
export { BaseDBUrl };
