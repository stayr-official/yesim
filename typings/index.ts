export type GetAuthorizationToken = {
  password: string;
  login: string;
  secondKey: string;
};

export type GetAuthorizationTokenResponse = {
  api_key: string;
};

export type AddNewUser = {
  api_key: string;
};

export type AddNewUserResponse = {
  userId: string;
};

export type GetUserInformation = Partial<Pick<AddNewUser, "api_key">> & Pick<AddNewUserResponse, "userId">;

export type YesimUser = {
  id: string;
  balance: number;
  created_at: string;
  available_data_mb: string;
  counrty: string; // seems they made a mistake with key name. Should be 'country'
  counrty_code: string;
};

export type QrInfo = {
  id: string;
  qr_decoded: string;
  imsi: string;
  iccid: string;
};

export type ListUsersRequest = Partial<Pick<AddNewUser, "api_key">> & {
  page: number | string;
  page_limit: number | string;
};

export type TopUpBalance = GetUserInformation & {
  amount: number;
};

export type AccountInformation = {
  id: string;
  name: string;
  balance: string;
  currency: string;
  phone_number: string;
  reg_num: string;
  email: string;
  country: string;
  state: string;
  city: string;
  street: string;
  zip: string;
  vat: string;
  building_number: string;
  office_number: string;
  qr_cost: string;
  legal_address: string;
  totalPeople: string;
  activeQr: string;
};


export interface Yesim {
password: string;
login: string;
secondKey: string;
}