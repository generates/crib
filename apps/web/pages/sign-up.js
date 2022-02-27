import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from '@generates/swag'
import { SignUpForm } from '@generates/swag-squad'

const HeadingTwo = styled('h2')

export default function SignUpPage () {
  const form = useForm()

  function signUp () {

  }

  return (
    <div>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Sign up
      </HeadingTwo>

      <br />

      <SignUpForm form={form} onSubmit={signUp} />

    </div>
  )
}
