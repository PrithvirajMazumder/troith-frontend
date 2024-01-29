'use client'
import { create } from 'zustand'
import { User } from '@/generated/graphql'
import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { useSuspenseQuery } from '@apollo/client'
import { UserQueries } from '@/app/users/queries/UserQueries'

const createStore = (user: User) =>
  create<{
    user: User
    setUser: (user: User) => void
  }>((set) => ({
    user,
    setUser(user: User) {
      set({ user })
    }
  }))

const UserContext = createContext<ReturnType<typeof createStore> | null>(null)

export const useUserStore = () => {
  if (!UserContext) throw new Error('useUserStore must be used within a UserProvider')
  return useContext(UserContext)!
}

const UserProvider = ({ children }: PropsWithChildren) => {
  const { data: userData } = useSuspenseQuery(UserQueries.detail, {
    variables: { id: '658d9270b7894c3d678c37af' }
  })
  const [store] = useState(() => createStore(userData?.user))

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>
}

export default UserProvider
