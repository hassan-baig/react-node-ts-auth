import React from 'react';
import { Button } from 'react-bootstrap';
import FlexRow from '../../Components/Flex/FlexRow';
import { removeSession, getSession } from '../../_helpers/auth';
import { useHistory } from 'react-router-dom';
import { propTokenType } from '../../Models/index';

const Home = (props: propTokenType) => {
  const { setToken } = props;
  const history = useHistory();
  const { email } = getSession();

  const handleLogout = () => {
    removeSession();
    setToken('');
    history.push('/login');
  };

  return (
    <FlexRow className="h-100 flex-column justify-content-center align-items-center bg-dark home-wrapper">
      <h1 className="text-white">Welcome {email}</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </FlexRow>
  );
};

export default Home;
