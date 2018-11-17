// import React from 'react';
// export class GuineaPigs extends React.Component {
//   render() {
//     const src = this.props.src;
//     return (
//       <div>
//         <h1>Cute Guinea Pigs</h1>
//         <img src={src} />
//       </div>
//     );
//   }
// }

////////////////////////Above this line is React Component, normal way of doing a stateless react component.



///Below this line is the way to write stateless functional component while passing props in and removing this binding and removing render()

import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src = { src } />
    </div>
  );
}
