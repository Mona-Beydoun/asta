# MCP Connection
# MCP Connection

## Roles
- **Host:** VS Code with GitHub Copilot Chat (Agent mode)
- **Client:** The MCP client built into VS Code / Copilot Chat
- **Server:** Stitch MCP server (`https://stitch.googleapis.com/mcp`)

## Setup
I created a Stitch API key in Stitch settings and added the server through the host's MCP controls. The key is stored in my private user configuration, outside this repository, and is not committed.

## Tool call
- **Tools exposed by the server:** `list_projects`, `get_project`, `list_screens`, `get_screen`, `list_design_systems`
- **What I asked it to do:** List my Stitch projects, find Asta's Preparation Dashboard, and retrieve the available design context.
- **Result:** The agent found the project "Asta's Preparation Dashboard" (private, desktop-oriented) and retrieved its Desktop and Mobile screens. Stitch returned screenshot and HTML-code asset references for both. It also returned the project's design system, "Tactical Vanguard": Plus Jakarta Sans for headlines, Inter for body and labels, a charcoal `#121316` background, a `#1a1c22` surface, `#2e323b` borders, crimson `#e63946` and emerald `#22c55e` accents, a 12/8/4-column grid for desktop/tablet/mobile, and a 48px minimum height for interactive targets.
- **What was still missing:** The PRD's behaviour (state, progress calculation, acceptance criteria). MCP gave me design context only, so the agent still needs `docs/PRD.md` to know how the dashboard should behave.

## Evidence
`docs/evidence/mcp-success.png` (API key hidden)

## Notes
The MCP result is design context, not working code. The PRD and POC define the behaviour.