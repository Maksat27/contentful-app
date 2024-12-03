# Contentful CMS Projects App

This React application fetches project data from Contentful CMS and displays them in a responsive gallery format. The app uses a custom hook for fetching data and features a dynamic project list along with a hero section.

## Live Demo

You can access the live app here: [Unsplash Image Gallery App](https://contentfu1-cms-app.netlify.app/)


## Features

- **Dynamic Project Fetching**: Fetches project details (title, image, and URL) from Contentful CMS.
- **Hero Section**: Displays an introductory banner with an image and description.
- **Responsive Design**: Optimized for different screen sizes.
- **Custom Hook**: Uses a custom React hook (`useFetchProjects`) to manage data fetching and state.
- **Integrated Tools**: Utilizes design assets from [Undraw](https://undraw.co/) and project modeling via [Contentful](https://www.figma.com/file/XtVr3JRCGWyZESYxd9EhZK/Contentful?node-id=0%3A1&t=SNnU6FgNUQXktIFb-1).

## Components

### `App`

- Main component that renders the `Hero` and `Projects` sections.

### `Hero`

- Displays a banner with a title, description, and an image sourced from [Undraw](https://undraw.co/).

### `Projects`

- Fetches and displays project data using the `useFetchProjects` hook.
- Shows a loading state while fetching data and displays project links once available.

### `useFetchProjects`

- Custom hook for fetching project data from Contentful CMS.
- Returns the loading state (`isLoading`) and the list of projects (`projects`).

## Contentful CMS

The app fetches data from a Contentful CMS space. Ensure the following setup in your Contentful account:

1. **Content Model**:

   - Content type ID: `projects`
   - Fields:
     - `title` (Text)
     - `url` (Link)
     - `image` (Media)

2. **API Credentials**:
   - Obtain your Space ID and Access Token from the Contentful dashboard.

## Usage

1. Open the app in your browser after running it locally or deploy it to a hosting service.
2. The **Hero Section** provides a brief introduction.
3. The **Projects Section** lists all projects fetched from Contentful CMS with links to view them in detail.

## Resources

- [Undraw](https://undraw.co/): Free customizable illustrations used in the hero section.

## Figma Design

You can view the Figma design of this project here:
[Figma Design Link](https://www.figma.com/file/XtVr3JRCGWyZESYxd9EhZK/Contentful?node-id=0%3A1&t=SNnU6FgNUQXktIFb-1)

## License

This project is open-source and available under the MIT License.
