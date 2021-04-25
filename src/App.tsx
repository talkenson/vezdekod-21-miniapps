import React from 'react'
import './App.css'
import vk_logo from './assets/svg/vk_light.svg'
import Card from './components/Card/Card'
import { useHistory } from 'react-router-dom'

const App = () => {
  return (
    <div className="mx-auto text-center App">
      <a href={'https://vk.com/vezdekod'}>
        <div className="relative mx-auto mt-16 mb-16 flex flex-col justify-center items-center select-none cursor-pointer">
          <div className="vezdekod-text text-white z-30 text-6xl font-medium font-light">
            вездекод
          </div>
          <div className="z-10 underliner" />
          <img src={vk_logo} className="absolute vk-logo z-30" />
        </div>
      </a>
      <div className="content mx-auto w-full max-w-lg lg:max-w-5xl">
        <div className="description text-white text-left mx-auto text-xl px-6">
          <p className="font-medium">
            В этом году на <code>Вездекоде</code> от ВКонтакте представлены
            задачи аж из 9-ти категорий!
          </p>
          <p className="font-normal mt-4">
            Среди этих категорий встречаются такие особо интересеные как:
          </p>
          <div className="w-full w-4 grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12">
            {[
              'VK Mini Apps',
              'Мобильная разработка',
              'Робототехника',
              'Информационная безопасность',
            ].map((v, i) => (
              <Card title={v} number={i} key={i} />
            ))}
          </div>
          <p className="font-medium mt-16">
            А еще в этом году у <code>Вездекода</code> куча классных партнеров,
            вот они все слева направо:
          </p>
          <div className="w-full w-4 grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12">
            {'РУБИКОН, SmartBear, Senla, Веб-интегратор Максимастер, Scloud.ru, DD Planet, Центр информационных технологий, SafeCafe, GDG Russia, Google Dev. Group'
              .split(',')
              .map((v, i) => (
                <Card title={v} number={2} variant={'mini'} key={i} />
              ))}
          </div>
        </div>
        <p className="mt-16 text-xl font-bold">
          Хочешь узнать больше о вездекоде?
        </p>
        <p className="font-medium mt-4 mb-16 p-4 underline">
          <a href={'https://vk.com/vezdekod'}>
            Тыкай на надпись в самом верху, или на это предложение, кек
          </a>
        </p>
        <p className="font-light mt-4 mb-8">
          <a href={'https://github.com/talkiiing'}>/talkiiing, 2021</a>
        </p>
      </div>
    </div>
  )
}

export default App
