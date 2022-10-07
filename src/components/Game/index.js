import './index.css'
import {Component} from 'react'
import GameImages from '../GameImages'

class Game extends Component {
  state = {count: 0, isClick: false, clickValue: '', rand: 0}

  onclickplayagain = () => {
    this.setState(prv => ({isClick: !prv.isClick}))
  }

  onclickButtonImg = value => {
    const {choicesList, rand} = this.props
    const random = Math.floor(Math.random() * choicesList.length)
    this.setState(prv => ({
      isClick: !prv.isClick,
      clickValue: value,
      rand: random,
    }))
    console.log(rand)
  }

  renderOpenGame = choicesList => (
    <ul className="ul">
      {choicesList.map(each => (
        <GameImages
          each={each}
          key={each.id}
          onclickButtonImg={this.onclickButtonImg}
        />
      ))}
    </ul>
  )

  renderResultRock = () => {
    const {choicesList, rand} = this.props
    if (choicesList[rand].id === 'SCISSORS') {
      this.setState(prv => ({count: prv.count + 1}))
      return <p>You Won</p>
    }
    if (choicesList[rand].id === 'PAPER') {
      this.setState(prv => ({count: prv.count - 1}))
      return <p>YOU LOSS</p>
    }
    return <p>Game tie</p>
  }

  renderResultPaper = () => {
    const {choicesList, rand} = this.props
    if (choicesList[rand].id === 'SCISSORS') {
      this.setState(prv => ({count: prv.count - 1}))
      return <p>YOU LOSS</p>
    }
    if (choicesList[rand].id === 'ROCK') {
      this.setState(prv => ({count: prv.count + 1}))
      return <p>YOU WON</p>
    }
    return <p>Game tie</p>
  }

  renderResultScissors = () => {
    const {choicesList, rand} = this.props
    if (choicesList[rand].id === 'ROCK') {
      this.setState(prv => ({count: prv.count - 1}))
      return <p>YOU LOSS</p>
    }
    if (choicesList[rand].id === 'PAPER') {
      this.setState(prv => ({count: prv.count + 1}))
      return <p>YOU WON</p>
    }
    return <p>Game tie</p>
  }

  result = () => {
    const {clickValue, rand} = this.state
    switch (clickValue) {
      case 'ROCK':
        return this.renderResultRock(rand)
      case 'PAPER':
        return this.renderResultPaper(rand)
      case 'SCISSORS':
        return this.renderResultScissors(rand)
      default:
        return null
    }
  }

  resultGame = choicesList => {
    const {clickValue, rand} = this.state
    const imagesearch = choicesList.filter(each => each.id === clickValue)
    return (
      <div className="result">
        <div>
          <img src={imagesearch[0].imageUrl} alt="img" className="clickeimg" />
          <img
            src={choicesList[rand].imageUrl}
            alt="img"
            className="clickeimg"
          />
        </div>
        {this.result(rand)}
        <button
          type="button"
          className="play-button"
          onClick={this.onclickplayagain}
        >
          Play Again
        </button>
      </div>
    )
  }

  render() {
    const {choicesList} = this.props
    const {isClick} = this.state
    return (
      <div className="bg">
        <div className="header-container">
          <div className="names">
            <p className="para">ROCK</p>
            <p className="para">PAPER</p>
            <p className="para">SCISSOR</p>
          </div>
          <div className="score-container">
            <p className="score-pare">Score</p>
            <p className="score-pare">0</p>
          </div>
        </div>
        {isClick
          ? this.resultGame(choicesList)
          : this.renderOpenGame(choicesList)}
      </div>
    )
  }
}
export default Game
