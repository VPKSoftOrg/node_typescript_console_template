import type { Config } from "jest";

const config: Config = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: "./test",
};

// biome-ignore lint/style/noDefaultExport: Don't know workaround for Jest configuration
export default config;
