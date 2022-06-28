import { createContext, useReducer, useState } from "react";
import githubReducer  from "./GitHubReducers";


const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
    
    const intialState = {
        users : [],
        user : {},
        repo : [],
        loading : false,
    };

    const [state, dispatch] = useReducer(githubReducer, intialState); // dispatch state according to the action type
    
    const fetchData = async (query) => {
        setLoading();
        const response = await fetch(`https://api.github.com/search/users?q=${query}`);
        const { items } = await response.json();

        dispatch({
            type : 'GET_USERS',
            payload : items,
            

        });
        
};

const getUser = async (login) => {
    setLoading();
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();

    dispatch({
        type : 'GET_USER',
        payload : data,
    });
    
};

const getRepo = async (login) => {

    setLoading();
    const response = await fetch(`https://api.github.com/users/${login}/repos?sort=created&per_page=10`);
    const data = await response.json();

    dispatch({
        type : 'GET_REPO',
        payload : data,
    });

}

const setLoading = () => dispatch({type :'SET_LOADING'})

const handleClear = () => dispatch({type :'CLEAR_USERS'})

    return (
        <GitHubContext.Provider value={{
                ...state,
                fetchData,
                handleClear,
                getUser,
                getRepo,
        }}>
            {children}
        </GitHubContext.Provider>
    );
}

export default GitHubContext;