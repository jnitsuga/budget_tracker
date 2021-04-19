import { useState } from 'react'
import { Form, Button, Card, Row, Col } from 'react-bootstrap'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import View from '../components/View'
import Swal from 'sweetalert2'
import Router from 'next/router'

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login(e) {
    e.preventDefault()
    fetch("http://localhost:4000/api/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      }) //for the request to be accepted by the api
    }).then(res => res.json()).then(data => {
      //let's create a control structure
      if(typeof data.accessToken !== "undefined") {
        //store the access token in the local storage
        localStorage.setItem('token', data.accessToken)
        Swal.fire({
          icon: 'success',
          title: 'Successfully Logged In'
        })
        Router.push('/user/records')
      } else {
        Swal.fire('Login Error', 'You may have registered using a different login procedure', 'error')
      }
    })
  }

  return (
    <View title={ 'Budget Tracking App' }>
      <h1>Welcome!</h1>
      <p>Login by using your Registered Email.</p>
      <Form onSubmit={e => login(e)}>
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
