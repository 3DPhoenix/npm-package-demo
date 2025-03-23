## Components Guide

### Sidebar

So Sidebar can look as desired the parent should have full height. </br>
Here is an example for full height page content:

```
html,
body {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  flex: 1;
}
```

## Building

### First Help

If the building ends with a `<div>` or similar HTML tag, the `tsconfig.json` probably automatically contains an incorrect change.</br>
Fix to do: `"jsx": "preserve"` -> `"jsx": "react-jsx"`
