/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Bank = {
  __typename?: 'Bank';
  accountNumber: Scalars['Int']['output'];
  branch: Scalars['String']['output'];
  id: Scalars['String']['output'];
  ifsc: Scalars['String']['output'];
  name: Scalars['String']['output'];
  user: User;
};

export type Challan = {
  __typename?: 'Challan';
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  bank: Bank;
  city: Scalars['String']['output'];
  gstin: Scalars['String']['output'];
  id: Scalars['String']['output'];
  legalName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  state: Scalars['String']['output'];
  totalGrossChallanAmount?: Maybe<Scalars['Int']['output']>;
  totalGrossInvoiceAmount?: Maybe<Scalars['Int']['output']>;
  totalNetChallanAmount?: Maybe<Scalars['Int']['output']>;
  totalNetInvoiceAmount?: Maybe<Scalars['Int']['output']>;
  user: User;
  zipCode: Scalars['Float']['output'];
};

export type CreateBankInput = {
  accountNumber: Scalars['Int']['input'];
  branch: Scalars['String']['input'];
  ifsc: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateChallanInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateCompanyInput = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  bankId: Scalars['String']['input'];
  city: Scalars['String']['input'];
  gstin: Scalars['String']['input'];
  legalName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  state: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  zipCode: Scalars['Float']['input'];
};

export type CreateInvoiceInput = {
  bankId: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
  invoiceItems: Array<CreateInvoiceItemInput>;
  no: Scalars['String']['input'];
  partyId: Scalars['String']['input'];
  taxId: Scalars['String']['input'];
  vehicleNumber: Scalars['String']['input'];
};

