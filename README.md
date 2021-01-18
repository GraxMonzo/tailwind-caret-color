# Caret Color - TailwindCSS Plugin

[![npm](https://img.shields.io/npm/v/@graxmonzo/tailwind-caret-color.svg)](https://www.npmjs.com/package/@graxmonzo/tailwind-caret-color)
![Test and Publish](https://github.com/GraxMonzo/tailwind-caret-color/workflows/Test%20and%20Publish/badge.svg)
[![npm](https://img.shields.io/npm/dt/@graxmonzo/tailwind-caret-color.svg)](https://www.npmjs.com/package/@graxmonzo/tailwind-caret-color)

Fork of [`tailwind-caret-color`](https://github.com/Naoray/tailwind-caret-color) package. Tailwind 2.0.

This plugin generates classes for coloring carets using `caret-color: #;`.

## Installation

Pull it in through npm or yarn:

```bash
npm install @graxmonzo/tailwind-caret-color
```

```bash
yarn add @graxmonzo/tailwind-caret-color
```

## Usage

Add it to the plugins array of your Tailwind config.

```js
// tailwind.config.js

{
  variants: {
    caretColor: ['dark', 'active'], // Default variants
  },
  plugins: [
    require('@graxmonzo/tailwind-caret-color'),
  ],
}
```

For each color in `colors` config of tailwind a `caret-{color}` class is created, analog to `bg-` and `text-` classes.

## Testing

```bash
yarn test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
