Reusable Web-Based Learning Game Engine

Overview

This project presents the design of a 'reusable web-based learning game engine' capable of generating multiple educational games through JSON configuration files.
Instead of developing individual games separately, the engine separates 'game logic, learning content, and UI components', allowing new learning experiences to be created by simply modifying configuration files.
This project was developed as part of the 'Core Systems Competition', focusing on system architecture, modularity, and scalability.

Key Features

- JSON-driven game configuration
- Modular game engine architecture
- Separation of logic and educational content
- Reusable game modules
- Scalable and extensible design
The engine architecture allows developers and educators to create new learning games without modifying the core engine code.

---

 System Architecture

The engine follows a modular architecture composed of several core components:

- 'JSON Configuration Layer' – Defines game rules, content, and UI settings.
- 'Config Loader' – Loads and validates JSON configurations.
- 'Game Engine Core' – Controls execution flow and game state.
- 'Module Registry' – Dynamically loads game modules.
- 'Game Modules' – Implement gameplay mechanics (quiz, memory, drag-drop).
- 'UI Renderer' – Displays the interactive game interface.

---

  Engine Workflow

1. Load game configuration from JSON file
2. Validate configuration using JSON schema
3. Initialize the Game Engine
4. Load the appropriate game module
5. Start the engine loop
6. Process player input and update game state
7. Render updated UI until game completion

---

  JSON Configuration

The engine uses JSON files to define games.

Example configuration structure:

```json
{
  "engineVersion": "1.0",
  "gameType": "quiz",
  "metadata": {
    "title": "Math Challenge"
  },
  "settings": {
    "timeLimit": 30
  },
  "content": {
    "questions": []
  }
}
