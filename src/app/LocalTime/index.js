import React, {Component} from 'react'

import './index.css'

export default class LocalTime extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time: new Date()
    }
  }

  componentDidMount () {
    const onTick = () => {
      this.setState({
        time: new Date()
      })
    }
    this.intervalId = setInterval(onTick, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
  }

  render () {
    const { time } = this.state
    const timeFormat = time.toLocaleTimeString()
    return (
      <div className='time'>
        {timeFormat}
      </div>
    )
  }
}
