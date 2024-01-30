export const invoiceStatus = {
  draft: 'Draft',
  confirmed: 'Confirmed',
  paid: 'Paid'
} as const

export type InvoiceStatus = (typeof invoiceStatus)[keyof typeof invoiceStatus]
