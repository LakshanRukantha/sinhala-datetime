# Sinhala (සිංහල) DateTime Formatter

## sinhala-datetime

[![npm version](https://badge.fury.io/js/sinhala-datetime.svg)](https://www.npmjs.com/package/sinhala-datetime)
[![GitHub release (latest by tag)](https://img.shields.io/github/v/tag/LakshanRukantha/sinhala-datetime)](https://github.com/LakshanRukantha/sinhala-datetime/releases)
[![Unit Tests](https://github.com/LakshanRukantha/sinhala-datetime/actions/workflows/publish.yml/badge.svg)](https://github.com/LakshanRukantha/sinhala-datetime/actions/workflows/publish.yml)
[![Last Commit](https://img.shields.io/github/last-commit/LakshanRukantha/sinhala-datetime)](https://github.com/LakshanRukantha/sinhala-datetime/commits/main)
[![GitHub stars](https://img.shields.io/github/stars/LakshanRukantha/sinhala-datetime)](https://github.com/LakshanRukantha/sinhala-datetime/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/LakshanRukantha/sinhala-datetime)](https://github.com/LakshanRukantha/sinhala-datetime/network/members)
[![GitHub contributors](https://img.shields.io/github/contributors/LakshanRukantha/sinhala-datetime)](https://github.com/LakshanRukantha/sinhala-datetime/graphs/contributors)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/LakshanRukantha/sinhala-datetime)](https://github.com/LakshanRukantha/sinhala-datetime/pulls)
[![GitHub issues](https://img.shields.io/github/issues/LakshanRukantha/sinhala-datetime)](https://github.com/LakshanRukantha/sinhala-datetime/issues)

### A lightweight Sinhala (සිංහල) date and time formatter with full TypeScript support. Format JS `Date` objects into readable Sinhala strings, including time with AM/PM.

## ✨ Features

- Converts `Date` to Sinhala (days/months)
- Supports AM/PM time formatting
- Returns fallback string for invalid dates
- ESM, CJS, and TypeScript support

## 📦 Installation

### Using npm

```bash
npm install sinhala-datetime
```

### Using pnpm

```bash
pnpm add sinhala-datetime
```

## 🚀 Usage

### Import the formatter

```typescript
import { formatSinhalaDate } from "sinhala-datetime";
```

### Format a Date

```typescript
// Format current date
const now = new Date();
console.log(formatSinhalaDate(now));

// Date without time
const dateOnly = new Date("2025-07-09T00:00:00");
console.log(formatSinhalaDate(dateOnly));
// ➤ බදාදා, 9 ජූලි 2025

// Date with AM time
const dateAM = new Date("2025-07-09T09:15:00");
console.log(formatSinhalaDate(dateAM, { showTime: true }));
// ➤ බදාදා, 9 ජූලි 2025 9:15 පෙ.ව.

// Date with PM time
const datePM = new Date("2025-07-09T15:45:00");
console.log(formatSinhalaDate(datePM, { showTime: true }));
// ➤ බදාදා, 9 ජූලි 2025 3:45 ප.ව.

// Midnight time
const midnight = new Date("2025-07-09T00:00:00");
console.log(formatSinhalaDate(midnight, { showTime: true }));
// ➤ බදාදා, 9 ජූලි 2025 12:00 පෙ.ව.

// Invalid date fallback
const invalid = new Date("not-a-date");
console.log(formatSinhalaDate(invalid));
// ➤ වලංගු නොවන දිනයකි
```

## 📘 API

```typescript
formatSinhalaDate(date: Date): string
```

### Parameters:

- `date`: JS Date object

### Returns:

Sinhala-formatted date string or fallback if invalid.

## 🧪 Run Tests

```bash
# Make sure you have Jest installed
pnpm add -D jest @types/jest ts-jest
pnpm test
```

## 🛠 Build CJS + ESM

```bash
# Make sure you have TypeScript and tsc-alias installed
pnpm add -D typescript ts-jest
pnpm build
```

## 📁 Structure

```bash
sinhala-datetime/
├── dist/            # Compiled output
├── src/             # Main source code
│   ├── libs/        # Formatting logic
│   ├── types/       # TypeScript types
│   ├── utils/       # Helper functions
│   └── index.ts     # Library entry
├── tests/           # Unit tests
├── package.json     # Project metadata
├── README.md        # Documentation
├── tsconfig.*.json  # TypeScript configs
└── jest.config.ts   # Testing config
```

## 📄 License

MIT © Lakshan Rukantha

## 🙌 Contribute

Contributions are welcome! Please open an issue or submit a pull request.
