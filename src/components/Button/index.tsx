import { FC } from 'react'
import './styles.sass'

interface IProps {
  text: string
  handleClick: () => void
}

const Button: FC<IProps> = ({ text, handleClick }) => {
  return (
    <button className='button' onClick={handleClick}>
      {text}
      <div className='button__horizontal' />
      <div className='button__vertical' />
    </button>
  )
}

export default Button
