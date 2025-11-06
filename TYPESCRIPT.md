# TypeScript Configuration

## tsconfig.json

This project uses the official Astro TypeScript configuration.

### Configuration Format

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

This format uses TypeScript's package export resolution (available in TypeScript 5.0+) to extend the Astro strict configuration.

### Common Questions

#### "File 'astro/tsconfigs/strict' not found"

If you see this error, it means dependencies haven't been installed yet. Run:

```bash
npm install
```

This is expected behavior - the configuration file is located in `node_modules/astro/tsconfigs/strict.json` which only exists after installation.

#### Why not use `"./node_modules/astro/tsconfigs/strict.json"`?

While that path works, it has disadvantages:
- **Less portable**: Breaks with pnpm, Yarn PnP, and monorepo setups
- **Not future-proof**: Package managers may change node_modules structure
- **Not recommended**: Astro officially recommends the package export format

#### IDE Warnings

Some IDEs may show warnings about the path before dependencies are installed. These warnings will disappear after running `npm install`.

### Verification

To verify your TypeScript configuration is working:

```bash
# Check TypeScript can parse the config
npx tsc --showConfig

# Run type checking
npx tsc --noEmit

# Run Astro's type checker
npx astro check
```

All commands should complete without errors.

## TypeScript Version

This project requires TypeScript 5.0 or higher for package export support in tsconfig extends.

Current version: `^5.9.3`
