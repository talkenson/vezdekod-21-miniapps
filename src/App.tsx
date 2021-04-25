import React, { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  Cell,
  PanelHeaderBack,
  Div,
  Text,
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import {
  Icon28BrainOutline,
  Icon28Users3Outline,
  Icon28HorseToyOutline,
  Icon28HeartCircleOutline,
} from '@vkontakte/icons'

const App = () => {
  const { viewWidth } = useAdaptivity()
  const [activePanel, setActivePanel] = useState('main')

  return (
    <>
      <AppRoot>
        <SplitLayout header={<PanelHeader separator={false} />}>
          <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
            <View activePanel={activePanel}>
              <Panel id="main">
                <PanelHeader>
                  <code className="text-2xl">Вездекод</code>
                </PanelHeader>
                <Group
                  header={<Header mode="secondary">Общая информация</Header>}
                >
                  <Div>
                    <Text weight="regular" style={{ marginBottom: 16 }}>
                      Это VK Mini App для <code>Вездекода</code> от ВКонтакте!
                      Оно собрано на VKUI, вау, это реально круто и удобно!
                    </Text>
                  </Div>
                  <Cell
                    expandable
                    before={<Icon28BrainOutline />}
                    onClick={() => setActivePanel('what-is')}
                  >
                    Что такое Вездекод?
                  </Cell>
                  <Cell
                    expandable
                    before={<Icon28HorseToyOutline />}
                    onClick={() => setActivePanel('categories')}
                  >
                    Что по категориям?
                  </Cell>
                  <Cell
                    expandable
                    before={<Icon28Users3Outline />}
                    onClick={() => setActivePanel('partners')}
                  >
                    Как там партнеры?
                  </Cell>
                </Group>
                <Group
                  header={<Header mode="secondary">Кто в команде?</Header>}
                >
                  <Cell
                    before={<Icon28HeartCircleOutline />}
                    onClick={() => setActivePanel('talkiiing')}
                    description={'Команда'}
                  >
                    reportWebVitals.js
                  </Cell>
                </Group>
              </Panel>
              <Panel id="what-is">
                <PanelHeader
                  separator={false}
                  left={
                    <PanelHeaderBack onClick={() => setActivePanel('main')} />
                  }
                >
                  Что это такое?
                </PanelHeader>
                <Group>
                  <Div>
                    <Text
                      weight="semibold"
                      className="text-justify"
                      style={{ marginBottom: 20 }}
                    >
                      Такая штука, как <code>Вездекод</code> от ВКонтакте это
                      одни из самых масштабных соревнований в России!
                    </Text>
                    <Text
                      weight="regular"
                      className="text-justify"
                      style={{ marginBottom: 16 }}
                    >
                      В нем принимает участие огромное количество человек, из
                      совершенно разных областей! От Web-разработки и
                      проектирования API до робототехники и информационной
                      безопасности!
                    </Text>
                  </Div>
                </Group>
              </Panel>
              <Panel id="categories">
                <PanelHeader
                  separator={false}
                  left={
                    <PanelHeaderBack onClick={() => setActivePanel('main')} />
                  }
                >
                  Категории
                </PanelHeader>
                <Group>
                  <Div>
                    <Text weight="regular" style={{ marginBottom: 16 }}>
                      {' '}
                      В этом году на <code>Вездекоде</code> от ВКонтакте
                      представлены задачи аж из 9-ти категорий!
                    </Text>
                    <Text weight="regular" style={{ marginBottom: 16 }}>
                      Среди этих категорий встречаются такие особо интересеные
                      как:
                    </Text>
                  </Div>

                  <div className="w-full w-4 grid grid-cols-1 lg:grid-cols-2">
                    {[
                      'VK Mini Apps',
                      'Мобильная разработка',
                      'Робототехника',
                      'Информационная безопасность',
                    ].map((v, i) => (
                      <Card title={v} number={i} key={i} />
                    ))}
                  </div>
                </Group>
              </Panel>
              <Panel id="partners">
                <PanelHeader
                  separator={false}
                  left={
                    <PanelHeaderBack onClick={() => setActivePanel('main')} />
                  }
                >
                  Партнеры
                </PanelHeader>
                <Group>
                  <Div>
                    <Text weight="regular" style={{ marginBottom: 16 }}>
                      А еще в этом году у <code>Вездекода</code> куча классных
                      партнеров, вот они все слева направо:
                    </Text>
                  </Div>
                  <div className="w-full w-4 grid grid-cols-1 lg:grid-cols-2">
                    {'РУБИКОН, SmartBear, Senla, Веб-интегратор Максимастер, Scloud.ru, DD Planet, Центр информационных технологий, SafeCafe, GDG Russia, Google Dev. Group'
                      .split(',')
                      .map((v, i) => (
                        <Card title={v} number={2} variant={'mini'} key={i} />
                      ))}
                  </div>
                </Group>
              </Panel>
              <Panel id="talkiiing">
                <PanelHeader
                  separator={false}
                  left={
                    <PanelHeaderBack onClick={() => setActivePanel('main')} />
                  }
                >
                  reportWebVitals.js
                </PanelHeader>
                <Group header={<Header mode="tertiary">О команде</Header>}>
                  <Cell description="На базе" onClick={() => window.open('//github.com/talkiiing')}>/talkiiing</Cell>
                </Group>
                <Group header={<Header mode="tertiary">Состав команды</Header>}>
                  <Cell
                    description="@roamiiing"
                    onClick={() => window.open('//t.me/roamiiing')}
                  >
                    Виталий Лёвкин
                  </Cell>
                  <Cell
                    description="@talkenson"
                    onClick={() => window.open('//t.me/talkenson')}
                  >
                    Виталий Шаталов
                  </Cell>
                  <Cell
                    description="@nerlihmax"
                    onClick={() => window.open('//t.me/nerlihmax')}
                  >
                    Максим Нерлих
                  </Cell>
                </Group>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </>
  )
}

export default App
