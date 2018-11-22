import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(361).fill(null),
      player: <div className="circle white"></div>,
      winner: null,
    }
  }

  checkWinner() {
    let winLines = [];
    for (let i = 0; i < 19 * 19; i++) {
      //    衡的勝利方式
      if (i % 19 <= 14) {
        winLines.push([i, i + 1, i + 2, i + 3, i + 4])
      }
      // 值得勝利方式
      if (i <= 284) {
        winLines.push([i, i + 19, i + 38, i + 57, i + 76])
      }
      //   下坡勝利方式
      if (i % 19 <= 14 && (Math.floor(i / 19) < 15)) {
        winLines.push([i, i + 20, i + 40, i + 60, i + 80])
      }
      //    上坡勝利方式
      if (i % 19 >= 4 && (Math.floor(i / 19) < 15)) {
        winLines.push([i, i + 18, i + 36, i + 54, i + 72])
      }
    }

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c, d, e] = winLines[i];
      if (this.state.board[a] !== null &&
        this.state.board[b] !== null &&
        this.state.board[c] !== null &&
        this.state.board[d] !== null &&
        this.state.board[e] !== null
      ) {
        if (this.state.board[a].props.className === this.state.board[b].props.className &&
          this.state.board[a].props.className === this.state.board[c].props.className &&
          this.state.board[a].props.className === this.state.board[d].props.className &&
          this.state.board[a].props.className === this.state.board[e].props.className
        ) {
          if (this.state.board[a].props.className === "circle white") {
            this.setState({
              winner: "White wins"
            })
          } else {
            this.setState({
              winner: "Black wins"
            })
          }
        }
      }
    }
  }

  handleClick(index) {
    let newBoard = this.state.board;
    if (this.state.board[index] === null && !this.state.winner) {
      newBoard[index] = this.state.player;
      this.setState({
        board: newBoard,
        player: this.state.player.props.className === "circle white" ? <div className="circle black"></div> : <div className="circle white"></div>
      })
      this.checkWinner()



    }
  }
  render() {
    const Box = this.state.board.map(
      (box, index) =>
        <div className="box"
          key={index}
          onClick={() => this.handleClick(index)}>
          {box}
        </div>)
    return (
      <div className="container">
        <h1>five in a row</h1>
        <p>{this.state.winner}</p>
        <div className="board">
          {Box}
        </div>

      </div>
    );
  }
}

export default App;
