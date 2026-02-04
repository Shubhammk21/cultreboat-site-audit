Findings and investigation for Project Cultre Boat

Technology

* Next.js App Router with SSR output, heavy hydration.
* JavaScript ES modules, many async chunks at load.
* PIXI.js WebGL canvas as primary visual layer.
* Utility-first CSS classes, likely Tailwind.
* Global custom cursor and animation system.
* Polyfills for broader browser support.
* Site depends on client runtime for meaningful interaction.

Performance

* Over 10 JavaScript chunks requested on first load.
* WebGL initializes immediately before user interaction.
* Loader overlay blocks UI until animation sequence ends.
* Massive scroll container forces continuous layout work.
* Canvas and animations run when off-screen.
* Result: slow Time to Interactive, high CPU and GPU use, poor mobile performance.

UX

* No visible headline on first meaningful paint.
* Hero prioritizes animation over message.
* Navigation present in DOM but hidden initially.
* Cursor removed globally without user consent.
* Scroll cue lacks context.
* Result: users do not grasp purpose or next steps quickly.

Accessibility

* Canvas used without semantic fallback.
* Missing visible structural landmarks for assistive tech.
* Cursor removal harms keyboard and screen reader users.
* No handling of prefers-reduced-motion.
* Text contrast depends on animated background.
* Result: exclusion of keyboard only, motion sensitive, and low vision users.

SEO

* Title and meta description exist.
* No H1 visible in initial HTML.
* Core messaging appears only after JavaScript runs.
* Result: weak semantic signals for crawlers, underused SSR.

Code and architecture

* Visual, interaction, and content layers are tightly coupled.
* Global animation lifecycle with limited isolation.
* Event listeners and loops lack clear cleanup.
* Result: maintenance burden, harder scaling, unpredictable runtime.

Priority fixes for performance

* Defer PIXI and WebGL initialization until first scroll, user interaction, or browser idle.
* Pause or destroy animations when off-screen.
* Replace huge scroll container with virtualized or segmented scrolling.
* Reduce continuous animation loops and CPU-bound timers.
* Split critical content into a small initial JS bundle.

Priority UX fixes

* Render a server-side visible headline and short value proposition.
* Delay nonessential motion until after message appears.
* Reveal navigation immediately after loader exit.
* Apply custom cursor only after first user interaction.

Priority accessibility fixes

* Mark canvas as decorative when noninteractive, provide semantic fallback content.
* Restore default cursor for keyboard and assistive users.
* Respect prefers-reduced-motion and provide a static fallback.
* Ensure text contrast remains sufficient over animated backgrounds.

Priority SEO fixes

* Add a meaningful H1 in initial HTML.
* Place core service keywords inside server-rendered content.
* Improve heading hierarchy for crawlers.
* Preserve existing copy, change structure and delivery.

Code and structural actions

* Separate content rendering from visual enhancements.
* Scope animation lifecycle to specific sections and components.
* Unregister event listeners on unmount and stop animation loops.
* Minimize global JS execution and isolate heavy tasks.

Expected outcomes

* Faster perceived load and improved Core Web Vitals.
* Lower device resource use.
* Faster user comprehension and reduced bounce.
* Broader accessibility coverage and better SEO.
* Easier maintenance and predictable runtime behavior
