import { PlatfromType } from "../enum/platform.enum";
import { ProjectModel } from "../models/project.model";

export const ProjectList: Array<ProjectModel> = [
  {
    name: 'KinMai',
    description:
      `Web application for finding and reviewing restaurants, a mini-game for the user who is unsure
      what to eat and dashboard for restaurant owner to get feedback their restaurant`,
    imagePath: [],
    skills: [
      'Angular', 'ASP.NET Core', 'C#', 'TypeScript', 'SCSS', 'Cypress', 'Cucumber',
      'xUnit.net', 'AWS S3', 'AWS RDS (PostgreSQL)', 'AWS Cognito', 'AWS SES'
    ],
    repositoryLink: 'https://github.com/SupansaTan/kin-mai-web',
    platform: PlatfromType.WebApp
  },
  {
    name: 'Regulation Assessment',
    description:
      `Mobile application for assessing legal regulations, assigning work to appropriate departments, and
      monitoring legal compliance.`,
    imagePath: [],
    skills: [
      'React Native', 'ASP.NET Core', 'C#', 'TypeScript', 'AWS RDS (PostgreSQL)'
    ],
    repositoryLink: 'https://github.com/SupansaTan/RA-mobile',
    platform: PlatfromType.MobileApp
  },
  {
    name: 'Time Attendance',
    description: `Web application for manager to manage employee's shift and OT plan and a dashboard for tracking amount of employee in their department.`,
    imagePath: [],
    skills: [
      'Angular', 'Django REST', 'TypeScript', 'SCSS', 'Cypress', 'Cucumber'
    ],
    repositoryLink: 'https://github.com/SupansaTan/time-attendance-web',
    platform: PlatfromType.WebApp
  },
  {
    name: 'Rotten Potatoes',
    description: 'Web apllication for finding movie in TMDb with filtering, and rating movie by potatoes rate.',
    imagePath: [],
    skills: [
      'Rails', 'Ruby', 'Haml', 'HTML', 'JavaScript', 'SCSS', 'Cucumber', 'PostgreSQL'
    ],
    repositoryLink: 'https://github.com/SupansaTan/myrottenpotatoes',
    platform: PlatfromType.WebApp
  },
  {
    name: 'Taskky',
    description: 'Mobile application for organizing and planning on tasks.',
    imagePath: [],
    skills: [
      'NativeScipt', 'Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'
    ],
    repositoryLink: 'https://github.com/SupansaTan/To-Do-List',
    platform: PlatfromType.MobileApp
  },
  {
    name: 'LabTrack',
    description:
      `Web application for tracking people who enter laboratories.
      COVID-19 tracker for ECE department at KMUTNB and `,
    imagePath: [],
    skills: [
      'Django', 'Python', 'JavaScript', 'jQuery', 'HTML', 'CSS'
    ],
    repositoryLink: 'https://github.com/SupansaTan/lab_track',
    platform: PlatfromType.WebApp
  }
]
