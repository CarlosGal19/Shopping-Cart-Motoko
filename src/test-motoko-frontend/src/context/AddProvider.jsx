import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AddContext = createContext();

export const AddProvider = ({ children }) => {

    const [myGames, setMyGames] = useState([]);

    return (
        <AddContext.Provider value={{ myGames, setMyGames }}>
            {children}
        </AddContext.Provider>
    );
};

AddProvider.propTypes = {
    children: PropTypes.node.isRequired
};