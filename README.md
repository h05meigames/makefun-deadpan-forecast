[![Bounty](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/h05meigames/makefun-deadpan-forecast/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![Reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/h05meigames/makefun-deadpan-forecast/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

# Deadpan Forecasts for Cities That Do Not Exist

A deadpan weather forecast for a city that does not exist. Built for [make.fun's Deadpan Forecasts for Cities That Do Not Exist bounty](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c).

## The line

> Tonight in Vellmoor: 12 degrees, scattered showers of light rain, and a 70 percent chance the fog will be back by morning, uninvited, as usual.

143 characters, one line, read the way a dry TV meteorologist would read it: the numbers are precise, the forecast is plausible, and only the fog's manners give away that Vellmoor is not on any map.

## How it works

`main.ts` (Node, no dependencies) validates the line — 1 to 160 characters, not only whitespace, a single line with no line breaks — prints it to stdout and writes it to `entry.txt` inside the output directory (`$MAKEFUN_OUTPUT_DIR` when set, otherwise `/output`, created if missing).

```sh
node main.ts
```

## Referral

https://make.fun/r/0ene8b3q

## License

MIT — see [LICENSE](LICENSE).
