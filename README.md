# HarvestV

HarvestV uses Next.js for both the existing frontend and its JSON backend. One process starts both.

## Start locally (PowerShell)

Requires Node.js 24 or newer.

```powershell
cd E:\Harvest-V-main\harvestv-frontend
npm install
npm run dev
```

Open http://127.0.0.1:3000. Create an account at `/register`, or log in at `/login`.
Use the same hostname each time: cookies for localhost and 127.0.0.1 are separate.
Stop the server with Ctrl+C. Subsequent starts need only `npm run dev` from this folder once dependencies are installed.

## Account storage

The local `.env.local` is configured. No shared secret or external database credentials are required: session tokens and password salts are generated with Node crypto.

SQLite data is in `E:/Harvest-V-main/.harvestv-data/harvestv.sqlite`, outside the web root. Keep this directory to preserve accounts, sessions, farms, feedback, and plans. It and environment files are ignored by Git. Stop the server before copying the whole data directory for a backup. Do not upload databases or `.env.local` to GitHub.

Registration requires a name, Bangladeshi mobile number, district, language, and a 15–128 character password. Local, +880, 880, and Bangla-digit mobile numbers normalize to one unique local number. The phone number is the login identifier and is read-only after registration. SMS ownership verification and password recovery are not implemented.

Passwords use salted scrypt (N=131072, r=8, p=1). Random session tokens are stored as SHA-256 hashes in the database and sent only in HttpOnly, SameSite cookies. Sessions expire after seven days; logout revokes the server-side session. Authentication attempts are throttled in SQLite. Personal APIs check the authenticated account and never accept a user ID from the browser. Legacy anonymous records are retained but are not automatically assigned to a new account.

Language changes in the header persist to the account; district and name can be edited on `/profile`. Profile details are loaded from SQLite after login. Existing farms, feedback, and rotation forms use the authenticated backend. Public weather and location endpoints do not expose saved account data.

## Checks

```powershell
npm run typecheck
npm run build
npm run test:auth
```

`test:auth` runs the actual API route handlers with a real temporary SQLite database. It substitutes only the Next request-cookie adapter, tests two-account privacy, farm ownership, validation, duplicate accounts, hashing, CSRF, logout, rate limiting, session expiry, and restarts a child process to verify saved data and fresh login survive. Test data is removed afterward. This test does not use HTTP or a browser.

During setup on 12 November 2026, backend integration/restart checks passed. The development server started on port 3000, but the execution environment denied local HTTP requests and the browser connection failed. Existing missing Leaflet dependencies could not be installed because registry.npmjs.org DNS access was unavailable, so full build and browser verification remain blocked until `npm install` succeeds on the computer.

## Production

```powershell
npm run build
npm start
```

For an HTTPS deployment set `HARVESTV_COOKIE_SECURE=true`. The configured false value is for this local HTTP setup. Use a persistent writable volume for SQLite, protect backups and host filesystem access, and use HTTPS. This local SQLite architecture is not suitable for an ephemeral serverless filesystem. Account authentication does not verify possession of a phone number; add an SMS provider before relying on verified phone identity.

Existing crop recommendations and expert reply examples retain their previous limitations. This work adds account persistence and access control, not a new agricultural recommendation service.
