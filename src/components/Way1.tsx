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
  emergencyContacts: any[];
  address: Address;
};

type Teams = {
  name: string;
  id: string;
  creationTimestamp: string;
  isLt: boolean;
  isProject: boolean;
  isPrivateTeam: boolean;
  users: EosUserList[];
  companies: Companies[];
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
  emergencyContacts?: any[];
  userTeam: any[];
  teams?: Teams[];
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

type ChildComponentProps = {
  data: ParentData[];
};

export const Way1 = ({ data }: ChildComponentProps) => {
  return <div>{data[0].childSeats[0].id}</div>;
};
