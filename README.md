Dash NProgress
=========

A very simple port of [nprogress.js](https://github.com/rstacruz/nprogress) library for the Plotly Dash ecosystem.
It adds a slim progress bar and a spinner to indicate loading state in a dash app based on the number of pending callbacks. The color of the progress bar changes if any callback fails.

Basic Usage
------------

Just include the js library in your dash app and you are good to go.

```python
from dash import Dash

external_scripts = ["https://unpkg.com/dash.nprogress@latest/dist/dash.nprogress.js"]

app = Dash(__name__, external_scripts=external_scripts)
```

Customization
------------

You can customize the color of normal and with-error progress bar by adding a css file in your dash app with following contents:

```css
:root {
    --nprogress-color-good: green;
    --nprogress-color-bad: #ff00ff
}
```

Known Issues
------------

* Doesn't work smoothly with long callbacks.
