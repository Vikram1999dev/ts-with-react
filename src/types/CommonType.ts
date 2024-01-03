export type Address = {
  id: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  state: string;
};

export type StrengthFinder = {
  id: string;
  strengths: string[];
  weakness: string[];
};

export type Role = {
  id: string;
  roleCode: string;
  roleName: string;
};

export type EmailAddresses = {
  id: string;
  emailAddress: string;
  emailType: string;
};

export type Companies = {
  id: string;
  companyName: string;
  industry: string;
  employeeRange: string;
};

export type AccountabilitiesList = {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
};

export type AttachmentsList = {
  id: string;
  uploaded: boolean;
  fileName: string;
  uploadUrl: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
};

export type AdditionalInfo = {
  id: string;
  strengthFinder: StrengthFinder;
  emergencyContacts: unknown[];
  address: Address;
};

export type Teams = {
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

export type EosUserList = {
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
