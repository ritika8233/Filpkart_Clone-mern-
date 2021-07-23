import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
/**
* @author
* @function input
**/

const input = (props) => {
    return (
        <Form.Group  controlId="formBasicPassword">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control 
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} 
             />
             <Form.Text className="text-muted">
                    {props.errorMessage}
             </Form.Text>
        </Form.Group>
    )

}

export default input