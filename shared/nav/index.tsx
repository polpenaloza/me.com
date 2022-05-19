import Link from 'next/link'

interface iNavBar {
  urls: Array<{ url: string; label: string }>
}

export const NavBar = ({ urls }: iNavBar) => {
  return (
    <nav className='w-full'>
      {urls.map(({ url, label }) => {
        return (
          <div className='text-xl font-bold underline'>
            <Link passHref href={url}>
              {label}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}
