import dynamic from 'next/dynamic'
import React from 'react'
import Frame from '../components/frame';

const StartMenu = dynamic(() => import('../components/start'), {
  ssr: false
})

export default () => {
  return (
    <div>
      <Frame>
        <StartMenu />
      </Frame>
    </div>
  )
}