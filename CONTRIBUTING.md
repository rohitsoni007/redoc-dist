# Contributing to Redoc Dist

We welcome contributions to the redoc-dist project! This document outlines the process for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Install dependencies with `npm install`
4. Make your changes
5. Test your changes
6. Submit a pull request

## Updating Redoc Versions

To update the bundled version of Redoc:

1. Update the redoc dependency in package.json
2. Run `npm install`
3. Run `npm run build` to copy the new bundles
4. Update the version number in package.json to match the redoc version
5. Update CHANGELOG.md with the new version
6. Submit a pull request

## Code Style

This project follows standard JavaScript code style. No specific formatting requirements beyond that.

## Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub with a clear description of the problem or enhancement.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.