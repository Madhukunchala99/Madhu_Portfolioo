# Verification and local QA

## Verified in build environment
- V4 starter source and all supplied images/resumes retained
- Static JS/JSX brace and tag consistency scans passed
- CSS parsed by tinycss2 with no syntax errors
- Public images, original MANTHAN certificate, organization logos and all four resume PDFs retained
- Final ZIP integrity checked

## Requires testing on a local PC (not falsely marked passed)
The npm registry is unavailable in the build container; `npm install --offline` fails with ENOTCACHED for the Vite plugin. Therefore npm build, real browser performance and animation behaviour were not exercised here.

Run inside the extracted folder:
```powershell
npm install
npm run dev
npm run build
```

Test: first-load opening, notebook page flip and 01–04 index, modal ability progress then card tilt/flip, separate globe/date/time, bulb hover/drag/click, door hover/open, experience clock and scroll accent, correct organization logos, certification modal, LinkedIn CTA, form and responsive layout. Netlify must be configured with Gmail submission notifications independently after deployment.


## Latest patch
- Added a short 2-second counter before the existing opening sequence.
- Added subtle animated colour/light effects to Experience, Education, Hackathons and Certifications sections.
- Left the rest of the Detail-Fixes layout and content unchanged as requested.
