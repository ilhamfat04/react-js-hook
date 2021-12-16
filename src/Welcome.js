//import useEffect here
import { useEffect, useContext } from "react"

import { Button } from 'react-bootstrap'

import { UserContext } from './context/UserContext'

export default function Welcome() {

    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Welcome Component Did Mount" & "Welcome Component Will Unmount"
    // useEffect(() => {
    //     console.log("Welcome Component Did Mount");
    //     return () => {
    //         console.log("Welcome Component Will Unmount");
    //     }
    // })

    const [_, dispatch] = useContext(UserContext)

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
            Welcome
            <Button onClick={handleLogout} >Logout</Button>
        </div>
    )
}
