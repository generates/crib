import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from '@generates/swag'
import { VerifyEmailForm } from '@generates/swag-squad'

const HeadingTwo = styled('h2')

export default function VerifyEmailPage () {
  const form = useForm()

  function verifyEmail () {

  }

  return (
    <div>

      <br />

      <HeadingTwo css={{ fontSize: '1.25em', textAlign: 'center' }}>
        Verify email
      </HeadingTwo>

      <br />

      <VerifyEmailForm form={form} onSubmit={verifyEmail} />

    </div>
  )
}
