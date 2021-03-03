import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FlexRow from '../../Components/Flex/FlexRow';
import axios from 'axios';
import { LOGIN } from '../../_helpers/config';
import { useHistory } from 'react-router-dom';
import { setSession, getSession } from '../../_helpers/auth';
import { loginState, propTokenType } from '../../Models';
const Login = (props: propTokenType) => {
  const { setToken } = props;
  const history = useHistory();
  const [error, setError] = useState('');
  const [state, setState] = useState<loginState>({
    email: 'test1@email.com',
    password: '123456',
  });
  const handleChange = ({ target }: any, name: string) => {
    setError('');
    setState({
      ...state,
      [name]: target.value,
    });
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post(LOGIN, state);

      setSession(response.data);
      setToken(getSession().token);
      history.push('/');
    } catch (err) {
      if (+err.response.status === 401) {
        setError(err.response.data.msg);
      }
    }
  };
  return (
    <FlexRow className="flex-row justify-content-center align-item-center login-wrapper">
      <div className="login-box p-5">
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className="text-center">Login</h1>
            </Col>
            <Col xs={12} className="pt-4">
              <input
                className="form-control"
                value={state.email}
                name="email"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => handleChange(e, 'email')}
              />
            </Col>
            <Col xs={12} className="pt-4">
              <input
                className="form-control"
                value={state.password}
                name="password"
                type="Password"
                placeholder="Enter Password"
                onChange={(e) => handleChange(e, 'password')}
              />
            </Col>
            <Col xs={12} className="text-center mt-5">
              <Button className="px-5" onClick={handleLogin}>
                Login
              </Button>
            </Col>
            <Col xs={12}>
              {error && <small className="text-danger">{error}</small>}
            </Col>
          </Row>
        </Container>
      </div>
    </FlexRow>
  );
};

export default Login;
