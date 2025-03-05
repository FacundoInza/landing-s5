import React, { Suspense } from 'react'
import LandingClient from './components/landingclient'

const Page = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0B14] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
    </div>}>
      <LandingClient />
    </Suspense>
  )
}

export default Page