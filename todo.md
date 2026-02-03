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
