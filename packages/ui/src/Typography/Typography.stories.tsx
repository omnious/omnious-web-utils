// Global import
import { withInfo } from '@storybook/addon-info';
// import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Card, TypoCollection } from '.';
import { Mega } from '../Mega';

storiesOf('Component | Typography', module).add(
  'Overview',
  withInfo({
    source: false,
    propTables: false
  })(() => (
    <>
      <h1>{'Typeface'}</h1>
      <TypoCollection>
        <Card>
          <h2>{'Sofia Pro'}</h2>
          <a href="https://typekit.com/fonts/sofia">{'https://typekit.com/fonts/sofia'}</a>
        </Card>
        <Card>
          <h2>{'애플 SD 산돌고딕 Neo'}</h2>
          <p>{'Default sans-serif system font Apple / Malgun Gothic for windows'}</p>
        </Card>
      </TypoCollection>
      <h1>{'Weights'}</h1>
      <TypoCollection>
        <Card>
          <h2 className="Bold">{'Bold 700'}</h2>
          <h2 className="Regular">{'Regular 400'}</h2>
          <h2 className="Light">{'Light 300'}</h2>
        </Card>
      </TypoCollection>
      <h1>{'Styles'}</h1>
      <TypoCollection>
        <Card>
          <Mega>{'Mega | 63'}</Mega>
          <p>{'font-size: 63px (4.2rem)'}</p>
          <p>{'font-weight: Light (300)'}</p>
          <p>{'line-height: 68px (1.08)'}</p>
        </Card>
        <Card>
          <h1>{'h1 | 39'}</h1>
          <p>{'font-size: 39px (2.6rem)'}</p>
          <p>{'font-weight: Light (300)'}</p>
          <p>{'line-height: 45px (1.15)'}</p>
        </Card>
        <Card>
          <h2>{'h2 | 24'}</h2>
          <p>{'font-size: 24px (1.6rem)'}</p>
          <p>{'font-weight: Light (300)'}</p>
          <p>{'line-height: 35px (1.46)'}</p>
        </Card>
        <Card>
          <h3>{'h3 | 18'}</h3>
          <p>{'font-size: 18px (1.2rem)'}</p>
          <p>{'font-weight: Regular (400)'}</p>
          <p>{'line-height: 24px (1.33)'}</p>
        </Card>
        <Card>
          <p>{'body | 15'}</p>
          <p>{'font-size: 15px (1rem)'}</p>
          <p>{'font-weight: Regular (400)'}</p>
          <p>{'line-height: 24px (1.6)'}</p>
        </Card>
        <Card>
          <h5>{'SMALL TITLE | 12'}</h5>
          <p>{'font-size: 12 (0.8rem)'}</p>
          <p>{'font-weight: Regular (400)'}</p>
          <p>{'letter-spacing: 0.6px'}</p>
          <p>{'text-transform: uppercase'}</p>
        </Card>
      </TypoCollection>
    </>
  ))
);
