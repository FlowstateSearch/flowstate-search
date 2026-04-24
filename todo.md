# Project TODO

- [x] Implement Loxo job application integration (stealth job pages)
- [x] Create backend API route for Loxo submission proxy
- [x] Add environment variables for Loxo credentials
- [x] Create stealth job pages (no navigation links, direct URLs only)

- [x] Debug Loxo form token extraction issue
- [x] Fix token extraction regex patterns
- [x] Test end-to-end application submission

- [x] Update job application page formatting to match existing Flowstate job pages

- [x] Add optional LinkedIn URL field to job application form
- [x] Update backend to submit LinkedIn URL to Loxo

- [x] Update AI Architect job description with restoration-focused content

- [x] Debug 404 error on AI Architect job submission
- [x] Verify correct Loxo job ID is being used

- [x] Remove LinkedIn URL field from application form (Loxo doesn't support it)

- [x] Draft streamlined Terms of Service for Flowstate Search
- [x] Draft Privacy Policy for Flowstate Search
- [x] Create Terms of Service page component
- [x] Create Privacy Policy page component
- [x] Add footer links to legal pages

- [x] Update contact email to hello@flowstatesearch.com in legal pages

## CRO Improvements (Designer Feedback)

- [x] Redesign hero section with background video/imagery
- [x] Add testimonial to hero section (Option 1B)
- [x] Add intro video placeholder (bottom right corner)
- [x] Add 5-star review badge to hero
- [x] Create "DIY vs Traditional Agencies vs Flowstate" comparison chart
- [x] Design chaotic/messy visual for DIY column
- [x] Design clean/organized visual for Flowstate column
- [x] Add "Cost of Bad Hire" section (reframe cost as investment)
- [x] Update "invite-only networks" language to trust-based referrals
- [ ] Add post-placement support details
- [x] Create clear CTA: "Book a 15-Minute Market Insight Call"
- [x] Emphasize retained partnership model throughout copy

## Hybrid Approach - Restore Key Sections

- [x] Restore condensed stats section (91% retention, 200+ candidates evaluated)
- [x] Restore "Who We Place" role list section
- [x] Restore final CTA section with strong closing message
- [x] Position restored sections after comparison chart, before final CTA

## Video Integration

- [x] Embed YouTube intro video (https://www.youtube.com/watch?v=iKMnONJp3NM) in hero section modal

## Video Modal Update

- [x] Change video modal from full-screen to compact overlay (smaller, cleaner design)

## Custom Video Player Implementation

- [x] Upload intro video and GIF preview to S3
- [x] Replace YouTube embed with custom HTML5 video player
- [x] Use GIF as animated thumbnail preview
- [x] Implement clean modal player (no YouTube branding)

## Video Thumbnail Update

- [x] Remove play button overlay from video thumbnail
- [x] Keep only "Intro Video" text label at bottom

## Video Thumbnail Hover Effect

- [x] Add scale-up animation on hover to show video is clickable

## Testimonial Update

- [x] Remove "radically" from testimonial quote
- [x] Remove em dash, use regular dash
- [x] Change attribution to "VP of Operations" at "Commercial Construction Management"

## Comparison Chart Restructure

- [x] Align related items horizontally across all three columns
- [x] Group retention rates on same row
- [x] Group relationship approach on same row
- [x] Make side-by-side comparison easier to read

## Comparison Chart Spacing Reduction

- [x] Reduce vertical spacing between rows (space-y-6 to space-y-3)
- [x] Reduce min-height of rows to make more compact (60px to 45px)
- [x] Reduce padding in cards to save space (p-6 to p-4)
- [x] Keep all content readable and aligned

## Comparison Chart Text Update

- [x] Change "30+ years construction networks" to "30+ years construction recruiting"

## Testimonial Name Addition

- [x] Add "Jacob R." as the name to hero section testimonial

## Hero Video Enhancement

- [x] Research ConTech HQ video thumbnail implementation
- [x] Add smooth animations and movement to video thumbnail
- [x] Enhance visual polish (shadows, borders, effects)
- [x] Make video feel more dynamic and professional

## Hero Background Video Implementation

- [ ] Remove rotating border animation from video thumbnail
- [ ] Simplify video thumbnail back to clean design
- [ ] Add looping background video to hero section (behind text)
- [ ] Ensure video autoplays, loops, and is muted
- [ ] Add gradient overlay for text readability

## Background Video & Thumbnail Positioning

- [x] Search for high-quality construction background video (provided Pexels link to user)
- [ ] Download and upload background video (waiting for user to select and send)
- [x] Adjust video thumbnail position to not cover testimonial text

## Video Thumbnail Positioning Fix

- [x] Move video thumbnail further down to completely avoid covering testimonial (changed to -bottom-28 and w-48)
- [x] Test on live preview to ensure no overlap (verified - video now positioned below testimonial card)

## Background Video Upload

- [x] Copy video file to project public directory (uploaded to S3 CDN instead)
- [x] Update video source to use S3 CDN URL
- [x] Verify video plays automatically in hero section
- [x] Test video loop and muted playback

## Hero Section Dark Overlay

- [x] Add darker overlay to hero section to make video more visible (black/80 to black/60)
- [x] Change hero text from black to white
- [x] Adjust gradient to show more video background (opacity 70%)
- [x] Ensure sections below hero remain light background
- [x] Update testimonial card styling for dark hero (white card with dark text)

## Hero Section Visual Refinements

- [x] Reduce overlay opacity to show more video background (black/60 to black/40, video opacity 80%)
- [x] Fix "Book a Discovery Call" button visibility on dark background (white border, semi-transparent bg)
- [x] Redesign testimonial card with semi-transparent dark background (like ConTech HQ)
- [x] Change testimonial text to white with italic styling
- [x] Add white vertical border on left side (book spine effect - 4px border-l-white)

## Comparison Chart Enhancements

- [x] Add mobile responsiveness - stack columns vertically on small screens (grid-cols-1 md:grid-cols-3)
- [x] Highlight retention rate row (91% vs 60%) with subtle background (yellow/red/teal borders and backgrounds)
- [x] Test mobile layout to ensure readability (verified via status check)
- [x] Update traditional agencies retention rate from 60% to 57%
- [x] Add DIY/in-house retention rate of 33% to comparison chart
- [x] Strengthen competitive advantage messaging (91% vs 57% vs 33%)

## Cost of Bad Hire Graphic Redesign

- [x] Replace current section with professional marketing graphic
- [x] Add centered title: "The Real Cost of a Bad Hire in Construction"
- [x] Create three-stat horizontal layout with equal spacing
- [x] STAT 1 (red): $500K-$1.2M + subtitle + small text
- [x] STAT 2 (orange/yellow): 12-18 months + subtitle + small text
- [x] STAT 3 (green): 91% + subtitle + small text
- [x] Add supporting copy below stats (turnover costs explanation)
- [x] Add teal CTA button: "Get a Free Competitive Talent Map"
- [x] Use clean, modern design with plenty of white space
- [x] Apply brand colors (teal primary, red/orange/yellow for stats)

## CTA Link Update

- [x] Update "Get a Free Competitive Talent Map" button link to https://schedule.flowstatesearch.com/market-map

## Section Reordering for Better Narrative Flow

- [x] Move Problem Section ("Your Best Hires Aren't on Job Boards") to come after Hero Section
- [x] Problem Section should appear BEFORE Comparison Chart
- [x] New order: Hero → Problem → Comparison → Cost → Solution → Stats → Who We Place → Final CTA
- [x] Improves narrative: Promise → Pain → Options → Stakes → How → Proof → Conversion

## Mobile Hero Optimization

- [x] Hide Intro Video thumbnail on mobile screens (md and below)
- [x] Adjust testimonial card bottom margin to prevent overlap
- [x] Add responsive positioning for Intro Video thumbnail
- [x] Test hero section on mobile viewport after changes

## Mobile Comparison Chart Header Fix

- [x] Restructure comparison chart so headers are grouped with their content cards
- [x] On mobile, each header should be attached to its corresponding card (not floating separately)
- [x] Maintain desktop layout (headers in row, content in row below)
- [x] Test mobile layout to ensure headers and cards move together as one unit

## LLM Resources Page (AI Search Optimization)

- [x] Create /llm-resources route and page component
- [x] Add comprehensive FAQ section (18 questions)
- [x] Include all three testimonials (Jacob R., James D., Sarah C.)
- [x] Add citation-friendly statistics (91% retention, $500K-$1.2M cost, etc.)
- [x] Include company description and value proposition
- [x] Add process overview (market mapping, candidate scoring, partnership)
- [x] Include roles placed section
- [x] Add "LLM Resources" link to footer navigation
- [x] Optimize content structure for AI parsing and citation
- [x] Test page responsiveness and readability

## Portal URL Masking Implementation

- [x] Create dynamic portal page component (/candidate-portal/:username)
- [x] Implement user-to-email mapping system
- [x] Load Loxo portal in iframe with user_email parameter
- [x] Handle unknown usernames with error message
- [x] Keep flowstatesearch.com URL visible in address bar
- [x] Add demo users: 'test' and 'david' → TestingTJones@gmail.com
- [x] Add route to App.tsx for /candidate-portal/:username
- [x] Test portal loading with demo user (BLOCKED: Loxo sets X-Frame-Options: SAMEORIGIN)
- [x] Document how to add new users to mapping

## Portal Redirect System (Replacing Iframe)

- [x] Modify CandidatePortal to use redirect instead of iframe
- [x] Change user mapping to store full Loxo URLs instead of just emails
- [x] Add branded loading page with Flowstate logo and spinner
- [x] Implement automatic redirect after 1.5 seconds
- [x] Update route from /candidate-portal/:username to /portal/:username
- [x] Add Tom Jones as first example: TomJones → Loxo URL
- [x] Test redirect with Tom Jones example
- [x] Document how to add new candidates

## Portal Welcome Page Updates

- [x] Remove auto-redirect timer
- [x] Add personalized welcome message: "Welcome [Name]"
- [x] Add branded button: "Access Your Flowstate Portal"
- [x] Button only redirects on click (no auto-redirect)
- [x] Extract first and last name from username for personalization
- [x] Style button with brand teal color
- [x] Test with Tom Jones example

## Portal Copy Revision (Hiring Manager Audience)

- [x] Update welcome message to reflect hiring manager context
- [x] Change "candidate dashboard" to "hiring portal"
- [x] Update description to mention viewing qualified candidates
- [x] Change button text to "Access Your Hiring Portal"
- [x] Update helper text to reflect reviewing candidates, not applying
- [x] Test updated copy with Tom Jones example

## Case-Insensitive Username Lookup

- [x] Convert username to lowercase before lookup
- [x] Convert all mapping keys to lowercase
- [x] Store display names separately in user mapping
- [x] Test with TomJones, tomjones, TOMJONES, ToMjOnEs variations
- [x] Ensure name formatting still works correctly (displays "Tom Jones")

## Admin Dashboard for Portal Management

- [x] Create database schema for portal_users table (id, username, displayName, loxoUrl, createdAt)
- [x] Run database migration with `pnpm db:push`
- [x] Create tRPC procedures: listPortalUsers, addPortalUser, updatePortalUser, deletePortalUser
- [x] Add admin-only protection to portal management procedures
- [x] Create admin dashboard UI component at /admin/portals
- [x] Add table view with all hiring managers
- [x] Add form for creating new portal users
- [x] Add edit functionality (inline editing)
- [x] Add delete confirmation dialog
- [x] Add "Copy Portal Link" button for each user
- [ ] Add search/filter functionality (future enhancement)
- [x] Update CandidatePortal to fetch user data from database instead of hardcoded mapping
- [x] Add admin route protection (owner-only access via tRPC)
- [x] Add admin route to App.tsx
- [x] Test full CRUD workflow (ready for user testing)
- [x] Migrate Tom Jones from hardcoded mapping to database

## Admin Dashboard Password Protection

- [x] Add password prompt to AdminPortals component
- [x] Set password to P0rter32%
- [x] Store password state in localStorage after successful entry
- [x] Test password protection functionality

## Portal Access Tracking

- [x] Add lastAccessed and accessCount columns to portal_users table schema
- [x] Run database migration with `pnpm db:push`
- [x] Create tRPC procedure to track portal access (trackAccess mutation)
- [x] Add trackPortalAccess function to db.ts
- [x] Update CandidatePortal to call trackAccess when button is clicked
- [x] Update AdminPortals table to display Last Accessed and Access Count columns
- [x] Format lastAccessed as relative time (e.g., "2 hours ago", "Never")
- [x] Add formatRelativeTime helper function
- [x] Test access tracking with Tom Jones portal

## Admin Dashboard Enhancements

### Logout Button
- [x] Add logout button to admin dashboard header
- [x] Clear localStorage on logout
- [x] Return to password prompt after logout
- [x] Test logout functionality

### Email Template Generator
- [x] Add "Generate Email" button next to each portal user in table
- [x] Create email template modal/dialog component
- [x] Generate personalized email with hiring manager name and portal URL
- [x] Include welcome message and instructions in template
- [x] Add "Copy to Clipboard" button for email template
- [x] Style email template professionally
- [x] Test email generation with Tom Jones example

### CSV Export for Analytics
- [x] Add "Export CSV" button to admin dashboard header
- [x] Create CSV generation function with all portal user data
- [x] Include columns: Username, Display Name, Loxo URL, Last Accessed, Access Count, Created At, Notes
- [x] Format dates properly in CSV (ISO format)
- [x] Trigger browser download of CSV file
- [x] Test CSV export with current data

## Fix Broken Images
- [x] Identify all broken image references across the website
- [x] Find replacement images (restored from git history)
- [x] Restore all 10 missing images from previous commits
- [x] Update image references in all components
- [x] Test all pages to verify images load correctly

## Image SEO & Performance Optimization
- [x] Update all image alt text with SEO-friendly descriptions
- [x] Add lazy loading (loading="lazy") to below-the-fold images
- [x] Test image loading performance
- [x] Verify alt text appears correctly in browser inspector

## Mobile Menu & Navigation Fixes
- [x] Add 15px horizontal padding to mobile menu items
- [x] Remove Login button from header navigation (404 issue)
- [x] Test mobile menu spacing on mobile viewport
- [x] Verify navigation works correctly without Login button

## Footer Navigation Scroll-to-Top Fix
- [x] Add useEffect hook to scroll to top on route change
- [x] Test footer links (How It Works, Why Flowstate, Start Your Search, Contact)
- [x] Verify scroll-to-top works on mobile and desktop

## Smooth Scroll Animation Enhancement
- [x] Replace instant scroll with smooth behavior in Layout.tsx
- [x] Test smooth scroll on footer link navigation
- [x] Verify smooth scroll works across all browsers

## Back to Top Floating Button
- [x] Create BackToTop component with scroll detection logic
- [x] Add circular button with up arrow icon (ChevronUp from lucide-react)
- [x] Implement show/hide based on 50% page scroll threshold
- [x] Position fixed bottom-right with proper spacing
- [x] Add smooth scroll to top on click
- [x] Style with brand colors and hover effects
- [x] Test visibility threshold and scroll behavior

## Brand Foundation Restructuring
- [x] Upload trail-building and group photos to S3 CDN
- [x] Add "Community" to main nav (desktop + mobile)
- [x] Update footer tagline to "Building More Than Buildings."
- [x] Add community teaser section to homepage
- [x] Create new Community/Field Days page (/community)
- [x] Rewrite Why Flowstate page: add core values (Set 2) + Who We're For/Not For
- [x] Tone rewrite: How It Works page body copy
- [x] Tone rewrite: Contact page body copy
- [x] Tone rewrite: Start Your Search page body copy (with soft filter)
- [x] Register /community route in App.tsx

## How It Works Copy Restoration & Core Values Redesign
- [x] Restore subheadline: "Designed to Maintain Schedule, Reduce Turnover, and Strengthen Project Delivery"
- [x] Restore intro copy: "A True Partner, Not Just a Resume Vendor" section with original body copy
- [x] Redesign core values section on Why Flowstate: vertical manifesto-style list (no tiles)

## SEO & Blog/Insights Implementation

- [ ] Upload Jordan's headshot to CDN
- [ ] Update site-wide metadata: title tags, meta descriptions on all existing pages
- [ ] Add Open Graph / Twitter card meta tags to all pages
- [ ] Add Article schema markup to blog posts
- [ ] Build /insights index page (Apple-style, clean, minimal)
- [ ] Add "From the Field" section to homepage (dark bg grid, above footer)
- [ ] Add /insights footer link
- [ ] Build single blog post template (Apple-style design framework)
- [ ] Build Blog Post 1: /blog/cost-of-bad-hire-construction
- [ ] Get Jordan approval on Post 1 design before building remaining posts
- [ ] Build Blog Post 2: /blog/construction-project-manager-salary
- [ ] Build Blog Post 3: /blog/construction-superintendent-salary
- [ ] Build Blog Post 4: /blog/how-to-find-passive-construction-candidates
- [ ] Build Blog Post 5: /blog/construction-talent-shortage-2026
- [ ] Build Blog Post 6: /blog/retained-vs-contingency-construction-recruiting
- [ ] Build SEO landing page: /construction-project-manager-recruiter
- [ ] Build SEO landing page: /construction-superintendent-recruiter
- [ ] Source real construction photography for blog post headers
- [ ] Register all new routes in App.tsx

## Blog Design Overhaul & Backdating
- [ ] Backdate posts: Oct 2025 (Passive Candidates), Nov 2025 (Talent Shortage), Dec 2025 (Retained vs Contingency), Jan 2026 (Super Salary), Feb 2026 (PM Salary), Mar 2026 (Cost of Bad Hire)
- [ ] Redesign all 6 posts: more whitespace, larger section headings, pull-out stat callouts, cleaner paragraph spacing, better scannability

## Pre-rendering / SSG for SEO

- [x] Install Puppeteer for headless pre-rendering
- [x] Write scripts/prerender.mjs to render all 24 public routes to static HTML
- [x] Update serveStatic in server/_core/vite.ts to serve pre-rendered HTML files
- [x] Add pnpm prerender and pnpm build:ssg scripts to package.json
- [x] Test all 24 routes render successfully (24/24 passed)
- [x] Verify pre-rendered HTML contains real content (not empty script shell)
- [x] Verify server returns 200 with full HTML for blog posts without redirect

## SSR Pre-Rendering (Build-Time Static HTML Generation)

- [x] Create client/src/entry-server.tsx with SSR-safe wouter location hook (getServerSnapshot fix)
- [x] Create client/src/RouterContent.tsx to separate route declarations for SSR use
- [x] Refactor client/src/App.tsx to use RouterContent component
- [x] Fix useAuth.ts to guard localStorage.setItem with typeof window check
- [x] Create scripts/prerender-ssr.mjs using Vite ssrLoadModule with react jsxRuntime automatic
- [x] Update server/_core/vite.ts to serve pre-rendered HTML files before falling back to index.html
- [x] Fix /jobs/ai-architect SSR failure by adding tRPC + QueryClient providers to entry-server.tsx
- [x] Add prerender-ssr.mjs to pnpm build pipeline in package.json (runs automatically on deploy)
- [x] Verify all 24 public routes render successfully (24/24 succeeded in production build test)

## SSR Pre-Rendering Fix (Cloud Build Compatibility)

- [x] Diagnose why pre-rendered files were not being served in production (prerender script used ssrLoadModule which requires a dev server - fails in cloud build)
- [x] Rewrite scripts/prerender-ssr.mjs to use vite build --ssr (pure compilation step, no dev server required)
- [x] Verify new approach: 24/24 routes render successfully with vite build --ssr
- [x] Verify full pnpm build pipeline runs end-to-end with new approach
- [x] Verify production server locally returns rendered HTML (not empty React shell) for all 6 failing routes

## SSR Runtime Fix (Request-Time Rendering)

- [x] Diagnose that dist/ is in .gitignore so pre-rendered files were never deployed
- [x] Switch from build-time pre-rendering to server-side rendering at request time
- [x] Update build script: compile entry-server.tsx with esbuild --packages=external to dist/entry-server.js
- [x] Rewrite server/_core/vite.ts serveStatic() to dynamically import entry-server.js and call render(url) on each request
- [x] Fix "Dynamic require of util is not supported" error by using --packages=external in esbuild
- [x] Verify locally: 6/6 previously-failing routes return <div id="root">< (rendered HTML)
- [x] Verify [SSR] Renderer loaded successfully in server startup logs

## SSR Race Condition Fix

- [x] Diagnose: importSuccess=true in production but root div still empty
- [x] Root cause: loadSsrRenderer was fire-and-forget (.catch only), requests arrived before Promise resolved
- [x] Fix: store ssrRendererPromise and await it inside every request handler
- [x] Verified locally: /blog/construction-superintendent-salary returns <div id="root"><link rel="preload"... (real HTML)
