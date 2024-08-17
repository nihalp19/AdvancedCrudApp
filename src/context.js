import React, { createContext, useReducer } from "react"
import { nanoid } from "nanoid"
export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const newState = state.map((s, i) => {
                    if (s.length < 5) {

                        let obj = {
                            id: nanoid(),
                            name: action.payload.name,
                            age: action.payload.age,
                            gender: action.payload.gender
                        }
                        return [...s, obj]
                    }
                    else if (s.length === 5 && i == state.length - 1) {
                        let arr = []
                        let obj = {
                            id: nanoid(),
                            name: action.payload.name,
                            age: action.payload.age,
                            gender: action.payload.gender
                        }
                        arr.push(obj)
                        state.push(arr)
                        return s
                    }
                    else {
                        return s
                    }
                })
                sessionStorage.setItem('users', newState)
                return newState


            case 'Remove':
                const filteredState = state.map((s) => {
                    return s.filter((user) => {
                        return user.id != action.payload.id
                    })
                })
                sessionStorage.setItem('users', filteredState)
                return filteredState

            case 'EDIT' :
                const editedState = state.map((s) => {
                    return s.map((s) => {
                        return s.id === action.payload.id ? 
                        {
                            ...s,
                            name : action.payload.name,
                            age : action.payload.age,
                            gender : action.payload.gender,
                        } : s
                    })
                }) 
                sessionStorage.setItem('users',editedState)
                return editedState  
                
            case 'SEARCH' :
                const searchRow = state.map((s) => {
                    return s.map((user) => {
                        return s.name === action.payload.value
                    })
                })
                return searchRow

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, [[]], () => {
        try {
            const sessionData = sessionStorage.getItem('users')
            return sessionData ? JSON.parse(sessionData) : [[]]
        } catch (error) {
            return [[]]
        }
    })

    return <UserContext.Provider value={{ state, dispatch }}>
        {children}
    </UserContext.Provider>
}