# SchoolSite Pro (Full-Stack, 1-page)

A professional school homepage built with:
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **SQLite** via **better-sqlite3** (backend storage)

## 1) Run it in VS Code (Windows/Mac/Linux)

1. Install **Node.js LTS** (>= 18).
2. Open this folder in **VS Code**.
3. Open VS Code terminal and run:

```bash
npm install
npm run dev
```

4. Open:
- http://localhost:3000

## 2) Confirm the backend works

- Scroll to **Contact** section.
- Submit the form.
- Your messages will be stored in:
  - `data/contacts.db`

You can also test the API in your browser:
- http://localhost:3000/api/contact  (shows `{ ok: true, count: ... }`)

## 3) Customize (fast)

- Change school name/text: `app/page.tsx`
- Global styles: `app/globals.css`

## 4) Build for production

```bash
npm run build
npm start
```

## Notes
- This is a **full-stack** demo: frontend + API route + database.
- If you want, you can add an **admin page** later to read submissions.
