import { ExperienceModel } from "../models/experience.model";

export const ExperienceList: Array<ExperienceModel> = [
  {
    role: 'Software Developer Internship',
    company: 'BUILK ONE GROUP',
    startDate: 'June 2022',
    endDate: 'August 2022',
    description: `Developed web application which is the backoffice of the product
      for admins to manage users, organizations, reference codes, KPI values, and so on.`,
    skill: [
      'ASP.NET Core', 'Angular', 'C#', 'TypeScript', 'SCSS'
    ]
  },
  {
    role: 'Freelance Web development',
    company: 'Fastwork platform',
    startDate: 'June 2021',
    endDate: 'March 2022',
    description: 'Build Responsive website from customer graphic design, e.g. Figma, Zeplin, Adobe XD, etc.',
    skill: [
      'React', 'Angular', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Next.js'
    ]
  }
]
