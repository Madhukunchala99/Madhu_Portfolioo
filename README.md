# Madhu Portfolio V4 — Original Interactive AI & Data Portfolio

An editable React + Vite portfolio inspired by the *interaction patterns* in therishithakor.com. All source code, themed artwork, and visual styling in this ZIP are original. Not an exact or licensed reproduction of the reference website.

## Start here

```bash
npm install
npm run dev
```

The terminal displays the local URL, usually http://localhost:5173/. Open **the inner directory containing `package.json`** if Windows extracts a nested folder.

For production:

```bash
npm run build
npm run preview
```

Requires a modern Node.js LTS release. Development tested by source parsing only in the authoring environment; full npm build and browser interaction testing are required on your machine.

## What's new in V4

- 3D paper-flip professional-title notebook, animated availability pill, physical hanging pull-cord theme switch.
- Four interactive doors (AI, ML, analytics, data engineering), with **at least 6 project entries each** (some projects appear in multiple roles).
- Distinct original SVG illustrations for each project, plus AI-generated editorial delivery cover. They are **not fabricated dashboard screenshots**.
- Project details show problem / method / impact / stack, and provide GitHub and live buttons only for known URLs.
- Smart Event Management Portal and Clotzy Subscription E-Commerce included as **web/product engineering projects**, not falsely labelled ML models. Project-specific links are not known; add them below.
- Refined holographic ability card with editable illustrative self-assessed percentages. Percentages are **not objective verified skill ratings**.
- Current Calibo AI training emphasized in separate professional timeline; KIA and Codeyoung below; separate Education section.
- Clickable animated certification *display cards*. They are **not issued certificates**. Real certificate scans are pending.
- Netlify Forms contact wizard, with local `mailto:` fallback.
- All four user-supplied resumes, including separate Business Analyst resume. **No Data Engineer resume** has been supplied; the unavailable option is clearly labelled.

## Editable data files

- `src/data/profile.js`: About Me, journey, education, credentials, role skills, resume mappings.
- `src/data/projects.js`: all project entries, category tags, metrics, repository and live URLs.
- `src/styles/main.css`: themes, transitions, responsive rules.
- `public/projects/covers/`: one illustration per project; replace with genuine screenshots when available.
- `public/resumes/`: the uploaded PDF resumes.
- `public/images/`: the supplied edited black-suit portraits and transparent cutouts.

## Contact forms and Gmail delivery — **setup required**

This is not magically connected to your Gmail account yet. The static hidden form in `index.html` allows Netlify to detect the form at deploy time.

1. Push this project to GitHub and deploy to **Netlify** with build command `npm run build` and output directory `dist`.
2. Confirm form detection is enabled in Netlify **Forms**, and submit a test enquiry from the live Netlify app.
3. Open your Netlify site's **Forms → Submission notifications → Add notification → Email notification**.
4. Choose `kunchalamadhu824@gmail.com`. If Netlify requests recipient verification, **confirm it from your inbox**.
5. Submit a second test enquiry and check both Netlify Forms submissions and Gmail (including Spam).

This site uses the Netlify Forms endpoint only when hosted on `*.netlify.app`. If you add a custom domain, update the hostname check in `src/components/ContactWizard.jsx` (or add a deployment-specific environment condition) so the form uses Netlify rather than opening the user's email app. On local development, it opens the visitor's email application and **the visitor must press Send**. It does not silently transmit a message.

See https://docs.netlify.com/manage/forms/setup/ and https://docs.netlify.com/manage/forms/notifications/ for the current dashboard instructions.

## Asset and truthfulness notes

- Original issuer-issued AWS, ServiceNow, Udemy, MANTHAN, and Lumens certificate documents **have not been attached** to this build. We intentionally do not generate authentic-looking certificates. Add originals under `public/certificates/` and link them from `CertificateShowcase.jsx` after verification.
- Company and university identifiers are **text wordmarks**, not licensed/verified official logos. Replace them with official supplied logos if authorized.
- The user-provided project achievements and metrics have been preserved; no new performance numbers have been invented.
- The public GitHub profile contains more repositories than can be fully validated from public search. The catalogue prioritizes verified major repositories and previously shared project notes, with fallback detail cards for unverified individual links.
- The ability-card percentages `78 / 82 / 76 / 68` are **placeholder self-assessments** editable in `src/components/AbilityCard.jsx`. Remove or update them if you prefer no numeric claim.

## Known links still needed

- Specific GitHub repository and/or live website for **Smart Event Management Portal**.
- Specific GitHub repository and/or live website for **Clotzy Subscription E-Commerce**.
- Any project-specific public repository URL currently omitted in `src/data/projects.js`.
- A dedicated Data Engineer resume.

## Production checklist

- Run `npm install`, `npm run build`, `npm audit` on your own machine.
- Test project cover click-through, every role, role resumes, rotating notebook, ability-card flipping, hanging-cord theme switch, forms and notification email.
- Test at phone, 1440p and 4K viewports. CSS adapts to wide screens, but 4K pixel-perfect testing has not yet been performed.
- Run Lighthouse and check keyboard focus, motion reduction, contrast and mobile performance.
- Do not include private credentials or personal secrets in a public repository.


## V4 layout-preserving patch
This release starts from the **original V4 source**. The original page layout, door design, component order, typographic sizing, card positions, and main stylesheet are retained. Targeted modifications: (1) remove third hero resume button; (2) two-face notebook flipping; (3) authentic institution logos in existing timelines; (4) credential logos, separate hackathon cards and original MANTHAN PDF; (5) correct Lumens runner-up wording; (6) known Clothzy and Subscription live URLs; (7) preserve all original project covers and original V4 cards.

The Lumens card is self-designed recognition, not an official certificate. Subscription URL may require access authorization. Netlify email notifications still require account-side setup; do not assume submissions will arrive in Gmail before testing deployment.

## V4 Final targeted refinements
See `CHANGELOG.md` for exact scoped changes and `TESTING.md` for verification and limitations.
The V4 layout, colours, and four-door composition are intentionally retained. Logo filenames were corrected and an original hanging AI charm added.


## Latest patch
- Added a short 2-second counter before the existing opening sequence.
- Added subtle animated colour/light effects to Experience, Education, Hackathons and Certifications sections.
- Left the rest of the Detail-Fixes layout and content unchanged as requested.
