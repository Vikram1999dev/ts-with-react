import {
  AccountabilitiesList,
  AttachmentsList,
  Companies,
  EosUserList,
} from './CommonType';

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

export type ParentData = ChildSeats;
