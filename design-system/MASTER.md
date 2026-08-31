# Design System - Geo Survey Tech HRMS

Mode: preserve   Dials: V5 / M3 / D8
Reference implementation: `src/modules/Dashboard/pages/Dashboard.jsx`

Product    Employee self-service portal for a geospatial surveying firm operating across UAE, KSA,
           Qatar and India. Field crews and office staff use it in short bursts: check in at a named
           survey site, file leave, pull a payslip, find a colleague. Attendance is geofenced, so a
           check-in is a location event, not a timesheet entry. The Dashboard is the primary surface.

Playbook   Operate, "Management system / admin / internal tool" row. Reference products: Linear,
           Height, Attio. Explicitly NOT the SaaS-landing reference class; nothing here is marketing.

Source     Brand measured live from https://geosurveytech.com/ via chrome-devtools, not guessed:
           body Plus Jakarta Sans 16px on #FFFFFF, ink #333333; headings weight 500 at 58px with
           -1.3px tracking; accent #0C95E9 (dominant, 153 uses), secondary #2F84C4, light #4BC4FF,
           surface tint #F2F6F6; radius 8px throughout with 50% circles and 100px pills;
           transitions 0.3s ease, 0.4s ease on slower reveals.
           The site tells its services through PHOTOGRAPHY, not icons. Its entire icon vocabulary is
           a handful of thin monoline glyphs (footer carets, play, social). There is no duotone
           anywhere and no second accent stroke. That restraint is the icon brief.

Colour     accent cyan --pri #29ABE2 / --pri-d #1B87B8 / --pri-bg #E3F3FC
           ink navy --ink #26308C / --ink-2 #3D49B5 / --ink-bg #E9EBFA / --ink-solid #26308C
           semantic --ok #0E9F6E, --warn #B7791F, --bad #D64550, each with a -bg pair
           1 accent | --bg canvas vs --surface card, both modes | dark mode raises lightness for
           elevation and drops chroma, it is not an inversion | --brand-sweep navy to cyan for the
           login hero, the payroll headline tile and announcement avatars
           Deviation, deliberate: --pri is the approved canvas cyan #29ABE2, which matches the logo
           artwork, not the live site's #0C95E9. Both are cyan; the canvas is the authority for the
           app. Revisit only if the client asks the two to match exactly.

Type       heading Plus Jakarta Sans, tracking -0.02 to -0.03em above 32px | body Plus Jakarta Sans
           15px, lh 1.5-1.75 | tabular-nums on every metric, table cell, time and amount
           Weights: 500 body, 600-700 headings, 800 reserved for the login hero and payroll figure

Density    stat tile icon 38px | quick-access icon tile 42px | sidebar 264px | body 13-15px
           desktop scaled to 80% via html zoom so dense tables fit

Shape      space 4 8 12 16 24 32 48 64 96 | radius container 14px control 10px pill for tabs
           icons Phosphor, weight "regular", one family and one weight app-wide
           sizes 16px inline with text, 20px standalone. No other icon size.

Motion     CSS keyframes, gated on prefers-reduced-motion | gs-fade .45s, gs-pop .22s,
           gs-drift 18s decorative | 200ms interaction feedback | theme switch never animates

Icons      Keyed by role, not shape, in `src/shared/components/Icon.jsx`, so two screens cannot pick
           different glyphs for the same destination. Two roles read geospatial because the action
           genuinely is: `siteCheckIn` is a map pin (attendance is a geofenced site check-in) and
           `user` is an ID badge (field identity is the site badge). Everything else stays
           conventional; a survey metaphor on a payslip only makes a standard task harder to read.

Signature  The Check In stat tile on the Dashboard. Its map pin is the one accent-bearing glyph on
           the screen, and it turns cyan-on-cyan only while the user is actually checked in at a
           site, so the single geospatial icon in the product is also its live state indicator. On
           the primary task path, earns the accent as a state signal.

Banned     em-dash and en-dash in any visible string or shipping comment | hand-rolled SVG icons |
           duotone or accent-overlay icons | icon weight changing on hover or selection | a second
           accent | Lucide, Heroicons, Feather, emoji as icons | display fonts in labels or data

Rejected   Phosphor "fill" weight for the active nav item. It is the common Phosphor convention, but
           it breaks the one-global-weight rule and makes the glyph jump optically against its
           regular-weight neighbours. Selection is carried by the navy pill, the white fill and the
           cyan left bar instead, which is already three signals.
           Survey-equipment glyphs (theodolite, drone, scanner) for nav items. They would be
           decoration standing in for wayfinding: a user hunting for "Payroll" scans for a receipt,
           not for a tripod.

Deviations html `zoom: 0.8` above 1024px is a blunt way to hit the intended density. It works but is
           not a real type scale; a proper rem scale would replace it.
           `Header.jsx` and `Sidebar.jsx` import List, Moon, Sun and X from Phosphor directly rather
           than through the Icon map. Same family and weight, so consistent, but the roles are not
           registered centrally.
