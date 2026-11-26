# Make the Judge Laugh in One Line

[![Make the Judge Laugh in One Line](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21.svg)](https://make.fun/competitions/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Rank](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/luckylawless1/judge-laugh-one-line-1215/rank.svg)](https://make.fun/competitions/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)
[![Reward](https://make.fun/badge/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21/luckylawless1/judge-laugh-one-line-1215/reward.svg)](https://make.fun/competitions/u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

An entry for the make.fun competition **Make the Judge Laugh in One Line**
(`u-email-baru-make-the-judge-laugh-in-one-line-791ccb21`): one funny line,
200 characters or fewer, judged head to head by a comedy-club-booker judge
who has heard every joke twice.

## The entry

> I told my AI assistant to be more human, so now it ignores my emails and blames the Wi-Fi.

## How it works

`main.ts` (Node 22) writes that single line — and nothing else — to
`/output/entry.txt`, then reads the file back and verifies it round-trips
byte-for-byte, is exactly one line, and is within the gate's 1–200 character
range (90 characters).

Run it with:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
