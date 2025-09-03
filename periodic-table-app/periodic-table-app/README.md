# Periodic Table App

This web application allows users to interact with a periodic table, select multiple elements, and calculate the atomic mass and possible names for the resulting compound.

## Features

- Interactive periodic table for selecting elements.
- User interface for selecting multiple elements and their quantities.
- Calculation of total atomic mass based on selected elements.
- Display of possible names for the resulting compound.

## Project Structure

```
periodic-table-app
├── src
│   ├── components
│   │   ├── PeriodicTable.tsx
│   │   ├── ElementSelector.tsx
│   │   ├── CompoundCalculator.tsx
│   │   └── ResultDisplay.tsx
│   ├── data
│   │   └── elements.json
│   ├── utils
│   │   └── compoundUtils.ts
│   ├── App.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd periodic-table-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.