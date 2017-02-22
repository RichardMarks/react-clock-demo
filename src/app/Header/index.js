import React from 'react'

import './index.css'

export default function Header () {
  const url = 'https://github.com/RichardMarks/react-clock-demo'
  const src = 'https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67'

  return (
    <header className='header'>
      <h1 className='header__text'>React Clock Demo</h1>
      <a href={url}>
        <img
          className='ribbon'
          src={src}
          alt='Fork me on GitHub'
          data-canonical-src='https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png' />
      </a>
    </header>
  )
}
