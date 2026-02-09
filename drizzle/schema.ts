import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Portal users table for managing hiring manager access to candidate portals.
 * Each entry represents a hiring manager who can access their personalized portal.
 */
export const portalUsers = mysqlTable("portal_users", {
  id: int("id").autoincrement().primaryKey(),
  /** Unique username used in the portal URL (e.g., 'tomjones' for /portal/tomjones) */
  username: varchar("username", { length: 100 }).notNull().unique(),
  /** Display name shown on the welcome page (e.g., 'Tom Jones') */
  displayName: varchar("displayName", { length: 200 }).notNull(),
  /** Full Loxo portal URL with user_email parameter */
  loxoUrl: text("loxoUrl").notNull(),
  /** Optional notes about this hiring manager */
  notes: text("notes"),
  /** Last time the hiring manager accessed their portal */
  lastAccessed: timestamp("lastAccessed"),
  /** Number of times the hiring manager has accessed their portal */
  accessCount: int("accessCount").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PortalUser = typeof portalUsers.$inferSelect;
export type InsertPortalUser = typeof portalUsers.$inferInsert;

// TODO: Add your tables here