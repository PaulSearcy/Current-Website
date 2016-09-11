# PSEARCY.COM -- Website Rewrite and Current State

Welcome to the rewrite of my website psearcy.com

I recently decided to take apart the [previous](https://github.com/tridon777/Old-Website) version of my website and rewrite it using Typescript + React. 

##Rationale 

Over the past year working with Node I've been continously working with new JS libraries on side projects that were very experimental in nature. In that time span I revisited the interesting concept of [Functional Programming](https://wiki.haskell.org/Functional_programming) that I had struggled conceptualizing in college. 



### Usage

Development build with live-reload and hot module replacement:

npm run dev # Starts a server on port 7864 and live-reloads modules as you change files.

Production build with minified react and react-dom included in bundle:
(With standalone react and react-dom, hot reloading wouldn't work in development, and the size of the page would be about 200KB larger.)

npm run build # Writes out compiled and minified source to dist/bundle.js

### Notes

Live/Hot reloading can take quite a bit of time due to the slow TypeScript compiler.

This readme is also rudimentary and will be updated as I absorb more knowledge relating to React and other modules.
