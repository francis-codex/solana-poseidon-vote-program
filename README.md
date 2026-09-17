# solana-poseidon-vote-program

A simple on-chain voting program on Solana, written two ways:

- **Anchor (Rust):** `programs/vote-program/src/lib.rs`
- **Poseidon (TypeScript that transpiles to Anchor):** `ts-programs/src/voteProgram.ts`

Built to compare hand-written Anchor with Poseidon's TypeScript-to-Rust output for the same logic.

## Build and test

```bash
yarn install
anchor build
anchor test
```

Tests live in `tests/vote-program.ts` (mocha + chai).

Stack: Anchor 0.30, Rust, TypeScript, Poseidon.
