import React, { Component } from 'react';
import styled from 'styled-components';

import Readme from '../../README.md';

const WelcomeComponent = ({ className }) => (
  <div className={`markdown-body ${className}`}>
    <div dangerouslySetInnerHTML={{ __html: Readme }} />
  </div>
);

export const WelcomeStory = styled(WelcomeComponent)`
  padding: 1rem 2rem;
`;
