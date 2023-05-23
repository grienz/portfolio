import Image from 'next/image'
import Link from 'next/link'
import { TypeWriter } from '@components/TypeWriter'
export const HeroSection = () => {
  const Skills = [
    'TypeScript',
    'React',
    'Next.js',
    'Golang',
    'Linux',
    'Docker',
    'Cloud',
    'REST API'
  ]

  return (
    <section id="hero" className="relative isolate overflow-hidden pt-14">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 from-off-white dark:from-slate-950 sm:h-32" />
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] dark:shadow-slate-700 sm:-mr-80 lg:-mr-96 lg:shadow-xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="headline max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto">
            Merhaba,
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-slate-600 dark:text-off-white">
              Yazılım ve Web alanında kendini geliştiren, sürdürülebilirlik ve
              güvenlik odaklı projeler geliştirmeyi hedefleyen bir öğrenciyim.
            </p>
            <br></br>
            <p className="text-lg leading-8 text-slate-600 dark:text-off-white">
              Bu konular hakkında konuşabiliriz;
            </p>
            <strong className="text-xl font-black leading-8 text-slate-600 dark:text-off-white">
              <TypeWriter strings={Skills} />
            </strong>
            <br></br>
            <p className="text-lg leading-8 text-slate-600 dark:text-off-white">
              Bu websitesi açık kaynaklı projedir buradan erişebilirsiniz{' '}
              <a
                href="https://github.com/grienz/portfolio"
                title="Github reposu"
                target="_blank"
                rel="noopener noreferrer"
                className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
              >
                Github
              </a>
              .
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                İletişim
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
              >
                Hakkında <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <Image
            src="/assets/images/profile.jpg"
            alt="Güray ALIN"
            height={300}
            width={450}
            loading="eager"
            className="mt-12 aspect-[6/5] max-w-full rounded-2xl object-cover sm:mt-16 lg:ml-20 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-24"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24  from-off-white dark:from-slate-950 sm:h-32" />
    </section>
  )
}
