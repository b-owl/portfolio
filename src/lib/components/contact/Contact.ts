import {
  PUBLIC_EMAIL_JS_SERVICE_ID,
  PUBLIC_EMAIL_JS_TEMPLATE_ID,
  PUBLIC_EMAIL_JS_PUBLIC_KEY,
} from '$env/static/public'
import { writable, get } from 'svelte/store'
import emailjs from '@emailjs/browser'
import type { EmailJSResponseStatus } from '@emailjs/browser'

export interface ContactForm {
  user_name: string
  user_email: string
  message: string
}

export function setupContact() {
  const AlertClassname = writable('')
  const LoadingClassname = writable('')
  const form = writable<HTMLFormElement | null>(null)

  const sendEmail = (e: Event) => {
    e.preventDefault()
    LoadingClassname.set('loading')

    const formElement = get(form)
    if (!formElement) {
      console.error('Form element not found')
      LoadingClassname.set('')
      return
    }

    emailjs
      .sendForm(
        PUBLIC_EMAIL_JS_SERVICE_ID,
        PUBLIC_EMAIL_JS_TEMPLATE_ID,
        formElement,
        PUBLIC_EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        (result: EmailJSResponseStatus) => {
          AlertClassname.set('activeAlert')
          LoadingClassname.set('')
          setTimeout(() => AlertClassname.set(''), 3000)
        },
        (error: EmailJSResponseStatus) => {
          console.log(error)
          LoadingClassname.set('')
        },
      )
  }

  return {
    AlertClassname,
    LoadingClassname,
    form,
    sendEmail,
  }
}
