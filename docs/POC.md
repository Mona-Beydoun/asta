# Proof of Concept
# Proof of Concept

## Question
Can task completion and the progress summary stay consistent when tasks are completed, undone, and toggled repeatedly?

## Approach
I built a deliberately small experiment: three task labels, a button for each task, a completed / total count, and a percentage. It uses plain styling and one route.

The component keeps one piece of state: which tasks are complete. The count and percentage are calculated from that state on every render, so they cannot drift apart. The percentage is `Math.round(completed / total * 100)`. The stateful part is a small Client Component, `app/components/ProgressPoc.tsx`.

## Test results
| Action | Expected | Actual |
| --- | --- | --- |
| Start with no tasks complete | 0 / 3 and 0% | as expected |
| Complete one task | 1 / 3 and 33% | as expected  |
| Complete a second task | 2 / 3 and 67% | as expected |
| Complete all tasks | 3 / 3 and 100% | as expected  |
| Undo one completed task | 2 / 3 and 67% |as expected  |
| Toggle the same task repeatedly | Count stays between 0 and 3 and matches task states | as expected  |
| Refresh the page | Resets to 0 / 3 and 0% | as expected  |

## Issue or observation
 Two decimals are hidden by rounding, so 1 of 3 shows 33%, not 33.3%." or "State resets on refresh, as expected from the PRD.

## What this does and does not prove
- It shows the core interaction works and stays consistent.
- It does not prove that people want or can use the product, and it does not test the visual design.


## Evidence
`docs/evidence/poc-3of3.png`