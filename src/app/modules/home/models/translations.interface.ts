import { ContactLink } from './contact-link.inteface';
import { Section } from './section.interface';
import { Language } from './language.interface';
import { Work } from './work.interface';
import { Project } from './project.interface';

export namespace Translations {
  export interface User {
    name: string;
    position: string;
  }

  export interface Objective {
    title: string;
    description: string;
  }

  export type Contact = Section<ContactLink>;
  export type Languages = Section<Language>;
  export type Hobbies = Section<string>;
  export type Skills = Section<string>;
  export type AdditionalSkills = Section<string>;
  export type Programs = Section<string>;
  export type Experience = Section<Work>;
  export type Projects = Section<Project>;

  export interface Sections {
    user: User;
    objective: Objective;
    contact: Contact;
    languages: Languages;
    hobbies: Hobbies;
    skills: Skills;
    additionalSkills: AdditionalSkills;
    programs: Programs;
    experience: Experience;
    projects: Projects;
  }

  export interface Data {
    contact: Contact['data'];
    languages: Languages['data'];
    hobbies: Hobbies['data'];
    skills: Skills['data'];
    additionalSkills: AdditionalSkills['data'];
    programs: Programs['data'];
    experience: Experience['data'];
    projects: Projects['data'];
  }
}
