import React, { useContext } from 'react';
import { UserContext } from './userContext';

function ComponentE() {
  const user = useContext(UserContext);
  return <div> User is {user}</div>
}

export default ComponentE;
