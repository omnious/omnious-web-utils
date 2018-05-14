# Button

> Basic button component

## Usage

```jsx
import { Button } from '@omnious/ui';

<Button
  color="primary"
  disabled={false}
  isInvert={false}
  isLoading={false}
  size="md"
  onClick={e => console.log(e)}
>
  This is `<Button />`!
</Button>
```

<!-- STORY -->

## Props

| Name      | Type                     | Required | Default | Description |
|-----------|--------------------------|----------|---------|-------------|
| children  | node                     | no       | -       | -           |
| color     | enum: primary, danger    | no       | primary | -           |
| disabled  | boolean                  | no       | false   | -           |
| isInvert  | boolean                  | no       | false   | -           |
| isLoading | boolean                  | no       | false   | -           |
| size      | enum: xl, lg, md, sm, xs | no       | md      | -           |
| onClick   | function                 | no       | -       | -           |
