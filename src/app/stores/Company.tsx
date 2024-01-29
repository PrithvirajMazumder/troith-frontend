'use client'
import { Company as CompanyType } from '@/generated/graphql'
import { create } from 'zustand'
import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { useUserStore } from '@/app/stores/User'
import { useSuspenseQuery } from '@apollo/client'
import { CompanyQueries } from '@/app/companies/queries'

type Company = Omit<CompanyType, 'bank' | 'user'>
const createStore = (companies: Company[]) =>
  create<{
    companies: Company[]
    setCompanies: (company: Company[]) => void
  }>((set) => ({
    companies,
    setCompanies(companies) {
      set({ companies })
    }
  }))

const CompanyContext = createContext<ReturnType<typeof createStore> | null>(null)

export const useCompanyStore = () => {
  if (!CompanyContext) throw new Error('useCompanyStore must be used within a CompanyProvider')
  return useContext(CompanyContext)!
}

export const CompanyProvider = ({ children }: PropsWithChildren) => {
  const userStore = useUserStore()
  const { data: companyData } = useSuspenseQuery(CompanyQueries.allByUserId, {
    variables: { userId: userStore()?.user?.id }
  })
  const [store] = useState(() => createStore(companyData?.companies))

  return <CompanyContext.Provider value={store}>{children}</CompanyContext.Provider>
}
