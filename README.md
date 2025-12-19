# Redoc Dist

A self-contained distribution of Redoc for offline API documentation.

## Overview

This package provides a standalone version of Redoc that can be used without CDN dependencies. All assets are bundled locally, making it suitable for offline use and faster loading times.

## Features

- Self-contained Redoc web components
- No external CDN dependencies
- Works offline after initial build
- Fast loading with local assets
- TypeScript support with type definitions
- Ready-to-use HTML examples

## Installation

```bash
npm install redoc-dist
```

## Usage

This module exposes Redoc dists as a dependency-free npm module. Use redoc instead, if you'd like to have npm install dependencies for you.

### JavaScript

Asset path can be imported by:

```javascript
const { getAssetPath } = require('redoc-dist');

// Get the path to the assets directory
const assetPath = getAssetPath();
```

### TypeScript

Full TypeScript support is included with type definitions:

```typescript
import { getAssetPath } from 'redoc-dist';

// Get the path to the assets directory with full type support
const assetPath: string = getAssetPath();
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
