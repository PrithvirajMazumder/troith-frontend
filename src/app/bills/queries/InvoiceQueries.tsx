import { gql } from '@/__generated__'

export const InvoiceQueries = {
  allByCompanyId: gql(`query
  GetInvoices ($companyId: String!) {
      invoices(companyId: $companyId){
          id
          invoiceItems{
              quantity
              price
              item{
                  name
                  id
                  hsn
              }
          }
          party{
              name
              id
              gstin
          }
      }
  }`)
} as const