export type CreateInvoiceItemInput = {
  itemId: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type CreateItemInput = {
  companyId: Scalars['String']['input'];
  hsn?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  taxId: Scalars['String']['input'];
  uomId: Scalars['String']['input'];
};

export type CreatePartyInput = {
  addressLine1: Scalars['String']['input'];
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
  gstin: Scalars['String']['input'];
  name: Scalars['String']['input'];
  partyItemIds: Array<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  zipCode: Scalars['Int']['input'];
};

export type CreateTaxInput = {
  cgst: Scalars['Int']['input'];
  sgst: Scalars['Int']['input'];
};

export type CreateUomInput = {
  abbreviation: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['Int']['input']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  bank: Bank;
  company: Company;
  id: Scalars['String']['output'];
  invoiceItems: Array<InvoiceItem>;
  no: Scalars['String']['output'];
  party: Party;
  tax: Tax;
  vehicleNumber: Scalars['String']['output'];
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  item: Item;
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type Item = {
  __typename?: 'Item';
  company: Company;
  hsn?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tax: Tax;
  uom: Uom;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBank: Bank;
  createChallan: Challan;
  createCompany: Company;
  createInvoice: Invoice;
  createItem: Item;
  createParty: Party;
  createTax: Tax;
  createUom: Uom;
  createUser: User;
  removeBank: Bank;
  removeChallan: Challan;
  removeCompany: Company;
  removeInvoice: Invoice;
  removeItem: Item;
  removeParty: Party;
  removeTax: Tax;
  removeUom: Uom;
  removeUser: User;
  updateBank: Bank;
  updateChallan: Challan;
  updateCompany: Company;
  updateInvoice: Invoice;
  updateItem: Item;
  updateParty: Party;
  updateTax: Tax;
  updateUom: Uom;
  updateUser: User;
};


export type MutationCreateBankArgs = {
  createBankInput: CreateBankInput;
};


export type MutationCreateChallanArgs = {
  createChallanInput: CreateChallanInput;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateInvoiceArgs = {
  createInvoiceInput: CreateInvoiceInput;
};


export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput;
};


export type MutationCreatePartyArgs = {
  createPartyInput: CreatePartyInput;
};


export type MutationCreateTaxArgs = {
  createTaxInput: CreateTaxInput;
};


export type MutationCreateUomArgs = {
  createUomInput: CreateUomInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveBankArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveChallanArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCompanyArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveItemArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemovePartyArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveTaxArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUomArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateBankArgs = {
  updateBankInput: UpdateBankInput;
};


export type MutationUpdateChallanArgs = {
  updateChallanInput: UpdateChallanInput;
};


export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
};


export type MutationUpdateInvoiceArgs = {
  updateInvoiceInput: UpdateInvoiceInput;
};


export type MutationUpdateItemArgs = {
  updateItemInput: UpdateItemInput;
};


export type MutationUpdatePartyArgs = {
  updatePartyInput: UpdatePartyInput;
};


export type MutationUpdateTaxArgs = {
  updateTaxInput: UpdateTaxInput;
};


export type MutationUpdateUomArgs = {
  updateUomInput: UpdateUomInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Party = {
  __typename?: 'Party';
  addressLine1: Scalars['String']['output'];
  addressLine2?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  company: Company;
  gstin: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  partyItemIds: Array<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  zipCode: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  bank: Bank;
  banks: Array<Bank>;
  challan: Challan;
  challans: Array<Challan>;
  companies: Array<Company>;
  company: Company;
  companyUoms: Array<Uom>;
  invoice: Invoice;
  invoices: Array<Invoice>;
  item: Item;
  items: Array<Item>;
  parties: Array<Party>;
  party: Party;
  tax: Tax;
  taxes: Array<Tax>;
  uom: Uom;
  uoms: Array<Uom>;
  user: User;
  users: Array<User>;
};


export type QueryBankArgs = {
  id: Scalars['String']['input'];
};


export type QueryChallanArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCompaniesArgs = {
  userId: Scalars['String']['input'];
};


export type QueryCompanyArgs = {
  id: Scalars['String']['input'];
};


export type QueryCompanyUomsArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryInvoiceArgs = {
  id: Scalars['String']['input'];
};


export type QueryInvoicesArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryItemArgs = {
  id: Scalars['String']['input'];
};


export type QueryItemsArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryPartiesArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryPartyArgs = {
  id: Scalars['String']['input'];
};


export type QueryTaxArgs = {
  id: Scalars['String']['input'];
};


export type QueryUomArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Tax = {
  __typename?: 'Tax';
  cgst: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  sgst: Scalars['Int']['output'];
};

export type Uom = {
  __typename?: 'Uom';
  abbreviation: Scalars['String']['output'];
  company: Company;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type UpdateBankInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ifsc?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChallanInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateCompanyInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  bankId?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  gstin?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  legalName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  totalGrossChallanAmount?: InputMaybe<Scalars['Int']['input']>;
  totalGrossInvoiceAmount?: InputMaybe<Scalars['Int']['input']>;
  totalNetChallanAmount?: InputMaybe<Scalars['Int']['input']>;
  totalNetInvoiceAmount?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateInvoiceInput = {
  bankId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  invoiceItems?: InputMaybe<Array<CreateInvoiceItemInput>>;
  no?: InputMaybe<Scalars['String']['input']>;
  partyId?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  vehicleNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateItemInput = {
  hsn?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  taxId?: InputMaybe<Scalars['String']['input']>;
  uomId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePartyInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  gstin?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  partyItemIds?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTaxInput = {
  cgst?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  sgst?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUomInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
};

export type GetInvoicesQueryVariables = Exact<{
  companyId: Scalars['String']['input'];
}>;


export type GetInvoicesQuery = { __typename?: 'Query', invoices: Array<{ __typename?: 'Invoice', id: string, invoiceItems: Array<{ __typename?: 'InvoiceItem', quantity: number, price: number, item: { __typename?: 'Item', name: string, id: string, hsn?: number | null } }>, party: { __typename?: 'Party', name: string, id: string, gstin: string } }> };

export type GetCompaniesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string, legalName: string, city: string, state: string, addressLine1: string, addressLine2?: string | null, gstin: string, zipCode: number }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', name?: string | null, id: string } };


export const GetInvoicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInvoices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invoices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"invoiceItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hsn"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gstin"}}]}}]}}]}}]} as unknown as DocumentNode<GetInvoicesQuery, GetInvoicesQueryVariables>;
export const GetCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"legalName"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"gstin"}},{"kind":"Field","name":{"kind":"Name","value":"zipCode"}}]}}]}}]} as unknown as DocumentNode<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;