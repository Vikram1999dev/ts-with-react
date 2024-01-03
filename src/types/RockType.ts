import { Companies, EosUserList, Teams } from './CommonType';

type Rocks = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  originalDueDate: string;
  isDepartmentalRock: boolean;
  isCompanyRock: boolean;
  isArchived: boolean;
  isCompleted: boolean;
  status: string;
  user: EosUserList;
  company: Companies;
  teams: Teams[];
};

export type ParentRockObject = {
  id: string;
  firstName: string;
  lastName: string;
  active: boolean;
  teams: {
    name: string;
    id: string;
    isLt: boolean;
    isProject: boolean;
    isPrivateTeam: boolean;
  };
  rocks: Rocks[];
};
