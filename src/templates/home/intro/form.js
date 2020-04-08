import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import { TextField, Button } from '@material-ui/core/'

export default () => {
    const defaultFields = {
        name: ``,
        email: ``,
        phone: ``
    }

    const defaultMessage = `Get Started`

    const [ fields, setFields ] = useState(defaultFields)
    const [ message, setMessage ] = useState(defaultMessage)

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Show sending
        setMessage(`Sending...`)

        const result = setTimeout(() => {
            setMessage(`Message Sent`)
        }, 1000)

        if (result) {
            setTimeout(() => {
                setFields(defaultFields)
                setMessage(defaultMessage)
            }, 3000)
        }
    }

    return (
        <Wrapper id="form">
            <Description>{`Talk with a specialist about getting started with Speaker Focus:`}</Description>
            <Form
                onSubmit={handleSubmit}
            >
                <Field 
                    label="Your Name"
                    name="name"
                    type="text"
                    value={fields.name}
                    onChange={handleChange}
                    variant="filled"
                    fullWidth
                    required
                    aria-label="Enter your name"
                />
                <Field 
                    label="Your Email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    variant="filled"
                    fullWidth
                    required
                    aria-label="Enter your email address"
                />
                <Field 
                    label="Your Phone"
                    name="phone"
                    type="tel"
                    value={fields.phone}
                    onChange={handleChange}
                    variant="filled"
                    fullWidth
                    required
                    aria-label="Enter your phone number"
                />
                <Submit 
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                   {message}
                </Submit>
            </Form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color:#fff;
    padding:${props => props.theme.spacing(3)}px;
    display:grid;
    grid-row-gap:${props => props.theme.spacing(3)}px;
    background-color: rgb(250,250,250);
    grid-row:3;
    @media (min-width:992px) {
        grid-column: 3/4;
        grid-row: 1/5;
    }
`
const Description = styled.p`
    font-size:1.25rem;
`
const Form = styled.form`
    display:grid;
    grid-row-gap:${props => props.theme.spacing(3)}px;
`
const Field = styled(TextField)`
`
const Submit = styled(Button)`
    font-weight:bold;
    font-size:1rem;
`