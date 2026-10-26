# SkillSpring Responsive Landing Page

A responsive product landing page for **SkillSpring**, a fictional online learning platform. Built with HTML, CSS, and vanilla JavaScript.

## Run the project
1. Download and extract `SkillSpring_Landing_Page.zip`.
2. Open the extracted `SkillSpring_Landing_Page` folder.
3. Double-click `index.html` to open it in your browser.
4. For the best development experience, open the folder in Visual Studio Code and use the **Live Server** extension.

No build tools or package installation are required. An internet connection is used only to load the optional Google Fonts; the page otherwise works locally.

## Working interactions
- Header navigation scrolls to page sections.
- Mobile navigation opens and closes.
- Course arrow buttons take the user to the waitlist form and display the selected course context.
- Email form validates the email and displays a demo success message.
- Buttons and cards have hover/focus-friendly interaction styling.

**Note:** This is a front-end student demo. The waitlist form does not send or store data on a server.

## Target audience
Students, beginners, and curious professionals who want practical skills in design, web development, and communication.

## Design choices
- **Visual style:** warm off-white background, dark charcoal text, and bright lime accents for an optimistic, approachable feel.
- **Typography:** Manrope for bold headings and DM Sans for readable body copy.
- **Layout:** responsive two-column hero on desktop, three feature cards, course cards, testimonial, call-to-action, and footer.
- **Spacing:** consistent container width, section padding, rounded cards, and reusable button styles.
- **Accessibility:** semantic HTML, form labels, responsive navigation state, and live status messages.

## Reusable components
1. Brand/logo lockup (`.brand`, `.brand-mark`)
2. Buttons and round course action buttons (`.button`, `.round-arrow`)
3. Feature cards (`.feature-card`)
4. Course cards (`.course-card`)
5. Eyebrow section labels (`.eyebrow`)

## Figma style guide
Use these as shared Figma styles:
- **Ink:** `#202326`
- **Paper:** `#FBFAF7`
- **White:** `#FFFFFF`
- **Accent lime:** `#C9F36A`
- **Lilac:** `#E6DEFB`
- **Mint:** `#D8F3E7`
- **Peach:** `#FFE1D3`
- **Heading font:** Manrope ExtraBold
- **Body font:** DM Sans Regular / Medium
- **Desktop frame:** 1440 px wide; content container around 1160 px
- **Spacing scale:** 8, 12, 16, 24, 32, 48, 64, 96 px
- **Auto Layout suggestions:** use horizontal Auto Layout for header/navigation and button contents; vertical Auto Layout for cards and content sections; set card padding to 24–28 px and gaps to 12–20 px. Create reusable components for buttons, feature cards, course cards, and the logo lockup.
