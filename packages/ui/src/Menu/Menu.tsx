// Global import
import * as React from 'react';
import { Collapse } from 'react-collapse';

// Local import
import { Root } from './Root';
import { MenuItem } from './MenuItem';
import {
  VerticalUl,
  HorizontalUl,
} from './styles';

export interface Props {
  vertical?: boolean,
  text?: string,
  collapsible?: boolean,
  expanded?: boolean,
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void
}

export interface State {
  expand?: boolean,
}

export class Menu extends React.PureComponent<Props, State> {
  static defaultProps = {
    vertical: true,
    text: '',
    collapsible: true,
    expanded: true,
  }

  state = {
    expand: this.props.expanded,
  }

  handleRootClick = (e: React.MouseEvent<HTMLLIElement>): void => {
    const { onClick } = this.props;
    const { expand } = this.state;
    
    this.setState({
      expand: !expand,
    });

    if (onClick) {
      onClick(e);
    }
  }

  createRoot = (text: string): JSX.Element => {
    return (
      <Root text={text} onClick={this.handleRootClick} />
    );
  }

  createItems = () => {
    const Ul = this.getUl();
    const {
      collapsible,
      children,
    } = this.props;
    const { expand } = this.state;
    const isOpened = collapsible ? expand : true;

    return (
      <Collapse
        isOpened={isOpened}
        hasNestedCollapse={true}
        style={{
          float: 'left',
        }}
      >
      <Ul>
        {children}
      </Ul>
      </Collapse>
    );
  }

  getUl = (): any => {
    const { vertical } = this.props;
    const Ul = vertical ? VerticalUl : HorizontalUl;

    return Ul;
  }

  render() {
    const {
      text,
    } = this.props;

    const Ul = this.getUl();
    const root = text && this.createRoot(text);
    const items = this.createItems();
    
    return (
      <Ul>
        {root}
        {items}
      </Ul>
    );
  }
}