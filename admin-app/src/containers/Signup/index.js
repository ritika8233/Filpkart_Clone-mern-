import React from 'react'
import Layout from '../../components/layout'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/input'

/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: '50px' }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input 
                        label = "First Name"
                        type = "text"
                        placeholder ="First Name"
                        value = ""
                        onChange={() => {}}  
                    />
                  </Col>
                  <Col md={6}>
                  <Input 
                        label = "Last Name"
                        type = "text"
                        placeholder ="Last Name"
                        value = ""
                        onChange={() => {}}  
                    />
                  </Col>
                </Row>
                <Input 
                        label = "Email address"
                        type = "email"
                        placeholder ="Enter email"
                        value = ""
                        onChange={() => {}}  
                    />
                    <Input 
                        label = "Password"
                        type = "password"
                        placeholder ="Password"
                        value = ""
                        onChange={() => {}}  
                    />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )

}

export default Signup