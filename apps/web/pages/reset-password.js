import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from '@generates/swag'
import { ResetPasswordForm } from '@generates/swag-squad'

const HeadingTwo = styled('h2')

export default function ResetPasswordPage () {
  const form = useForm()

  function resetPassword () {

  }

  return (
    <div>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Reset password
      </HeadingTwo>

      <br />

      <ResetPasswordForm form={form} onSubmit={resetPassword} />

    </div>
  )
}
