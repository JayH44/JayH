import React from 'react';
import { Navigate } from 'react-router-dom';

function Redirect({ to }) {
  return <Navigate to={to} />;
}

export default Redirect;
