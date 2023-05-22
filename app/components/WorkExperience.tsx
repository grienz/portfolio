import { Job } from '@components/Job'

import type { Job as JobType } from '@types'
import classNames from 'classnames'

export interface WorkExperienceProps {
  jobs: JobType[]
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
  const Spacer = () => <div className="w-12 shrink-0 grow-0 md:w-1/6" />

  return (
    <div className="relative -mx-4 flex w-[calc(%100+2rem)] snap-x snap-center gap-6 overflow-hidden overflow-x-auto pb-14 lg:mx-0 lg:w-full">
      <Spacer />
      {jobs.map(({ company, jobTitle, fromDate, toDate, skills }) => (
        <div
          className={classNames(
            'flex w-4/5 shrink-0 transform snap-center transition-all md:w-3/4 lg:w-1/3'
          )}
          key={`${company} ${jobTitle}`}
        >
          <Job
            company={company}
            jobTitle={jobTitle}
            fromDate={fromDate}
            toDate={toDate}
            skills={skills}
          ></Job>
        </div>
      ))}
      <Spacer />
    </div>
  )
}

export { WorkExperience }
