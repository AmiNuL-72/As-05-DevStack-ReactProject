# DevStack

DevStack is a responsive React application for exploring modern web technologies and building a personal technology stack. Users can browse technology cards, add their favorite tools, and manage their selected stack in one place.

## Technologies Used

- React 
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify

## Features

1. Browse technologies by category with responsive technology cards.
2. Add technologies to a personal stack with duplicate-selection protection.
3. Remove individual technologies or clear the entire stack with toast notifications.

## Getting Started

```bash
npm install
npm run dev
```

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like markup inside JavaScript or TypeScript. React uses JSX to describe what the user interface should look like.

### 2. What is the difference between props and state?

Props are read-only data passed from a parent component to a child. State is data managed inside a component that can change over time and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a functional component. In this project, it stores the selected technologies in `App.tsx` and controls whether the mobile menu is open in `Nav.tsx`.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders, such as fetching data. This project does not use `useEffect` for JSON loading; it fetches the data with a promise, reads it with React's `use()` API, and shows a `Suspense` loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the unique `key` to identify each list item. This helps React update only the items that changed and keeps rendering efficient and predictable.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In `YourStack.tsx`, the empty-stack message is shown when `selectedStack.length` is `0`; otherwise, the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data and functions to a child through props. When shared state is moved to the closest common parent, it is called **lifting state up**. The child calls a function prop to send an event or value back to the parent. In this project, `selectedStack` is kept in `App.tsx` and passed with handler functions to `TechnologiesSection` and `YourStack`.
