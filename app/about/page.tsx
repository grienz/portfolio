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
          Bursa'da 1998 yılında doğdum. Bilgisayar ve internet ile erken tanışan
          biri olup, bu alanda kendini geliştiren biriyim. Web ve sunucu
          alanlarına yakından ilgiliyim, yeni teknolojileri takip ederim ve
          kullanmaya çalışırım.
        </p>
        <p>
          Bulut teknolojileri, konteynırlar, sanallaştırma, güvenlik konularında
          ve sunucu yönetimi alanında kendimi geliştiriyorum.
        </p>
        <p>
          İnterneti daha iyi bir yer yapmak için veri güvenliğinin herkes
          tarafından öğrenilmesi gerektiğine inanıyorum.
        </p>
        <h2 className="headline mb-4 mt-12 text-4xl">Yetenekler</h2>
        <p className="mb-6">
          2021 Sonunda başladığım kendi kendine öğrenme serüveni aşağıdaki
          teknolojiler ile devam ediyor.
          <br></br>
          <br></br>
          <ul>
            <strong>İngilizce</strong> - B1 seviyesinde sınıflandırıyorum en
            yakında zamanda "IELTS" sınavında derecemi öğrenmek istiyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>Linux</strong> - Kişisel bilgisayarımda "Fedora" sürümünü
            kullanıyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>Git</strong> - Her projemi git ile github reposunda
            yayınlıyorum. "Actions", "Workflow" gibi konuları öğreniyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>Docker</strong>- Hali hazırda olan projeleri "Docker" içinde
            çalıştırabiliyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>Golang</strong> - Daha yeni öğrenmeye başladım,
            "Microservice" mimarisi için servis yazmayı öğreniyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>MongoDB</strong> - Küçük ölçekli projelerde çok iyi işler
            çıkarıyor, kullanmayı seviyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>PostgreSQL</strong> - SQL database kullanımında daha
            yeniyim, projelerimde kullanmayı hedefliyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>Typescript</strong> - Aktif olarak bu sitede kullandığım
            "Javascript" için vazgeçilmez.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>React</strong> - Yeni çıkan "Frameworkler" ile birlikte
            öğrenmeye devam ediyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>NextJS</strong> - React için "Vercel" tarafından
            geliştirilmiş "Full-Stack framework" bu projede de kullandım. NextJS
            ile geliştirme yapmayı seviyorum.
          </ul>
          <hr></hr>
          <br></br>
          <ul>
            <strong>TailwindCSS</strong> - Module CSS yerine tercih
            edilecebilecek en iyi "framework". Hızlı geliştirme yapanlar için
            tavsiye ediyorum.
          </ul>
          <hr></hr>
          <br></br>
        </p>
        <h2 className="headline mb-4 mt-12 text-4xl">Hobi ve ilgi alanlarım</h2>
        <p className="mb-6">
          Spor yapmayı, satranç oynamayı ve felsefe/psikoloji/tarih
          alanınlarında okumalar yapmayı severim. Bilim kurgu türünde çoğu
          içeriği severek izlerim/takip ederim. House/Techno ve klasik müzik
          dinlemeyi severim.
        </p>
        <h2 className="headline mb-4 mt-12 text-4xl">Deneyimler</h2>
        <p className="mb-6">
          Genellikle kendi geliştirdiğim projeler üzerinde çalıştım. Daha iyi iş
          fırsatları için kendimi geliştiriyorum.
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
            Benimle direkt iletişim için{' '}
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
