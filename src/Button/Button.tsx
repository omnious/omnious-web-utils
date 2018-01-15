import * as React from 'react';


export default class Button extends React.Component {
  render() {
    const { children } = this.props;
    return <button>{children}</button>;
  }
}
