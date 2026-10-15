# Asta's Preparation Dashboard

**Author:** [Mona Beydoun]

A small web dashboard that helps Asta (a fictional fighter preparing for Lucifero) follow a three-task training plan. He can mark tasks complete or undo them and see a completed / total count and a preparation percentage.

Built for TechTalks Assignment 2. Stack: Next.js, TypeScript, Tailwind CSS.

## Features
- View three training tasks with description and priority
- Mark each task complete and undo it
- See the completed / total count, a percentage and a progress bar

## Install and run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

Other scripts:
```bash
npm run lint
npm run build
```

## Limitations
- Progress is session-only. Refreshing the page resets all tasks to incomplete (0 / 3, 0%).
- Tasks are fixed. They cannot be added, edited, deleted or reordered.
- The percentage measures preparation-plan completion only. It does not predict the outcome against Lucifero.
- There is no login, database or saved data.

## Documents
- [PRD](docs/PRD.md)
- [Design decisions](docs/DESIGN.md)
- [MCP connection](docs/MCP.md)
- [Proof of concept](docs/POC.md)
- [Review and reflection](docs/REVIEW.md)
- Screenshots: `docs/evidence/`

## Notes
The characters come from Black Clover (by Yuki Tabata). This is an educational project inspired by it, using fictional training data.