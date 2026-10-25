# LIFEOS

LIFEOS is a South African career, skills, employment and networking prototype for students, graduates and first-time earners. It brings together opportunity discovery, community circles, skill quests, roadmap planning, AI coach prompts, messaging and a lightweight money view in one app.

## Stack
- Vite + Vanilla JavaScript
- Supabase Auth + Postgres
- Local demo fallback (localStorage) when Supabase is not configured

## Setup
1. `npm install`
2. Copy `.env.example` to `.env` and add your Supabase values.
3. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.
4. Run `supabase/seed.sql` in the same editor.
5. `npm run dev`

## Features
| Area | Status |
| --- | --- |
| Opportunity discovery | Real in demo mode, simulated in production |
| Profile, skills and experience | Real with Supabase persistence |
| Sign-up / sign-in / reset / verification | Real with Supabase Auth |
| Marketplace, AI coach, money sim | Demo / simulated |
| Roadmap, circles, feed, messages | Demo / simulated |
| Experience section on Me screen | Added |

## Remaining tasks
- Add full real-time Supabase sync for all screens
- Replace demo-only marketplace and coach flows with live rules or backend workflows
- Expand RLS and policy coverage for secondary tables
- Add stronger validation around application tracking and saved items
- Add automated tests for build, schema and auth flows
