import React from 'react'
import { ApolloWrapper } from '@/lib/graphqlClient'
import { Drawer } from '@/components/Drawer'
import UserProvider from '@/app/stores/User'
import { CompanyProvider } from '@/app/stores/Company'
import '@/app/globals.css'

export const dynamic = 'force-dynamic'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <Drawer>
            <ApolloWrapper>
              <UserProvider>
                <CompanyProvider>{children}</CompanyProvider>
              </UserProvider>
            </ApolloWrapper>
          </Drawer>
        </div>
      </body>
    </html>
  )
}
