import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdDashboardCustomize, MdOutlineLocalHospital } from 'react-icons/md'

export const routes = [
  { 
    path: '',
    name: 'dashboard',
    icon: <MdDashboardCustomize />,
  },
  {
    path: 'clients',
    name: 'Clientes',
    icon: <AiOutlineUser />
  },
  {
    path: 'query',
    name: 'Consultas',
    icon: <MdOutlineLocalHospital />
  }
]