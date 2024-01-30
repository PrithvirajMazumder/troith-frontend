import { gql } from '@/__generated__'

export const InvoiceQueries = {
  allByCompanyId: gql(`query
  GetInvoices ($companyId: String!) {
      invoices(companyId: $companyId){
          id
          date
          status
          party{
              name
              id
              gstin
              addressLine1
              state
              zipCode
              city
          }
          invoiceItems{
              quantity
              price
              item{
                  name
                  id
                  hsn
                  tax{
                      cgst
                      sgst
                  }
                  uom{
                      abbreviation
                      name
                  }
              }
          }
          no
          vehicleNumber
          tax {
              cgst
              sgst
          }
          bank{
              id
              accountNumber
              branch
              name
              ifsc
              user {
                  id
              }
          }
      }
  }`)
} as const
