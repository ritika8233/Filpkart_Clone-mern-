import React from 'react'
import Layout from '../../components/layout'
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/input'
/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{marginTop:'50px'}}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
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

export default Signin