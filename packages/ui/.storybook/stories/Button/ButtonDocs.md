# Button

> Basic button component

## Usage

```jsx
  import { Button } from '@omnious/ui';

  <Button
    color="primary"
    invert={false}
    size="md"
    disabled={false}
    loading={false}
    onClick={e => console.log(e)}
  >
    This is `<Button />`!
  </Button>
```

<!-- STORY -->

## Props

| Name     | Type                                    | Required | Default   | Description |
|----------|-----------------------------------------|----------|-----------|-------------|
| children | node                                    | no       | -         ||
| color    | enum: 'primary', 'secondary', 'default' | no       | 'default' ||
| invert   | bool                                    | no       | false     ||
| size     | enum: 'xl', 'lg', 'md', 'sm', 'xs'      | no       | 'md'      ||
| disabled | bool                                    | no       | false     ||
| loading  | bool                                    | no       | false     ||
| onClick  | func                                    | no       | -         | - |
