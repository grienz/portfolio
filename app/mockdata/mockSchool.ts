import { mockCompany } from './mockCompany'

import type { Education } from '@types'

export const mockSchool: Education = {
  institution: mockCompany,
  course: 'Uludağ Üniversitesi',
  date: '2024',
  courseContents: ['Bilgisayar Programcılığı', 'Teknik Bilimler']
}
