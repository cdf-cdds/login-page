import Image from 'next/image'
import { Inter } from 'next/font/google'
/* import LoginBtn from '/components/login-btn' */
import Dashboard from './dashboard'
import DashboardBtn from '@/components/dashboard-btn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <DashboardBtn />
    </>
  )
}
