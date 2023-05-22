import { Container } from '@components/Container'
import { IconGithub, IconLinkedin, IconTwitter } from '@components/Icons'
import { SocialIcons } from '@components/SocialIcons'

const Footer = () => {
  return (
    <footer className="mt-8 py-8 md:mt-20">
      <Container className="flex justify-between">
        <span>&copy; {new Date().getFullYear()} Güray ALIN</span>
        <SocialIcons
          profiles={[
            {
              name: 'Github',
              url: 'https://www.github.com/grienz',
              icon: <IconGithub />
            },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/gurayalin',
              icon: <IconLinkedin />
            },
            {
              name: 'Twitter',
              url: 'https://twitter.com/gurayalin',
              icon: <IconTwitter />
            }
          ]}
        />
      </Container>
    </footer>
  )
}

export { Footer }
