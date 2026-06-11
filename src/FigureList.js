import {Component} from 'react';
import BasicFigure from './BasicFigure';
class FigureList extends Component {
  render() {
    return (
      <>
        <BasicFigure />
        <BasicFigure />
        <BasicFigure />
      </>

    )
  }
}
export default FigureList;

// import {Component} from 'react';
// import BasicFigure from './BasicFigure';
// class FigureList extends Component {
//   render() {
//     return (
//       <div style={{display:"flex"}}>  
//         <BasicFigure filename="dog.jpg" caption="Chó" />
//         <BasicFigure filename="rabbit.jpg" caption="Thỏ" />
//         <BasicFigure filename="meo.jpg" caption="Mèo" />
//       </div>
//     )
//   }
// }
// export default FigureList;