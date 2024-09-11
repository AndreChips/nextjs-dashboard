import React from 'react'
// import CustomersTable from '@/app/ui/customers/table'
import { lusitana } from '@/app/ui/fonts'
// import { fetchCustomers } from '@/app/lib/data'

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <CustomersTable customers={customers} /> */}
      </div>
    </div>
  )
}
