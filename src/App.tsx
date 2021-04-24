import React from 'react'
import './App.css'
import vk_logo from './assets/svg/vk_light.svg'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="mx-auto text-center App">
      <div className="relative mx-auto mt-16 mb-16 flex flex-col justify-center items-center select-none">
        <div className="vezdekod-text text-white z-30 text-6xl font-medium font-light">
          вездекод
        </div>
        <div className="z-10 underliner" />
        <img src={vk_logo} className="absolute vk-logo z-30" />
      </div>
      <div className="description text-white text-left mx-auto text-xl px-6">
        <p className="font-medium">
          В этом году на <code>Вездекоде</code> от ВКонтакте представлены задачи
          аж из 9-ти категорий!
        </p>
        <p className="font-normal mt-4">
          Среди этих категорий встречаются такие особо интересеные как:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12">
          {[
            'VK Mini Apps',
            'Мобильная разработка',
            'Робототехника',
            'Информационная безопасность',
          ].map((v, i) => (
            <Card title={v} number={i} />
          ))}
        </div>
      </div>
      <div className="description text-white text-left mx-auto text-xl px-6">
        <p className="font-medium">
          В этом году на <code>Вездекоде</code> от ВКонтакте представлены задачи
          аж из 9-ти категорий!
        </p>
        <p className="font-normal mt-4">
          Среди этих категорий встречаются и такие интересеные:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12">
          {'РУБИКОН, SmartBear, Senla, Веб-интегратор Максимастер, Scloud.ru, DD Planet, Центр информационных технологий, SafeCafe, GDG Russia, Google Dev. Group'
            .split(',')
            .map((v) => (
              <Card title={v} number={2} variant={'mini'} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
