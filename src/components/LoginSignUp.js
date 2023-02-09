import React from 'react';
import { Grid, Button, Checkbox, Form } from 'semantic-ui-react'

const LoginSignUp = () => (
  <div>
    <Grid>
      <Grid.Row columns={2}>
         <Grid.Column width={8}>
  <Form>
    <Form.Field>
      LOG IN
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </Grid.Column>



  <Grid.Column width={8}>
  <Form>
    <Form.Field>
      SIGN UP
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </div>
)

export default LoginSignUp
