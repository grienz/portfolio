import { AnimatePage } from '@components/AnimatePage'
import { Container } from '@components/Container'
import { HeroSection } from '@components/HeroSection'
export const metadata = {
  title: 'Anasayfa',
  description: 'Typescript & React odaklı geliştirmeler yapıyorum.',
  keywords: [
    'Software Developer',
    'Güray ALIN',
    'Front-End',
    'React',
    'TypeScript',
    'JavaScript',
    'Tailwind'
  ]
}

const HomePage = async () => {
  return (
    <AnimatePage>
      <HeroSection />
      <section id="services">
        <Container>
          <h2 className="headline mt-24 text-2xl md:text-4xl lg:text-5xl">
            Beceriler
          </h2>
          <span className="mt-4 block list-none text-lg font-bold text-off-black dark:text-off-white md:text-2xl">
            <ul>
              <li>
                Cloud üzerinde CI/CD ve Container teknolojilerini
                kullanabiliyorum.
              </li>
              <br></br>
              <li>
                Frontend arayüz geliştirmeleri ve responsive design tasarımları
                yapabiliyorum.
              </li>
              <br></br>
              <li>Backend, sunucu ve API ile entegrasyonlar sağlıyorum.</li>
            </ul>
          </span>
        </Container>
      </section>
      <section id="tools" className="my-56">
        <Container>
          <h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
            Powered by Vercel
          </h2>
          <div className="mx-auto mt-8 flex w-32 max-w-5xl flex-wrap items-center justify-center gap-x-16 gap-y-8">
            <span
              className="text-2xl opacity-70 transition hover:opacity-100"
              key="Vercel"
            >
              <a
                href={'https://vercel.com'}
                target="_blank"
                rel="noopener noreferrer"
                title="Vercel"
              >
                {
                  <svg
                    width="76"
                    height="65"
                    viewBox="0 0 76 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                      fill="#000000"
                    />
                  </svg>
                }
              </a>
            </span>
          </div>
        </Container>
      </section>
    </AnimatePage>
  )
}

export default HomePage
