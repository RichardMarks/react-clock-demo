import React from 'react'
import ReactDOM from 'react-dom'

import Header from './app/Header'
import Footer from './app/Footer'
import Content from './app/Content'
import LocalTime from './app/LocalTime'

import './index.css'

class App extends React.Component {
  render () {
    return (
      <div className='app__main-container'>
        <div className='app__header-container'>
          <Header />
        </div>
        <div className='app__content-container'>
          <Content>
            <LocalTime />
          </Content>
        </div>
        <div className='app__footer-container'>
          <Footer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
