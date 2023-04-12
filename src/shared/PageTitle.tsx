import React from 'react'

type Props = {
    children: React.ReactNode
}

const PageTitle = ({children}: Props) => {
  return (
    <h1 className='basis-3/5 font-monserrat text-3xl font-bold  mb-10 mt-10'>{children}</h1>
  )
}

export default PageTitle