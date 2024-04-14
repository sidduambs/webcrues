import React, { createContext, useState, useContext } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider
export const AppProvider = ({ children }) => {
    const [state, setState] = useState(/* initial state */);

    // Define the function to be used globally
    const updateHomePage = () => {
        // Your update logic here
    };

    return (
        <AppContext.Provider value={{ state, setState, updateHomePage }}>
            {children}
        </AppContext.Provider>
    );
};

// Define the custom hook to use the context
export const useGlobalContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }
    return context;
};
