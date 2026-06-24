import NewInvoicePage from '#/features/fees/components/NewInvoicePage.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/NewInvoicePage')({
  component: NewInvoicePage,
})

