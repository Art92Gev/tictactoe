import './App.css';
// Class Component Vortex ogtagorcumenqq React Bazzan, ir sepakan Statery;
// Ashxatume Aranc Hook;
// import React from 'react' => Partadir Grvox Payman;

import React from 'react';

// Stexcel Zangvac Vortex nerarel Diverin;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      squares: new Array(9).fill(null),
      count: 0,
      forX: 0,
      forM: 0,
      for0: 0
    }
  }

  // Paymanneri Hamar Stexcel Haxtelu havanakanutyunnery Zangvaci ev Detalnneri texerow Poxakapakcel Mimiyanc;
  winnerList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 4, 8],
    [2, 4, 6],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  // Stexcel Yndhanur function vory Kworoshi detalneri X kam 0 Linely + Kawelana Yndanur Zangvaci mej Chanachelow X kam 0;
  winnerInDetails = () => {
    let win = (this.state.count % 2 === 0) ? 'X' : '0';
    for (let i = 0; i < 8; i++) {
      let line = this.winnerList[i];
      if (
        this.state.squares[line[0]] === win &&
        this.state.squares[line[1]] === win &&
        this.state.squares[line[2]] === win 
        
      ) {
        setTimeout(() => {
          console.log('count =' + this.state.count);
          this.setState({ squares: new Array(9).fill(null) });
          this.setState({ count: 0 });
          console.log(win.includes('X'));
          console.log(win.includes('0'));
          if (win.includes('X')) {
            this.setState({ forX: this.state.forX + 1 });
          }
          else if (win.includes('0')) {
            this.setState({ forM: this.state.forM + 1 });
          }
        }, 1000)
      }
    }
    setTimeout(() => {
      if(this.state.count === 9 ) {
        this.setState({ for0: this.state.for0 + 1 });
        this.setState({ squares: new Array(9).fill(null) });
        this.setState({ count: 0 });
      }
    }, 1000);
  }


  clickHandler = (e) => { // 4 => Data;
    let data = e.target.getAttribute("data");
    console.log(data);
    console.log(this.state.squares);
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : '0';
      this.setState({ count: this.state.count + 1 });
      this.setState({ squares: currentSquares });
    }
    this.winnerInDetails();
  }



  // Data Pahpanel Indexneri texery;
  render() {
    return (
      <div className="App">
        <section>
          <header>Player I : {this.state.forX}</header>
          <header>Player II : {this.state.forM}</header>
          <header>Draw : {this.state.for0}</header>
        </section>
        <div className="tic-tac-toe">
          <div className="blocks" data="0" onClick={this.clickHandler}>{this.state.squares[0]}</div>
          <div className="blocks" data="1" onClick={this.clickHandler}>{this.state.squares[1]}</div>
          <div className="blocks" data="2" onClick={this.clickHandler}>{this.state.squares[2]}</div>
          <div className="blocks" data="3" onClick={this.clickHandler}>{this.state.squares[3]}</div>
          <div className="blocks" data="4" onClick={this.clickHandler}>{this.state.squares[4]}</div>
          <div className="blocks" data="5" onClick={this.clickHandler}>{this.state.squares[5]}</div>
          <div className="blocks" data="6" onClick={this.clickHandler}>{this.state.squares[6]}</div>
          <div className="blocks" data="7" onClick={this.clickHandler}>{this.state.squares[7]}</div>
          <div className="blocks" data="8" onClick={this.clickHandler}>{this.state.squares[8]}</div>
        </div>
      </div>
    )
  }
}

export default App;