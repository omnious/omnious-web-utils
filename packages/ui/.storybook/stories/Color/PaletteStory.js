import React, { Component } from 'react';
import styled from 'styled-components';

import { StoryContainer } from '../shared-style';
import styles from '../../../packages/kit/constants/styles';


const PaletteContainer = styled(StoryContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PaletteCard = styled.div`
  padding: 0.5rem;
  text-align: center;
`;

const PaletteViewer = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 ${styles.primaryShadow};
  height: 7rem;
  width: 7rem;
`;

export default class PaletteStory extends Component {
  render() {
    return (
      <PaletteContainer>
        <PaletteCard>
          <PaletteViewer color={styles.primaryBlue} />
          <h4>Primary Blue</h4>
          <h5>#23B4FF</h5>
        </PaletteCard>
        <PaletteCard>
          <PaletteViewer color={styles.darkBlue} />
          <h4>Dark Blue</h4>
          <h5>#37ADE9</h5>
        </PaletteCard>
        <PaletteCard>
          <PaletteViewer color={styles.lightBlue} />
          <h4>Light Blue</h4>
          <h5>#53C3FA</h5>
        </PaletteCard>
        <PaletteCard>
          <PaletteViewer color={styles.black} />
          <h4>Black</h4>
          <h5>#333</h5>
        </PaletteCard>
        <PaletteCard>
          <PaletteViewer color={styles.white} />
          <h4>White</h4>
          <h5>#FFF</h5>
        </PaletteCard>
      </PaletteContainer>
    );
  }
}
