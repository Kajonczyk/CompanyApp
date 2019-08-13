import React, { Component } from "react";
import PropTypes from "prop-types";

const PreviewWorkersData = ({ user, date }) => {
  // console.log(user);
  // console.log(user);
  // console.log(user.dates);
  // console.log(date);

  // console.log(user.dates.map((user, index) => console.log(user[index][date])));
  // console.log(user.dates);
  // console.log(user.dates.map(user => console.log(user)));
  console.log(user.dates.map(user => console.log(user.signIn)));
  // console.log(user.dates.map(user => console.log(user[date].signOut)));
  // console.log(user.dates[date]);
  // console.log(user.dates[date]);
  // console.log(user.dates.length);
  return (
    <div>
      {user.dates.map(user => user.signIn)}
      {/* {user.dates[date].length > 0
        ? Array(user.dates).map(user => console.log(user.dates[date].signIn))
        : "NO SIEMA"}
      <div>XD</div> */}
    </div>
  );
};

export default PreviewWorkersData;
// console.log(Object.entries(user.dates));
// class PreviewWorkersData extends Component {
//   state = {  }
//   static defaultProps = {
//     user: []
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           XD
//         </div>
//       </div>
//       );
//   }
// }

// export default PreviewWorkersData;
//@@
// console.log(Array(user.dates).map(user => console.log(user[date])));

// console.log(user)
// console.log(user[date]);
// console.log(date);
// console.log(Array(user.dates));
// // Array(user.dates);
// console.log(user);
// console.log(user.dates);
// Array(user.dates).map(user => console.log(user[date]));
// // Array(user.dates).map(user => console.log(user[date].signIn));
// console.log(user.dates[date]);
