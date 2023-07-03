
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/AuthContext"

function useNewGroup() {

    const { user } = useContext(AuthContext);

    const [newGroup, setNewGroup] = useState({
        name: '',
        description: '',
        photo: "",
        members: [user?.uid],
    });

    return [newGroup, setNewGroup];
};

export default useNewGroup;