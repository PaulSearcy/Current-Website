Welcome to the React + Typescript rewrite of my website psearcy.com

The goal is to use Typescript as a way to quickly debug through common runtime issues
at compile time. Since I'm not an expert at JSX or React syntax Typescript is a
great way to catch alot of the early mistakes I will be making.

Also, I really need to learn Typescript as I deal with types all the time in C# and this smooths
over the differences in syntatic sugar between C# and JS.

The plan is to use React, React-DOM, React-Bootstrap, React-Router and inline CSS(JSX format)
to create rudimentary replica of the current site feel.

This readme is also rudimentary and will be updated as I absorb more knowledge
relating to React and other modules.

### Usage

Development build with live-reload and hot module replacement:

```bash
npm run dev # Starts a server on port 7864 and live-reloads modules as you change files.
```

Production build with minified react and react-dom included in bundle:
(With standalone react and react-dom, hot reloading wouldn't work in development, and the size of the page would be about 200KB larger.)

```bash
npm run build # Writes out compiled and minified source to dist/bundle.js
```

### Notes

Live/Hot reloading can take quite a bit of time due to the slow TypeScript compiler.
