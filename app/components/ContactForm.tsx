'use client'

import { Box } from '@components/Box'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { TextArea } from '@components/TextArea'

import { useCookie } from '@hooks/useCookie'

import Link from 'next/link'
import { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

export const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [cookie, setCookie] = useCookie('contactFormSubmission', '')

  const subjects = [
    'Web sitesi geliştirmek istiyorum.',
    'Bu siteyi benim için değerlendir.',
    'Genel konular.',
    'Seninle çalışmak istiyorum.',
    'Diğer.'
  ]

  const canSubmit = (cookie: string) => {
    if (!cookie || cookie === '') {
      return true
    }

    const date = new Date(cookie)
    const now = new Date()

    if (date.getTime() + 60_000 * 60 * 60 * 24 > now.getTime()) {
      return false
    }

    return true
  }

  const handleSubmit = async (
    formValues: Record<string, string>,
    setSubmitting: (arg: boolean) => void,
    resetForm: () => void
  ) => {
    setError(false)
    setSuccess(false)

    const res = await fetch('', {
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (!canSubmit(cookie) || error) {
      setError(true)
      setSubmitting(false)
      return
    }

    setSubmitting(false)
    setSuccess(true)
    setCookie(new Date().toString())
    resetForm()
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Bu alan boş bırakılmamalı.'),
    lastName: Yup.string().required('Bu alan boş bırakılmamalı.'),
    email: Yup.string()
      .email('Geçersiz mail adresi.')
      .required('Bu alan boş bırakılmamalı.'),
    company: Yup.string(),
    subject: Yup.mixed()
      .oneOf(subjects, 'Bir konu seçin')
      .required('Lütfen seçim yapın.'),
    message: Yup.string().required('Mesajınızı girin.')
  })

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values, setSubmitting, resetForm)
      }}
    >
      {({ isSubmitting, values }) => {
        const isRecruiter =
          values.subject === 'I am a recruiter and want to hire you'

        return (
          <Form role="form" className="mt-4">
            <Box>
              {success && (
                <div className="rounded-md bg-green-100 px-4 py-2 font-bold text-green-600 ring-1 ring-green-600">
                  Mesaj için teşekkürler en kısa sürede geri dönüş yapacağım.
                </div>
              )}
              {error && (
                <div className="rounded-md bg-red-100 px-4 py-2 font-bold text-red-600 ring-1 ring-red-600">
                  Bişeyler test gitti...
                </div>
              )}
              {isRecruiter ? (
                <p className="font-bold text-red-600">
                  İş ve daha fazlası için{' '}
                  <Link href="/about" className="underline">
                    hakkında
                  </Link>{' '}
                  sayfasını okuduktan sonra iletişime geçiniz.
                </p>
              ) : (
                <>
                  <Input label="Ad" placeholder="Ad" id="firstName" />
                  <Input label="Soyad" placeholder="Soyad" id="lastName" />
                  <Input label="Kuruluş" placeholder="Kuruluş" id="company" />
                  <Input
                    label="Email"
                    placeholder="ornek@gmail.com"
                    id="email"
                    type="email"
                  />
                  <Select label="Konu" id="subject" options={subjects} />

                  <TextArea label="Mesaj" id="message" />

                  <div className="mt-6">
                    <Button
                      type="submit"
                      disabled={
                        isSubmitting || isRecruiter || !canSubmit(cookie)
                      }
                      className="group"
                    >
                      {isSubmitting ? 'Gönderiliyor ...' : 'Gönder'}
                    </Button>
                  </div>
                </>
              )}
            </Box>
          </Form>
        )
      }}
    </Formik>
  )
}
