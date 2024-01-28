import React from 'react'
import { ApolloWrapper } from '@/lib/graphqlClient'
import { Drawer } from '@/components/Drawer'
import '@/app/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto">
          <Drawer>
            <ApolloWrapper>{children}</ApolloWrapper>
          </Drawer>
        </div>
      </body>
    </html>
  )
}
