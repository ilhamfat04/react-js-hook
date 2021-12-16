import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap"

export default function ExampleComp(props) {
    const { user } = props

    const [state, setState] = useState(null)

    useEffect(() => {
        console.log("ExampleComp DId Update")
        console.log('Data is update');
        console.log(user)
    })

    return (
        <Container>
            Email : {props.user.email}
        </Container>
    )
}
