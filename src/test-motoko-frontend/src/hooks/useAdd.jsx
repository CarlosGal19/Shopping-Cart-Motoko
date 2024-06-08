import { useContext } from "react";
import { AddContext } from "../context/AddProvider";

const useAdd = () => {
    return useContext(AddContext);
}

export default useAdd;