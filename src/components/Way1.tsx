interface Address {
  id: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  state: string;
}

interface StrengthFinder {
  id: string;
  strengths: string[];
  weakness: string[];
}

interface Role {
  id: string;
  roleCode: string;
  roleName: string;
}

interface EmailAddresses {
  id: string;
  emailAddress: string;
  emailType: string;
}

interface Companies {
  id: string;
  companyName: string;
  industry: string;
  employeeRange: string;
}

interface AccountabilitiesList {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
}

interface AttachmentsList {
  id: string;
  uploaded: boolean;
  fileName: string;
  uploadUrl: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
}

interface AdditionalInfo {
  id: string;
  strengthFinder: StrengthFinder;
  emergencyContacts: any[];
  address: Address;
}

interface Teams {
  name: string;
  id: string;
  creationTimestamp: string;
  isLt: boolean;
  isProject: boolean;
  isPrivateTeam: boolean;
  users: EosUserList[];
  companies: Companies[];
}

interface EosUserList {
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
}

interface ChildSeats {
  id: string;
  name: string;
  visionary: boolean;
  company: Companies;
  parent_id?: string;
  childSeats: ChildSeats[];
  eosUserList: EosUserList[];
  accountabilitiesList: AccountabilitiesList[];
  attachmentsList: AttachmentsList[];
}

type ParentData = ChildSeats;

interface ChildComponentProps {
  data: ParentData[];
}

export const Way1 = ({ data }: ChildComponentProps) => {
  return <div>{data[0].childSeats[0].id}</div>;
};
