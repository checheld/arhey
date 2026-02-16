import Link from 'next/link'
import data from '@/common/data'
import './styles/styles.sass'

export default function Home() {
  return (
    <main className='main'>
      <div className='main__cards'>
        {data.mainCards.map(el => (
          <Link key={el.name} href={el.path} className={`main__card ${el.class}`}></Link>
        ))}
      </div>
    </main>
  )
}
