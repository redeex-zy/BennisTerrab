import Database from "better-sqlite3";

type Payload = {
  name: string;
  email: string;
  message: string;
};

function getDb() {
  // This file is created on first write.
  const db = new Database("data/contacts.db");
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
  return db;
}

function isEmail(x: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (name.length < 2) return Response.json({ ok: false, error: "Name is too short" }, { status: 400 });
  if (!isEmail(email)) return Response.json({ ok: false, error: "Email is invalid" }, { status: 400 });
  if (message.length < 10) return Response.json({ ok: false, error: "Message is too short" }, { status: 400 });

  try {
    const db = getDb();
    const stmt = db.prepare("INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, ?)");
    stmt.run(name, email, message, new Date().toISOString());
    db.close();
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message || "DB error" }, { status: 500 });
  }

  return Response.json({ ok: true });
}

export async function GET() {
  // Simple health check: how many messages stored
  try {
    const db = getDb();
    const row = db.prepare("SELECT COUNT(*) as n FROM contacts").get() as { n: number };
    db.close();
    return Response.json({ ok: true, count: row.n });
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message || "DB error" }, { status: 500 });
  }
}
