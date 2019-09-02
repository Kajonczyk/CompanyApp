import React, { Component } from "react";

const PreviewWorkersData = ({ user, date }) => {
  // console.log(user.dates.map(user => console.log(user.signIn)));
  return <div>{user.dates.map(user => user.signIn)}</div>;
};
PreviewWorkersData.defaultProps = {
  user: {
    dates: []
  }
};
export default PreviewWorkersData;
