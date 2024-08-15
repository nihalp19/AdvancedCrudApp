import React, { createContext, useReducer } from "react"

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {


    const reducer = (state,action) => {
        switch (action.type) {
            case 'ADD':
                const newState = state.map((s) => {
                    return s.map((user) => {
                        if(user.length < 5)
                        {
                            
                        }
                    })
                })

            case 'EDIT':

            case 'REMOVE':
            
            default:
        }
    }

    const [state,dispatch] = useReducer(reducer,[[]],() => {
        const sessionData = sessionStorage.getItem('users')
        return sessionData ? JSON.parse(sessionData)  : [[]]
    })

    return <UserContext.Provider value={{state,dispatch}}>
        {children}
    </UserContext.Provider>
}