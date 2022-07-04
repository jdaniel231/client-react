import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdDashboardCustomize } from 'react-icons/md'

export const links = [
  { 
    path: '',
    name: 'dashboard',
    icon: <MdDashboardCustomize />,
  },
  {
    path: 'clients',
    name: 'Clientes',
    icon: <AiOutlineUser />
  }
]