import { useState } from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import View from '../components/View'; 

export default function Home() {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

  return (
      <View title={ 'Budget Tracking App' }>
         <h1>Welcome!</h1>
          <p>Login by using your Registered Email.</p>
	        <Form>
	            <Form.Group controlId="email">
	                <Form.Label>Email:</Form.Label>
	                <Form.Control type="text" value={email} onChange={e=>setEmail(e.target.value)} required/>
	            </Form.Group>
	            <Form.Group controlId="password">
	                <Form.Label>Password:</Form.Label>
	                <Form.Control type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
	            </Form.Group>
	            <Button type="submit" variant="primary" className="btn-block mb-3">Submit</Button>
	        </Form>
      </View>
  )
}
