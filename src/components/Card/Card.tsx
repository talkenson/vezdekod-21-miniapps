import React, { useEffect, useState } from 'react'
import styles from './Card.module.scss'
import classNames from 'classnames'

const vals = ['red', 'green', 'blue', 'yellow']

const Card = ({
  title,
  number,
  variant,
}: {
  title: string
  number: number
  variant?: string
}) => {

  return (
    <div
      className={`relative m-4 mx-auto rounded-2xl card bg-gradient-to-tl 
      cursor-pointer select-none hover:shadow ${styles.card} ${styles[vals[number]]} ${
        styles[variant || 'extended']
      }`}
    >
      <div
        className={`absolute text-2xl ${
          variant !== 'mini' ? 'top-20 left-4' : 'top-4 left-4'
        }`}
      >
        {title}
      </div>
    </div>
  )
}

export default Card
