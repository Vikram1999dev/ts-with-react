type Company = {
  id: string;
  companyName: string;
  industry: string;
  employeeRange: string;
};

type EmailAddress = {
  id: string;
  emailAddress: string;
  emailType: string;
};

type Role = {
  id: string;
  roleCode: string;
  roleName: string;
};

type StrengthFinder = {
  id: string;
  strengths: string[];
  weakness: string[];
};

type Address = {
  id: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  state: string;
};

type AdditionalInfo = {
  id: string;
  strengthFinder: StrengthFinder;
  emergencyContacts: any[]; // You may want to define a type for this too
  address: Address;
};

type User = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  bio: string;
  active: boolean;
  isDeleted: boolean;
  profileUrl: string;
  emailAddresses: EmailAddress[];
  phoneNumbers: string[]; // Assuming phone numbers are strings
  role: Role;
  additionalInfo: AdditionalInfo;
  userTeam: any[]; // You may want to define a type for this too
};

type Accountability = {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
};

type Attachment = {
  id: string;
  uploaded: boolean;
  fileName: string;
  uploadUrl: string;
  createdBy: string;
  lastModifiedBy: string;
  creationTimestamp: string;
};

// Define the main types for the parent data
type Seat = {
  id: string;
  name: string;
  visionary: boolean;
  company: Company;
  parent_id?: string;
  childSeats: Seat[];
  eosUserList: User[];
  accountabilitiesList: Accountability[];
  attachmentsList: Attachment[];
};

// type ParentData = {
//   id: string;
//   name: string;
//   visionary: boolean;
//   company: Company;
//   childSeats: Seat[];
//   eosUserList: User[];
//   accountabilitiesList: Accountability[];
//   attachmentsList: Attachment[];
// };

type ParentData = Seat;

// Use the types as the prop type for the child component
type ChildComponentProps = {
  data: ParentData[];
};

export const Way1 = ({ data }: ChildComponentProps) => {
  return <div>data</div>;
};
