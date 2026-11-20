# Campus Connect

Campus Connect is a responsive student directory and community landing site built with Nuxt 4 and Vue 3. It introduces students and their experiences while presenting the values and culture of campus life.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Technology](#technology)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization](#customization)
- [Accessibility and Responsive Behavior](#accessibility-and-responsive-behavior)
- [Production Build and Deployment](#production-build-and-deployment)

## Overview

The project presents a welcoming campus community through two main experiences:

- A student-focused home page with a hero section, featured student profiles, and community information.
- An about page explaining Campus Connect's values and purpose.

The interface uses a warm neutral palette, muted green accents, serif display typography, responsive layouts, and reusable Vue components.

## Features

- Responsive desktop, tablet, and mobile layouts
- Smooth navigation and smooth scrolling to the student directory
- Reusable button, header, footer, information card, and student card components
- Featured profiles for Maya Santos, Ethan Reyes, and Leah Cruz
- Active navigation states for Students and About
- Campus illustration built with CSS
- Lazy-loaded student portrait images
- Shared typography and color variables
- SEO title and description configured in Nuxt
- Accessible navigation labels and visible keyboard focus styles

## Pages

### Home: `/`

The home page contains:

- A campus welcome hero
- A call-to-action button that scrolls to the student section
- A link to the About page
- Three featured student cards
- Two community information cards
- A CSS-drawn campus illustration

### About: `/about`

The about page contains:

- A page introduction
- A link back to the student stories
- Three values cards covering student voice, connection, and curiosity

## Technology

- **Nuxt 4.6**
- **Vue 3.5**
- **Vue Router 5**
- **TypeScript**
- **CSS / Scoped Component Styles**
- **npm**

The project uses Nuxt file-based routing and Nuxt's layout system. Google Fonts provides DM Sans and DM Serif Display.

## Project Structure

```text
.
|-- app/
|   |-- app.vue                 # Root Nuxt layout/page container
|   |-- assets/css/main.css     # Global fonts, variables, and base styles
|   |-- components/
|   |   |-- AppButton.vue       # Link or button component
|   |   |-- AppFooter.vue       # Shared footer
|   |   |-- AppHeader.vue       # Shared header and navigation
|   |   |-- InfoCard.vue        # Community or values card
|   |   `-- StudentCard.vue     # Student profile card
|   |-- layouts/
|   |   `-- default.vue         # Shared page shell
|   `-- pages/
|       |-- about.vue           # About page
|       `-- index.vue           # Home/student directory page
|-- public/images/
|   |-- student-ethan-reyes.png
|   |-- student-leah-cruz.png
|   `-- student-maya-santos.png
|-- nuxt.config.ts              # Nuxt and global app metadata
|-- package.json                # Dependencies and npm scripts
`-- package-lock.json           # npm dependency lock file
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

From the project root, install dependencies:

```bash
npm install
```

### Development

Start the local Nuxt development server:

```bash
npm run dev
```

Open the local URL printed by Nuxt, commonly `http://localhost:3000`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run generate` | Generate a static version of the site |
| `npm run preview` | Preview the production build locally |
| `npm run postinstall` | Prepare Nuxt generated files and types |

## Customization

### Student Profiles

Featured students are defined in `app/pages/index.vue` in the `students` array. Each entry can include:

- `name`
- `program`
- `year`
- `quote`
- `photo`
- `accent`

Student card markup is implemented in `app/components/StudentCard.vue`, and portrait files are stored in `public/images/`.

### Page Content

- Edit home page content and sections in `app/pages/index.vue`.
- Edit the mission, heading, and values in `app/pages/about.vue`.
- Update shared branding and links in `AppHeader.vue` and `AppFooter.vue`.

### Theme

Global theme variables and font imports are in `app/assets/css/main.css`. The main variables control:

- Display and body fonts
- Background and text colors
- Muted text
- Primary green
- Border colors

Page-specific styles are scoped inside each Vue page or component.

### Site Metadata

Update the page title, description, and theme color in `nuxt.config.ts`.

## Accessibility and Responsive Behavior

- Semantic `header`, `main`, `nav`, `section`, `article`, and `footer` elements are used.
- Navigation links include meaningful labels and active states.
- Student portraits include descriptive alternative text.
- Decorative symbols are hidden from assistive technology.
- Buttons and links include a visible focus outline.
- Mobile navigation remains available while the optional header call-to-action is hidden.
- Student grids change from three columns to two columns, then one column as viewport width decreases.
- The hero switches from two columns to a stacked layout on smaller screens.

## Production Build and Deployment

Build the server-ready production output:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

For static hosting, generate the output:

```bash
npm run generate
```

The generated static site can be deployed to a compatible static hosting provider.
