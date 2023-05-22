import type { Job } from '@types'

export const mockJobs: Job[] = [
  {
    company: {
      name: 'Freelance',
      logo: '/assets/logo/eva.png',
      url: 'https://evasmartshower.vercel.app/'
    },
    jobTitle: 'Software Developer',
    fromDate: '2022-05',
    toDate: '2022-08',
    skills: ['TypeScript', 'React', 'Next.js'],
    description: ''
  },
  {
    company: {
      name: 'Yaz Stajı',
      logo: '/assets/logo/sanal.png',
      url: 'https://www.sanalnet.com/'
    },
    jobTitle: 'Stajyer',
    fromDate: '2016-06',
    toDate: '2016-09',
    skills: ['HTML', 'CSS', 'JS'],
    description: ''
  }
]
