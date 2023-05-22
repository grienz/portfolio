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
          İletişim
        </h1>
        <span className="mt-4 block text-lg font-bold text-off-black dark:text-off-white md:text-2xl">
          <p>Yakında aktif olacak.</p>
        </span>
        <ContactForm />
      </Container>
    </AnimatePage>
  )
}

export default ContactPage
