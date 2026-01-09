'use client'

import { FC, useEffect, useRef } from 'react'
import Button from '../Button'
import { ICard } from '@/common/interfaces'
import './styles.sass'

interface IProps {
  card: ICard | null
  handleClose: () => void
}

const CardModal: FC<IProps> = ({ card, handleClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose()
      }
    }

    if (card) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [card])

  return (
    <div className={`card-modal ${!card && 'hidden'}`}>
      <div ref={modalRef} className='card-modal__container'>
        <p>
          Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
          Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение
          шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается
          при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие
          программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по
          умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много
          веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem
          Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно
          (например, юмористические варианты).
        </p>
        <Button text='закрыть' handleClick={handleClose} />
      </div>
    </div>
  )
}

export default CardModal
