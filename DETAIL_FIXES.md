# V4 Detail Fixes — focused patch

Base: `Madhu-Portfolio-V4-Precision-Update` (unchanged architecture and page order).

- Desktop header: corrected the conflicting centered-navigation rules. Navigation and clock sit in proportioned lanes; hanging bulb hangs just after the clock instead of floating at the viewport edge.
- Portrait: only a small radial area under the cursor reveals colour, rather than colouring the entire photograph. Pointer leave hides the reveal. Original portrait and pose are preserved.
- LinkedIn portrait: displays the supplied transparent cutout without imposing an additional rectangular background, preserving the right-hand presentation gesture.
- Footer robot: animated waving hand and a permanent small “Say hello” cue; detailed “Get in touch” bubble appears on hover or keyboard focus and the robot remains clickable.
- Experience/Education: subtle gold progress stroke follows scroll and clock hands rotate in response to scroll. Existing cards, copy and logos unchanged.
- Added responsive rules and a reduced-motion fallback.

## Important
This update has **not** altered the four-door design, notebook, projects, certification content, resume PDFs, or hero text layout. The appearance of colour in the suit is a local CSS accent; it is not a re-generated portrait.

## Testing
`npm install` could not complete in this environment because the npm registry is unavailable. Run `npm install`, `npm run dev`, and `npm run build` on your machine before publishing.
