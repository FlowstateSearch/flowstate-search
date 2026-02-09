ALTER TABLE `portal_users` ADD `lastAccessed` timestamp;--> statement-breakpoint
ALTER TABLE `portal_users` ADD `accessCount` int DEFAULT 0 NOT NULL;