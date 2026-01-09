import Link from 'next/link'
import Image from 'next/image'
import './styles.sass'

export default function Header() {
  return (
    <div className='header'>
      <Link href='/'>
        <div className='header__logo'>
          <Image src='/logo.svg' alt='logo' width={40} height={30} priority />
          <h1>архей</h1>
        </div>
      </Link>
      <div className='header__container'>
        <Link href='/about'>
          <span>о компании</span>
        </Link>
        <Link href='/contacts'>
          <span>контакты</span>
        </Link>
      </div>
    </div>
  )
}
