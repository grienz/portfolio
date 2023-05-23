import { AnimatePage } from '@components/AnimatePage'
/* import { Button } from '@components/Button'
import { IconDownload } from '@components/Icons' */
import { Container } from '@components/Container'
import { Education } from '@components/Education'
import { WorkExperience } from '@components/WorkExperience'
import { mockJobs, mockSchool } from '@mockdata'
import Link from 'next/link'

export const metadata = {
  title: 'Hakkında',
  description: 'İnterneti daha iyi bir yer yapmak için çalışıyorum.'
}

const AboutPage = async () => {
  return (
    <AnimatePage>
      <Container>
        <h1 className="headline mt-8 text-3xl md:text-5xl lg:text-6xl">
          Güray ALIN
        </h1>
        <h2 className="mt-2 text-xl font-bold md:text-2xl">
          Yazılım Geliştirici - Öğrenci
        </h2>
        <p className="mt-8">
          1998 yılında Bursa'da doğdum. Bilgisayar ve internet ile erken tanışıp
          bu alanda kendini geliştiren biriyim. Web ve sunucu alanlarına
          yakından ilgiliyim, yeni teknolojileri takip ederim ve kullanmaya
          çalışırım.
        </p>
        <p>
          Bulut teknolojileri, konteynerler, sanallaştırma, güvenlik konularında
          ve sunucu yönetimi alanında kendimi geliştiriyorum.
        </p>
        <p>
          İnterneti daha iyi bir yer yapmak için veri güvenliğinin herkes
          tarafından öğrenilmesi gerektiğine inanıyorum.
        </p>
        <h2 className="headline mb-4 mt-12 text-4xl">Yetenekler</h2>
        <p className="mb-6 list-none">
          2021 Sonunda başladığım kendi kendine öğrenme serüveni aşağıdaki
          teknolojiler ile devam ediyor.
        </p>
        <ul className="mt-4">
          <li>
            <strong>İngilizce</strong> - B1 seviyesinde sınıflandırıyorum en
            yakında zamanda "IELTS" sınavında derecemi öğrenmek istiyorum.
          </li>
          <br></br>
          <li>
            <strong>Linux</strong> - Kişisel bilgisayarımda "Fedora" sürümünü
            kullanıyorum. Sunucularda ise "Ubuntu Server" tercih ediyorum.
          </li>
          <br></br>
          <li>
            <strong>Git</strong> - Her projemi git ile github reposunda
            yayınlıyorum. "Actions", "Workflow" gibi konuları öğreniyorum.
          </li>
          <br></br>
          <li>
            <strong>Docker</strong> - Hali hazırda olan projeleri "Docker" ile
            çalıştırabiliyorum.
          </li>
          <br></br>
          <li>
            <strong>Golang</strong> - Daha yeni öğrenmeye başladım,
            "Microservice" mimarisi için servis yazmayı öğreniyorum.
          </li>
          <br></br>
          <li>
            <strong>MongoDB</strong> - Küçük ölçekli projelerde çok iyi işler
            çıkarıyor, kullanmayı seviyorum.
          </li>
          <br></br>
          <li>
            <strong>PostgreSQL</strong> - SQL database kullanımında daha
            yeniyim, projelerimde kullanmayı hedefliyorum.
          </li>
          <br></br>
          <li>
            <strong>Typescript</strong> - Aktif olarak bu sitede kullandığım
            "Javascript" için vazgeçilmez bir dil.
          </li>
          <br></br>
          <li>
            <strong>React</strong> - Yeni çıkan "Frameworkler" ile birlikte
            öğrenmeye devam ettiğim kütüphane.
          </li>
          <br></br>
          <li>
            <strong>NextJS</strong> - React için "Vercel" tarafından
            geliştirilmiş "Full-Stack framework" bu projede de kullandım. NextJS
            ile geliştirme yapmayı seviyorum.
          </li>
          <br></br>
          <li>
            <strong>TailwindCSS</strong> - Module CSS yerine tercih
            edilecebilecek en iyi "framework". Hızlı geliştirme yapanlar için
            tavsiye ediyorum.
          </li>
        </ul>
        <br></br>
        <h2 className="headline mb-4 mt-12 text-4xl">Hobi ve ilgi alanlarım</h2>
        <p className="mb-6">
          Spor yapmayı, satranç oynamayı ve felsefe/psikoloji/tarih
          alanınlarında okumalar yapmayı severim. Bilim kurgu türünde çoğu
          içeriği severek takip ederim. House, techno ve klasik müzik dinlemeyi
          severim.
        </p>
        <h2 className="headline mb-4 mt-12 text-4xl">Deneyimler</h2>
        <p className="mb-6">
          Genellikle kendi geliştirdiğim projeler üzerinde çalıştım. Daha iyi iş
          olanakları için kendimi geliştiriyorum.
        </p>
        <WorkExperience jobs={mockJobs} />
        <h2 className="headline mb-4 mt-12 text-4xl">Eğitim</h2>
        <p className="mb-6">
          Kendi kendine öğrenmeyi ve gelişmeyi prensip haline getirmiş, öz
          disipline sahip biriyim.
        </p>
        <Education education={[mockSchool]} />
        <section id="cv-download">
          <h2 className="headline mb-4 mt-12 text-4xl">Daha fazla detay</h2>

          <p>
            Buraya kadar okuduğunuz için teşekkürler. Daha fazla bilgi ve detay
            için iletişime geçebilirsiniz.
          </p>
          <p>
            Benimle iletişime geçmek için{' '}
            <Link
              href="/contact"
              className="underlined relative border-b-2 border-grey-300 font-bold hover:border-b-0 dark:border-grey-700"
            >
              iletişim formunu{' '}
            </Link>
            doldurabilirsiniz veya sosyal medya üzerinden de ulaşabilirsiniz.
          </p>

          {/*           <div className="mt-8 flex items-baseline justify-start gap-6">
            <Button
              href="/assets/cv-2023.pdf"
              download={true}
              className="group flex gap-2 whitespace-nowrap"
            >
              <IconDownload />
              CV indir
            </Button>
          </div> */}
        </section>
      </Container>
    </AnimatePage>
  )
}

export default AboutPage
