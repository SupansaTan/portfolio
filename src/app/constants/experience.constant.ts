import { ExperienceModel } from "../models/experience.model";

export const ExperienceList: Array<ExperienceModel> = [
  {
    role: 'Software Developer',
    company: 'Sirisoft Public Company Limited',
    startDate: 'August 2023',
    endDate: 'Present',
    description:
      `- Setup a Jenkins pipeline for Angular linting (ESLint), unit testing (Jest), and end-to-end testing.
      - Configure ESLint, Jest, and Cypress with Cucumber ni frontend repositories.
      - Enhance the Jenkins pipeline to minimize dependency installation time and address issues causing pipeline failures.
      - Setup Gitlab webhooks to trigger the Jenkins pipeline build on push event.
      - Provide assistance to the team regarding deployment, unit testing, end-to-end testing, and frontend technical issues.
      - Conduct a knowledge-sharing session on writing unit tests using Jest and version tagging ni projects.
      - Lead of the frontend team and restructured frontend code for increased generality.
      - Implement modules for managing user payments, officer management, and registration.`,
    skill: [
      'Angular', 'TypeScript', 'Jenkins', 'Docker', 'Kubernetes', 'NestJS'
    ]
  },
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
