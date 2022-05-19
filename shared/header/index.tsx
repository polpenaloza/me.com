import { NavBar } from '../nav'

export const Header = () => {
  const navLinks = [
    { url: '/', label: 'Home' },
    { url: '/binary-clock', label: 'Binary Clock' },
  ]
  return (
    <div className='flex h-full flex-col text-center'>
      <h1 className='text-3xl p-5'>Pol Penaloza</h1>
      <NavBar urls={navLinks} />
    </div>
  )
}
