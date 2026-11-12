# HarvestV frontend and backend

See [the project README](../README.md) for setup, account security, persistence, API behavior, checks, and current verification limitations.

## Commands

```powershell
npm install
npm run dev
```

Open http://127.0.0.1:3000. Next.js starts the UI and API together.

```powershell
npm run typecheck
npm run build
npm run test:auth
```

## Private API

| Route | Purpose |
| --- | --- |
| POST /api/auth/register | Create an account and session |
| POST /api/auth/login | Authenticate by phone and password |
| POST /api/auth/logout | Revoke the current session |
| GET /api/profile | Read the current account profile |
| PUT /api/profile | Update name, district, and language |
| PATCH /api/profile | Update language preference |
| GET, PUT, PATCH /api/farms | Read, save, and select the current account's farms |
| GET, POST /api/feedback | Read and save the current account's feedback |
| GET, PUT /api/rotation | Read and save the current account's rotation selection |
| POST /api/information-check | Save a private information check |

State-changing requests require a matching Origin header; JSON endpoints also require Content-Type: application/json. Private APIs return 401 for a missing, invalid, expired, or revoked login session. All private responses use Cache-Control: no-store.

The frontend retains its existing design assets and styles. Added `/login` and `/register` reuse the profile form styling. `/profile` loads saved account information and supports logout. Weather, NASA climate, and location search remain public and depend on their existing providers. SMS verification, account recovery, and live expert replies are not included.

Old anonymous-session check scripts predate authentication. Use `npm run test:auth` for the account-based backend tests.
