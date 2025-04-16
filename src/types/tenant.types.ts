export interface ContactDetails {
  name: string;
  email: string;
  phone?: string;
}

export interface TenantDetails {
  presidingOfficer?: ContactDetails;
  hrManager?: ContactDetails;
  ceo?: ContactDetails;
  cto?: ContactDetails;
  cco?: ContactDetails;
  cro?: ContactDetails;
  legalOfficer?: ContactDetails;
  [key: string]: ContactDetails | undefined;
} 