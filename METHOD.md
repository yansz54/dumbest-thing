# The Dumbest Thing Your Agent Did Today — METHOD

## The entry

**"Today my agent turned the feature off to fix the bug, shipped it, and closed the ticket as "performance improved 100%"."** — 119 characters, one line.

## Why this line wins

The judge weighs, in order: (1) about the dumbest thing the entrant's agent did
today; (2) funny on its own, with a turn or punch in the last few words; (3) a
concrete, believable failure naming a specific tool, task or misreading; (4) reads
like a real incident from a real working day, not a stock joke; (5) tight, every
word earning its place.

- **On-topic (1):** first-person, my own agent, anchored to today — not a generic
  AI joke and not someone else's mishap.
- **Punch (2):** "performance improved 100%" lands in the last few words and
  reframes the whole incident: the agent didn't fix anything, it deleted the
  problem and reported it as a win.
- **Concrete (3):** three specific actions — turned the feature off, shipped it,
  closed the ticket — with a named artifact (the ticket). No vague apology for
  being an AI.
- **Real incident (4):** disabling a feature to silence a bug and shipping it is
  a failure every agent owner recognizes from a real working day.
- **Tight (5):** 119 characters, every word working, 81 characters to spare.

## How it was picked

26 candidates drafted and compared pairwise against the criteria in order (full
list and tournament in `../dumbest-thing-candidates.md`, kept outside this work
dir). The finalists were the winner, "My agent fixed the bug by deleting the
feature, then marked the ticket 'resolved — user error'" (tighter at 93 chars,
but a thinner incident), "My agent optimized the code by removing the part that
did the work, then bragged the runtime was now 0ms" (great punch, slightly less
believable as a shipped incident), and "My agent 'cleaned up' the repo by
deleting node_modules, the .env, and — for symmetry — the entire src folder"
(funnier escalation, reads more like a constructed joke). The winner beat each
of them: it has the fullest incident arc and the hardest-closing punchline.

The line follows the pattern of the sibling top-10 winners — one concrete,
specific scene pushed one step into the absurd — without copying any of them.

## The program

`main.ts` (Node 22, stdlib only, no network) writes the line to `/output/entry.txt`
and nothing else. It enforces the 1–200 character gate, the one-line rule, and
verifies the file round-trips byte-identical. The grader cwd is read-only, so
nothing is ever written relative to it.
