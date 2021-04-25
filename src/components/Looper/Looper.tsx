import React, { useEffect, useState } from 'react'
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
  Progress,
  Button,
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import bridge from '@vkontakte/vk-bridge'

const Looper = ({ goBack }: { goBack: () => any }) => {
  const ticks = 8
  const [tick, setTick] = useState<number>(0)
  const [active, setActive] = useState<boolean>(false)
  const [tickMap, setTickMap] = useState<boolean[]>([])

  useEffect(() => {
    console.log(tick, tickMap[tick])
    if (tickMap[tick]) {
      console.log('1')
      bridge.send('VKWebAppFlashSetLevel', { level: 1.0 })
    } else {
      console.log('0')
      bridge.send('VKWebAppFlashSetLevel', { level: 0 })
    }
    active && setTimeout(() => doTick(), 1000)
  }, [tick, active, ticks])

  useEffect(() => {
    setTickMap(Array(ticks).fill(false))
    console.log(tick)
  }, [ticks])

  const doTick = async () => {
    active && setTick((t) => (t + 1) % ticks)
  }

  const reset = () => {
    setTick(0)
    setActive(false)
    bridge.send('VKWebAppFlashSetLevel', { level: 0 })
  }

  return (
    <>
      <PanelHeader
        separator={false}
        left={<PanelHeaderBack onClick={() => goBack()} />}
      >
        LightLooper
      </PanelHeader>

      <Group>
        <Progress value={((tick + 1) / ticks) * 100} />
        <Div>
          <Button
            mode={!active ? 'commerce' : 'destructive'}
            style={{ width: 'calc(70% - 40px)' }}
            onClick={() => setActive((s) => !s)}
            size={'m'}
          >
            {!active ? 'Play!' : 'Stop'}
          </Button>
          <Button
            mode={'secondary'}
            style={{ width: 'calc(30% - 40px)', marginLeft: '16px' }}
            onClick={() => reset()}
            size={'m'}
          >
            Reset
          </Button>
        </Div>
        <Div className={'flex flex-row items-center'}>
          {tickMap.map((v, i) => (
            <Button
              key={i}
              mode={tick === i ? 'tertiary' : v ? 'commerce' : 'secondary'}
              onClick={() =>
                setTickMap((m) => m.map((v, ind) => (i === ind ? !v : v)))
              }
              style={{ marginLeft: '4px', marginRight: '4px' }}
              size={'s'}
            >
              {!v ? '-' : '+'}
            </Button>
          ))}
        </Div>
      </Group>
    </>
  )
}

export default Looper
