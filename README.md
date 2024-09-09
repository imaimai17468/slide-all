# Slide-All

Slide-All is a web-based platform that allows users to share and edit Google Slides effortlessly, with built-in camera functionality to capture live images. Whether you're giving a presentation or collaborating in real time, Slide-All offers a seamless experience for sharing, editing, and presenting information.

## Features

- **Google Slide Sharing**: Easily share your Google Slides directly through the platform.
- **Live Editing**: Edit content directly in the browser and see changes instantly.
- **Camera Support**: Capture and share live images using your camera while presenting slides, ideal for creating a more personalized experience.
- **Streamlined Experience**: Optimized for fast and intuitive use, allowing users to focus on their content.

## Camera Integration

Slide-All leverages the `react-camera-pro` library to provide seamless access to your device's camera. Whether you're presenting or collaborating, you can capture facial images live and share them instantly within your presentation.

## Tech Stack

- **Next.js**: Modern React framework for building the web platform.
- **Mantine UI**: Beautiful and flexible UI components to enhance user experience.
- **Jotai**: State management for effortless handling of global and local states.
- **Biome**: Automated code formatting and linting for maintaining clean code.
- **Zod & Mantine-Form-Zod-Resolver**: Powerful form validation with Zod integration.
- **React Camera Pro**: Library for capturing and using camera images in the application.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/slide-all.git
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Run the development server:
    ```bash
    bun dev
    ```

4. Build the project for production:
    ```bash
    bun build
    ```

## Available Scripts

- `bun dev`: Runs the development server.
- `bun build`: Builds the application for production.
- `bun start`: Starts the production server.
- `bun lint`: Lints the code using Biome.
- `bun format`: Formats the code using Biome.
- `bun check`: Checks the code for type errors using Biome.

## Dependencies

- **Next.js**: ^14.2.3
- **React**: ^18
- **Mantine Core**: ^7.9.1
- **Mantine Form**: ^7.9.1
- **Jotai**: ^2.8.0
- **Zod**: ^3.23.8
- **React Camera Pro**: ^1.3.0

## License

This project is licensed under the MIT License.
