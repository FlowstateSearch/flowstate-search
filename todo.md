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
