import './styles.sass'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className='footer'>
      <p>© 2006–{year} Архитектурное бюро Архей</p>
    </div>
  )
}
