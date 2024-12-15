# A TypeScript console application template

A TypeScript [Node.js](https://nodejs.org) console application template with opinionated [Biome](https://biomejs.dev) linting.

Install [Biome VS Code](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) extension or [Biome IntelliJ Plugin](https://plugins.jetbrains.com/plugin/22761-biome) depending on the IDE platform to enable linting and fixing the code formatting.

The code should be able to [debugged](.vscode/launch.json) in the IDE. Use <kbd>⌘/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to run the background continuous build [task](.vscode/tasks.json).

Debug The code by pressing <kbd>F5</kbd>. Remember to add break points

## Importing local code files
You need to use `js` file extension to modularize your comsole application into separate files.

Correct ✔️:
```typescript
import { foo } from "./bar.js";
```

Fail ❌:
```typescript
import { foo } from "./bar";
```

## Notes
The VS Code currently doesn't seem to be able to attach the NodeJS Debugger to the NodeJS v.23.x.
