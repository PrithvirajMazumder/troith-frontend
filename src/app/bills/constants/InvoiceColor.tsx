import { invoiceStatus, InvoiceStatus } from '@/constants/invoiceStatus'

export const cardColor = {
  success: 'success',
  primary: 'primary',
  neutral: 'neutral'
} as const
type CardColor = (typeof cardColor)[keyof typeof cardColor]
export const invoiceStatusColorMap: ReadonlyMap<InvoiceStatus, CardColor> = new Map<
  InvoiceStatus,
  CardColor
>([
  [invoiceStatus.paid, cardColor.success],
  [invoiceStatus.draft, cardColor.neutral],
  [invoiceStatus.confirmed, cardColor.primary]
])
