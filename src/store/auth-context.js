import React from 'react';

const AuthContext = React.createContext({
    isAuthenticated: false,
    username: '',
    userID: ''
})

export default AuthContext;