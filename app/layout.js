import './globals.css'
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';

export const metadata = {
  title: 'Finance Manager',
  description: 'Help you manage your finances',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex h-screen w-full justify-center items-center'>
        <SideNav />
        <div className='flex flex-col h-screen w-full justify-center items-center'>
          <TopNav />
          {children}
        </div>
      </body>
    </html>
  )
}
