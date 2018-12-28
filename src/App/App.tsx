import * as React from 'react';
import ld from 'lodash';
import './App.css';

import logo from './logo.svg';
import Square from './Square';

interface IAppState{
  positions: any;
}

const layout = ld.range(0, 16).map((n: number) => {
  const row = Math.floor(n / 4);
  const col = n % 4;
  return [140 * col, 140 * row];
});

class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
        positions: ld.shuffle(ld.range(0, 16)),
    };
  }

  public updatePosition(index: number) {
    const { positions } = this.state;
    const emptyIndex = positions.indexOf(0);
    const targetIndex = positions.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if (dif === 1 || dif === 4) {
        positions[emptyIndex] = index;
        positions[targetIndex] = 0;
        this.setState({positions}, () => {
          const win: boolean = ld.every(positions, (value, index2) => {
            return index2 === value;
          });
          if(win){
              window.alert('You win the game.');
          }
        });
    }
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Monk Puzzle Game</h1>
        </header>
        <div className="container">
          <div className="game">
              {this.state.positions.map((i, key)=> {
                  const [x,y] = layout[this.state.positions.indexOf(key)];
                  const emptyBox: boolean = key === 0;
                  return (
                    <Square
                    key={key}
                    componentKey={key}
                    updatePosition={() => this.updatePosition(key)}
                    x={x}
                    y={y}
                    emptyBox={emptyBox}
                    />
                  );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
