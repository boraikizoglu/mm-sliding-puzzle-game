import * as React from 'react';

interface ISquareProps{
    componentKey: number;
    x: number;
    y: number;
    updatePosition(key: number): void;
    emptyBox: boolean;
}

class Square extends React.Component<ISquareProps, {}> {
  public render() {
    const { componentKey, x, y, updatePosition, emptyBox } = this.props;
    return (
        <div
        key={componentKey}
        className={emptyBox ? 'empty' : 'square'}
        onClick={() => updatePosition(componentKey)}
        style={{transform: `translate3d(${x}px,${y}px,0) scale(1.1)`}}
        >
            <img
            src={require(`../Assets/m${componentKey}.jpg`)}
            width={125} height={125}
            />
        </div>
    );
  }
}

export default Square;
