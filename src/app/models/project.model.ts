import { PlatfromType } from "../enum/platform.enum";

export interface ProjectModel {
  name: string;
  description: string;
  imagePath: Array<string>;
  skills: Array<string>;
  repositoryLink: string;
  platform: PlatfromType;
}
