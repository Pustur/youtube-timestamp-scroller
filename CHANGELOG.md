# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2021-08-21

### Added

- Highlight animation when scrolling back to the comment with the timestamp

### Changed

- Replaced optional chaining so older browsers can use the extension

## [1.0.1] - 2021-08-21

### Changed

- Extension description
- Improved readme

### Fixed

- Video reference sometimes would not be set on load
- Document click listener would not respond to timestamp clicks, presumably due to some YouTube code cancelling the bubbling phase?

## [1.0.0] - 2021-03-24

- Initial release

[1.1.0]: https://github.com/Pustur/youtube-timestamp-scroller/compare/1.0.1...1.1.0
[1.0.1]: https://github.com/Pustur/youtube-timestamp-scroller/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/Pustur/youtube-timestamp-scroller/releases/tag/1.0.0
