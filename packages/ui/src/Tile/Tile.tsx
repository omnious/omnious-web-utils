// Global import
import * as React from 'react';

export const TileComponent: any = ({ children, className, ...others }: any): JSX.Element => (
  <section className={className} {...others}>
    {children}
  </section>
);
