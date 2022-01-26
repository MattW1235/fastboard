# @netless/fastboard

## 0.2.1

### Patch Changes

- 3e2bce8: (core) Add player.

  (package) Move app-slide to dependencies.

  (react) Improve toolbar styles.

## 0.2.0

### Minor Changes

- 51c9f77: Move fastboard to fastboard-core, export a new fastboard package which does everything.

  Example usage:

  ```ts
  import { createFastboard, mount } from "@netless/fastboard";

  const app = await createFastboard({ ...config });
  mount(app, document.getElementById("whiteboard"));
  ```

  It still depends on `react`, but surely we will migrate to svelte in some time.

## 0.1.1

### Patch Changes

- 117e415: forwardRef, fix themes and add sceneIndex stuff (to be refactored).

## 0.1.0

### Minor Changes

- c44b259: API almost ready.