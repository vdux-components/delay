
# delay

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Delay the rendering of child components, or execution of an action for a declaratively specified period.

## Installation

    $ npm install vdux-delay

## Usage

```javascript
function render () {
  return (
    <Hover>
      <SomeHoverableEntity />
      {
        hover => hover && <Delay time={400}><Tooltip message='Explanation of SomeHoverableEntity' /></Delay>
      }
    </Hover>
  )
}
```

`<Tooltip />` is hidden until after the cursor has hovered over `<SomeHoverableEntity />` for at least 400 milliseconds.

## API - props

  * `time` - The number of milliseconds to wait
  * `onEnd` - An action to dispatch when the delay ends (is not dispatched if the component is removed before the timer ends)

## License

MIT
