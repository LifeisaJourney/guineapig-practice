import React from 'react';

class GuineaPigs extends React.Component {
  
  render() {
    const src = this.props.src;
    
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}
