'use client'

import { useState } from 'react'
import CardModal from '@/components/CardModal'
import data from '@/common/data'
import { ICard } from '@/common/interfaces'
import './styles.sass'

export default function Design() {
  const [selectedCard, setSelectedCard] = useState<ICard | null>(null)

  return (
    <>
      <main className='info-page design'>
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
        <div className='info-page__cards'>
          {data.archCards.map(el => (
            <div
              key={el.name}
              className='info-page__card'
              onClick={() => setSelectedCard(el)}
            ></div>
          ))}
        </div>
      </main>
      <CardModal card={selectedCard} handleClose={() => setSelectedCard(null)} />
    </>
  )
}
