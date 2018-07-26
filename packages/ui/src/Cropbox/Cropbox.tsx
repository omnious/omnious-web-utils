// Global import
import * as interact from 'interactjs';
import * as React from 'react';
import { Component, createRef, HTMLAttributes } from 'react';

// Local import
import { StyledCropbox } from './styles';

export interface CropboxProps extends HTMLAttributes<HTMLElement> {
  innerRef?: any;
  handleDrag?(e: any): void;
  handleResize?(e: any): void;
}

export interface CropboxState {
  height: number;
  width: number;
  x: number;
  y: number;
}

export class Cropbox extends Component<CropboxProps, CropboxState> {
  public state: CropboxState = {
    height: 100,
    width: 100,
    x: 0,
    y: 0
  };

  public componentDidMount(): void {
    this.renderBox();
  }

  private cropbox: any = null;

  private cropboxRef: any = this.props.innerRef || createRef();

  private renderBox = (): void => {
    const { handleDrag, handleResize } = this.props;
    this.cropbox = interact(this.cropboxRef.current)
      .draggable({
        restrict: {
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          restriction: 'parent'
        },
        onmove: this.moveBox,
        onend: handleDrag || null
      })
      .resizable({
        edges: {
          bottom: true,
          left: true,
          right: true,
          top: true
        },
        restrictEdges: {
          outer: 'parent'
        },
        onmove: this.resizeBox,
        onend: handleResize || null
      });
  };

  private moveBox = (e: any): void => {
    const { target }: any = e;
    const x: number = Number(target.getAttribute('x')) + e.dx;
    const y: number = Number(target.getAttribute('y')) + e.dy;
    this.setState((state: CropboxState): CropboxState => ({ ...state, x, y }));
  };

  private resizeBox = (e: any): void => {
    const { deltaRect, rect, target }: any = e;
    const height: number = rect.height;
    const width: number = rect.width;
    const x: number = Number(target.getAttribute('x')) + deltaRect.left;
    const y: number = Number(target.getAttribute('y')) + deltaRect.top;
    this.setState((state: CropboxState): CropboxState => ({ ...state, height, width, x, y }));
  };

  public render(): JSX.Element {
    return (
      <StyledCropbox innerRef={this.cropboxRef} {...this.state}>
        {this.props.children}
      </StyledCropbox>
    );
  }
}
