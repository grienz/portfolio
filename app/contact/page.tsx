import { AnimatePage } from '@components/AnimatePage'
import { Container } from '@components/Container'
import { ContactForm } from '@components/ContactForm'

export const metadata = {
  title: 'İletişim',
  description: 'Web alanında geliştirmeler için iletişime geçebilirisiniz.'
}

const ContactPage = () => {
  return (
    <AnimatePage>
      <Container>
        <h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
          Contact
        </h1>
        <ContactForm />
      </Container>
    </AnimatePage>
  )
}

export default ContactPage
