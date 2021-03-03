export interface loginState {
  email: string;
  password: string;
}

export interface formScriptType {
  name: string;
  placeholder: string;
  type: string;
}

export interface FlexProps {
  className: string;
  children: JSX.Element[] | JSX.Element;
}

export interface setSessionType {
  token: string;
  email: string;
}
export interface propTokenType {
  setToken: Function;
}
