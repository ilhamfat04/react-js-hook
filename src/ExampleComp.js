import React, { useEffect, useState, useContext } from 'react'
import { Container } from "react-bootstrap"

import { UserContext } from './context/UserContext'

export default function ExampleComp() {
    // const { user } = props

    // const [state, setState] = useState(null)

    // useEffect(() => {
    //     console.log("ExampleComp DId Update")
    //     console.log('Data is update');
    //     console.log(user)
    // })

    const [state, dispatch] = useContext(UserContext)
    console.log(state)



    return (
        <Container>
            Email : {state.user.email}
        </Container>
    )
}
