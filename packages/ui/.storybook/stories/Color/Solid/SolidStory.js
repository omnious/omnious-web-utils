// Global import
import React from 'react';

// Local import
import { COLORS } from '../../../../src';
import { StyledStory } from '../../SharedStyle';
import { Card, ColorCollection, Desc, Viewer } from './Style';

export const SolidStory = () => (
  <StyledStory>
    <ColorCollection>
      <h1>Blue</h1>
      <Card>
        <Viewer color={COLORS.primaryBlue} />
        <Desc>
          <h4>Primary Blue</h4>
          <h5>#249CFF</h5>
        </Desc>
      </Card>
      <Card>
        <Viewer color={COLORS.lightenBlue} />
        <Desc>
          <h4>Lighten Blue</h4>
          <h5>#A9E1FF</h5>
        </Desc>
      </Card>
      <Card>
        <Viewer color={COLORS.darkenBlue} />
        <Desc>
          <h4>Darken Blue</h4>
          <h5>#2486FF</h5>
        </Desc>
      </Card>
    </ColorCollection>
    <ColorCollection>
      <h1>Black</h1>
      <Card>
        <Viewer color={COLORS.primaryBlack} />
        <Desc>
          <h4>Primary Black</h4>
          <h5>#2D3438</h5>
        </Desc>
      </Card>
      <Card>
        <Viewer color={COLORS.secondaryBlack} />
        <Desc>
          <h4>Secondary Black</h4>
          <h5>#333</h5>
        </Desc>
      </Card>
    </ColorCollection>
    <ColorCollection>
      <h1>White</h1>
      <Card>
        <Viewer color={COLORS.white} />
        <Desc>
          <h4>White</h4>
          <h5>#FFF</h5>
        </Desc>
      </Card>
    </ColorCollection>
    <ColorCollection>
      <h1>Gray</h1>
      <Card>
        <Viewer color={COLORS.primaryGray} />
        <Desc>
          <h4>Primary Gray</h4>
          <h5>#DBE9ED</h5>
        </Desc>
      </Card>
      <Card>
        <Viewer color={COLORS.darkenGray} />
        <Desc>
          <h4>Darken Gray</h4>
          <h5>#6F848D</h5>
        </Desc>
      </Card>
    </ColorCollection>
    <ColorCollection>
      <h1>Red</h1>
      <Card>
        <Viewer color={COLORS.primaryRed} />
        <Desc>
          <h4>Primary Red</h4>
          <h5>#FF5252</h5>
        </Desc>
      </Card>
      <Card>
        <Viewer color={COLORS.darkenRed} />
        <Desc>
          <h4>Darken Red</h4>
          <h5>#E34953</h5>
        </Desc>
      </Card>
    </ColorCollection>
  </StyledStory>
);

