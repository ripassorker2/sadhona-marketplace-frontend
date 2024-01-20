"use client";
import {getUserInfoFromToken} from "@/utils/getUserInfoFromToken";
import React, {createContext, useContext, useEffect, useState} from "react";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("accessToken") || "");
        if (token) {
            const decodedInfo = getUserInfoFromToken(token);
            fetch(`${process.env.BASE_URL}/user/${decodedInfo.id}`)
                .then((res) => res.json())
                .then((data) => setUser(data.data));
        } else {
            setUser(null);
        }
    }, [token]);

    const authInfo = {user, setUser, loading, setLoading, token, setToken};
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
