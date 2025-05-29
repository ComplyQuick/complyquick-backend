export interface ContactDetails {
  name: string;
  email: string;
  phone?: string;
}

export interface TenantDetails {
  hrManager?: ContactDetails;
  ceo?: ContactDetails;
  cto?: ContactDetails;
  [key: string]: ContactDetails | undefined;
} 