type Address = {
  id: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  state: string;
};

type StrengthFinder = {
  id: string;
  strengths: string[];
  weakness: string[];
};

type Role = {
  id: string;
  roleCode: string;
  roleName: string;
};

type EmailAddresses = {
  id: string;
  emailAddress: string;
  emailType: string;
};

type Companies = {
  id: string;
  companyName: string;
  industry: string;
  employeeRange: string;
};

type AccountabilitiesList = {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
};

type AttachmentsList = {
  id: string;
  uploaded: boolean;
  fileName: string;
  uploadUrl: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
};

type AdditionalInfo = {
  id: string;
  strengthFinder: StrengthFinder;
  emergencyContacts: unknown[];
  address: Address;
};

type Teams = {
  name: string;
  id: string;
  creationTimestamp: string;
  isLt: boolean;
  isProject: boolean;
  isPrivateTeam: boolean;
  users?: EosUserList[];
  companies?: Companies[];
  attachments?: AttachmentsList[];
};

type EosUserList = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio?: string;
  active: boolean;
  isDeleted: boolean;
  isInvited?: boolean;
  profileUrl?: string;
  emailAddresses: EmailAddresses[];
  phoneNumbers: string[];
  role: Role;
  additionalInfo?: AdditionalInfo;
  emergencyContacts?: unknown[];
  userTeam: unknown[];
  teams?: Teams[];
};

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

type ParentRockObject = {
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

type ChildSeats = {
  id: string;
  name: string;
  visionary: boolean;
  company: Companies;
  parent_id?: string;
  childSeats: ChildSeats[];
  eosUserList: EosUserList[];
  accountabilitiesList: AccountabilitiesList[];
  attachmentsList: AttachmentsList[];
};

type ParentData = ChildSeats;

type MainProps = {
  data: ParentData[];
  milestones: ParentRockObject[];
};
export const Way1 = ({ data, milestones }: MainProps) => {
  return (
    <div>
      <h1>{data[0].childSeats[0].id}</h1>
      <h1>{milestones[0].rocks[7].title}</h1>
    </div>
  );
};
