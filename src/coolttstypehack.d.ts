/**
 * This file allows me to import webpack shims.
 */

declare module '*.mp3' {
  declare const ref: string
  export default ref
}

declare module '*.css'
