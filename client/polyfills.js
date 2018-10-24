/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import assign from 'core-js/library/fn/object/assign'

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
console.log('Load your polyfills')

Object.prototype.assign = assign