import { ExperienceModel } from "../models/experience.model";

export const ExperienceList: Array<ExperienceModel> = [
  {
    role: 'Software Developer',
    company: 'Sirisoft Public Company Limited',
    startDate: 'August 2023',
    endDate: 'February 2024',
    description:
      `- Setup a Jenkins pipeline for Angular linting (ESLint), unit testing (Jest), and end-to-end testing (Cypress with Cucumber).
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
    description:
      `- Developed and implemented website functionality, including adding field to be able to fill in user reference code, filtering and managing users, reference codes, and KPI values.
      - Collaborated with senior developers, business analyst and project manager to ensure that websites are developed according to best practices and meet project requirements.
      - Worked on both frontend and backend.`,
    skill: [
      'ASP.NET Core', 'Angular', 'C#', 'TypeScript', 'SCSS'
    ]
  },
  {
    role: 'Freelance Web development',
    company: 'Fastwork platform',
    startDate: 'June 2021',
    endDate: 'March 2022',
    description:
      `Completed 14 freelance projects with build responsive and animate websites based on customer graphic designs from design tools that meet project requirements.`,
    skill: [
      'React', 'Angular', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'Next.js'
    ]
  }
]
