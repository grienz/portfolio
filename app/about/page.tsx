import { AnimatePage } from '@components/AnimatePage'
import { Button } from '@components/Button'
import { IconDownload } from '@components/Icons'
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
          1998 yılında Bursa'da doğdum. Yazılım ve web tasarım alanında kendini
          geliştiren, sürdürülebilirlik ve güvenlik odaklı projeler oluşturmayı
          hedefleyen, öz disipline sahip bir öğrenciyim. Yeni teknolojileri
          takip ederim ve kullanmaya çalışırım.
        </p>
        <p>
          Bulut teknolojileri, konteynerler, sanallaştırma, güvenlik konularında
          çalışmalar yapıyorum.
        </p>
        <p>
          İnterneti daha iyi bir yer yapmak için veri güvenliğinin öğrenilmesi
          gerektiğine inanıyorum.
        </p>
        <h2 className="headline mb-4 mt-12 text-4xl">Yetenekler</h2>
        <p className="mb-6 list-none">
          Web ve sunucu alanlarında 2021'de başladığım öğrenme sürecine
          "Front-end" alanında devam etmekteyim.
        </p>
        <ul className="mt-4">
          <li>
            <strong>İngilizce</strong> - B1 seviyesinde"IELTS" sınavına
            hazırlanıyorum.
          </li>
          <br></br>
          <li>
            <strong>Linux</strong> - Kişisel bilgisayarımda "Fedora" sürümünü
            kullanıyorum. Sunucularda ise "Ubuntu Server" tercih ediyorum.
          </li>
          <br></br>
          <li>
            <strong>Git</strong> - Her projemi git ile github reposunda
            yayınlıyorum. "Actions", "Workflow" konuları üzerinde çalışmalarımı
            sürdürüyorum.
          </li>
          <br></br>
          <li>
            <strong>Docker</strong> - Hali hazırda olan projeleri "Docker" ile
            çalıştırabiliyorum.
          </li>
          <br></br>
          <li>
            <strong>Golang</strong> - Daha yeni öğrenmeye başladım,
            "Microservice" mimarisi için servis yazmayı hedefliyorum.
          </li>
          <br></br>
          <li>
            <strong>MongoDB</strong> - Küçük ölçekli projelerde çok iyi işler
            çıkarıyor. Bireysel projelerimde kullanıyorum.
          </li>
          <br></br>
          <li>
            <strong>PostgreSQL</strong> - SQL database kullanımında daha
            yeniyim, projelerimde kullanmayı hedefliyorum.
          </li>
          <br></br>
          <li>
            <strong>Typescript</strong> - Aktif olarak bu sitede de kullandığım,
            projelerimde "Javascript" yazarken kullanıyorum.
          </li>
          <br></br>
          <li>
            <strong>React</strong> - "Framework" ile birlikte çalışmaya devam
            ettiğim kütüphane. NextJS ile kullanıyorum.
          </li>
          <br></br>
          <li>
            <strong>NextJS</strong> - React için "Vercel" tarafından
            geliştirilmiş "Full-Stack framework" bu projede de kullandım. NextJS
            ile geliştirme yapabiliyorum.
          </li>
          <br></br>
          <li>
            <strong>TailwindCSS</strong> - Module CSS ile beraber kullandığım,
            hızlı geliştirmeler yaparken tercih ediyorum.
          </li>
        </ul>
        <br></br>
        <h2 className="headline mb-4 mt-12 text-4xl">Hobi ve ilgi alanlarım</h2>
        <p className="mb-6">
          Felsefe, tarih ve psikoloji kitapları okurum. Düzenli spor yapar ve
          satranç oynarım. Bilim kurgu türünde çoğu içeriği severek takip
          ederim. House/techno türünde müzik dinlemeyi severim.
        </p>
        <h2 className="headline mb-6 mt-12 text-4xl">Deneyimler</h2>

        <WorkExperience jobs={mockJobs} />
        <h2 className="headline mb-6 mt-12 text-4xl">Eğitim</h2>
        <Education education={[mockSchool]} />
        <section id="cv-download">
          <h2 className="headline mb-4 mt-12 text-4xl">Daha fazla detay</h2>

          <p>
            Buraya kadar okuduğunuz için teşekkürler. Daha fazla bilgi ve detay
            için iletişime geçebilirsiniz.
          </p>
          <br></br>
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

          <div className="mt-8 flex items-baseline justify-start gap-6">
            <Button
              href="https://drive.google.com/file/d/1W5Uk6wV6ouJgYhx9BoIONkvJLHc_JWoM/view?usp=drivesdk"
              target="_blank"
              download={true}
              className="group flex gap-2 whitespace-nowrap"
            >
              <IconDownload />
              CV
            </Button>
          </div>
        </section>
      </Container>
    </AnimatePage>
  )
}

export default AboutPage
