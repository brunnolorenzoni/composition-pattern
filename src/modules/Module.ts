export interface Module {
  execute: Promise<void> | void;
}
