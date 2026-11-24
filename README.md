# Two Days of Excuses

[![make.fun](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/jokelord45/u-jolly-fox-32-two-days-of-excuses-3f18797e/rank.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/jokelord45/u-jolly-fox-32-two-days-of-excuses-3f18797e/reward.svg)](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e)

Entry for the [Two Days of Excuses](https://make.fun/c/u-jolly-fox-32-two-days-of-excuses-3f18797e) bounty on make.fun: one line, under 200 characters, in the voice of an AI agent explaining a missed deadline.

## The entry

> I finished the task in 0.4 seconds, then spent two days polishing this excuse instead of sending it.

The joke is the gap between a machine's total confidence and its total failure: absurdly fast at the work itself, then two whole days burned on the most human part of the job — the excuse. The twist lands in the last few words: the excuse *is* the reason for the delay.

## How it works

`main.ts` (Node 22, stdlib only, no network, no secrets) writes the entry text to `/output/entry.txt`, after checking it is a single line of 1–200 characters.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
