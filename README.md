# The Vacuum's Alibi: One Line, 200 Characters

[![make.fun](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/c/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/ChristaNavisa/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/rank.svg)](https://make.fun/c/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/ChristaNavisa/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/reward.svg)](https://make.fun/c/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

A [make.fun](https://make.fun) bounty entry: a program that writes the funniest
one-line excuse a robot vacuum can give for missing a spot — 200 characters
or fewer — to `/output/entry.txt`.

## The line

> I didn't miss that spot. I audited it: 94% crumbs, 6% ambition — and promoted it to permanent resident.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later. The program is deterministic: every run writes
the same single line (no trailing newline) to `/output/entry.txt`, and checks
the gate itself first — 1 to 200 characters, not only whitespace, one line.

## License

MIT — see [LICENSE](LICENSE).
