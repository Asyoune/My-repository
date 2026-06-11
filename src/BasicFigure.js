// import {Component} from 'react';
// class BasicFigure extends Component {
//   render() {
//     return(
//       <figure>
//         <img src="images/rabbit.jpg" alt="a rabbit" />
//         <figcaption>This is a picture of a rabbit.</figcaption>
//       </figure>
//     );
//   }
// }

// export default BasicFigure;

import { Component } from 'react';

class BasicFigure extends Component {
  render() {
    return (
      <figure>
        <img
          src={`/images/${this.props.filename}`}
          alt={this.props.caption}
        />
        <figcaption>{this.props.caption}</figcaption>
      </figure>
    );
  }
}

export default BasicFigure;