/// <reference types="react" />
/// <reference types="react-dom" />

// CSS modules
type CSSModuleClasses = { readonly [key: string]: string };

declare module "*.module.css" {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module "*.module.scss" {
  const classes: CSSModuleClasses;
  export default classes;
}
declare module "*.module.sass" {
  const classes: CSSModuleClasses;
  export default classes;
}

// CSS
declare module "*.css" {}
declare module "*.scss" {}
declare module "*.sass" {}

// images
declare module "*.bmp" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.ico" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.avif" {
  const src: string;
  export default src;
}

// media
declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.webm" {
  const src: string;
  export default src;
}

declare module "*.ogg" {
  const src: string;
  export default src;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.wav" {
  const src: string;
  export default src;
}

declare module "*.flac" {
  const src: string;
  export default src;
}

declare module "*.aac" {
  const src: string;
  export default src;
}

declare module "*.mov" {
  const src: string;
  export default src;
}

declare module "*.m4a" {
  const src: string;
  export default src;
}

// fonts
declare module "*.woff" {
  const src: string;
  export default src;
}
declare module "*.woff2" {
  const src: string;
  export default src;
}
declare module "*.eot" {
  const src: string;
  export default src;
}
declare module "*.ttf" {
  const src: string;
  export default src;
}
declare module "*.otf" {
  const src: string;
  export default src;
}

// other
declare module "*.pdf" {
  const src: string;
  export default src;
}
declare module "*.txt" {
  const src: string;
  export default src;
}
