import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from '@generates/swag'
import { ForgotPasswordForm } from '@generates/swag-squad'

const HeadingTwo = styled('h2')

export default function ForgotPasswordPage () {
  const form = useForm()

  function submitForgotPassword () {

  }

  return (
    <div>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Forgot password
      </HeadingTwo>

      <br />

      <ForgotPasswordForm form={form} onSubmit={submitForgotPassword} />

    </div>
  )
}
