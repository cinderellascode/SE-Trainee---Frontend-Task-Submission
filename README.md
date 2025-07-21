# JSON Schema Builder

A React application to visually build JSON schemas with support for nested fields and live preview. Built using [Ant Design](https://ant.design/) and [react-hook-form](https://react-hook-form.com/).

---

## Features

- **Add/Edit/Delete Fields:** Easily add, edit, and delete fields of type `string`, `number`, or `nested`.
- **Nested Fields:** Recursively add sub-fields by selecting the `nested` type.
- **Live JSON Preview:** Instantly see your schema as you build it.
- **Ant Design UI:** Clean, responsive interface.
- **React Hook Form:** Efficient form state management.

---

## Demo

![Demo Screenshot](demo-screenshot.png) <!-- Add your screenshot here -->

---

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/<your-username>/<repo-name>.git
    cd <repo-name>
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Usage

1. **Add Field:** Click "Add Field" to create a new schema field.
2. **Set Field Type:** Choose `string`, `number`, or `nested` from the dropdown.
3. **Nested Fields:** If `nested` is selected, you can add sub-fields using the "Add Nested Field" button.
4. **Delete Field:** Remove any field using the "Delete" button.
5. **Live Preview:** See the JSON schema update instantly on the right.

---

## Technologies Used

- **React** (functional components, hooks)
- **Ant Design** (`antd`)
- **react-hook-form** (form state, field arrays)
- **Vercel** (recommended for deployment)

---

## Deployment

### Deploying to Vercel

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your repository.
4. Vercel auto-detects your React app and sets up the build.
5. Click **"Deploy"**.
6. Your app will be live and auto-updated on every push to GitHub.

---

## Documentation Review

### Overview

**JSON Schema Builder** is a React application that enables users to visually construct a JSON schema using a dynamic, nested form interface. The app supports adding, editing, and deleting fields (including nested fields), and provides a live JSON preview. It uses Ant Design for UI components and `react-hook-form` for form state management.

### Features

- **Add/Edit/Delete Fields:** Users can add new fields, specify their type (`string`, `number`, or `nested`), and delete fields.
- **Nested Fields:** Selecting the `nested` type allows users to add sub-fields recursively. The "Add Nested Field" button is always visible in nested sections.
- **Live JSON Preview:** The right panel displays the schema in real time as the user edits the form.
- **Ant Design UI:** Clean, responsive interface using Ant Design components.
- **React Hook Form:** Efficient form state management and validation.

### Main Components

#### 1. `SchemaBuilder`
- **Purpose:** Main component that manages the schema form and JSON preview.
- **Hooks Used:**  
  - `useForm` for form state.
  - `useFieldArray` for dynamic field arrays.
  - `useWatch` for real-time updates.
  - `useMemo` for efficient JSON preview rendering.
- **UI:**  
  - Left: Form builder.
  - Right: Live JSON preview.

#### 2. `SchemaBuilderNested`
- **Purpose:** Handles nested fields recursively.
- **Features:**  
  - Add, edit, and delete nested fields.
  - "Add Nested Field" button is always visible for nested arrays, allowing users to add sub-fields at any nesting level.

### Usage

1. **Add Field:** Click "Add Field" to create a new schema field.
2. **Set Field Type:** Choose `string`, `number`, or `nested` from the dropdown.
3. **Nested Fields:** If `nested` is selected, you can add sub-fields using the "Add Nested Field" button.
4. **Delete Field:** Remove any field using the "Delete" button.
5. **Live Preview:** See the JSON schema update instantly on the right.

### Code Quality

- **Modular:** Separation of concerns between main and nested field logic.
- **Hooks Compliance:** All hooks are used inside components, following React best practices.
- **Live Updates:** Uses `useWatch` for real-time form state tracking.
- **Recursive Rendering:** Nested fields are handled recursively, allowing unlimited nesting.

### Recommendations

- **Validation:** Add field name/type validation for better UX.
- **Export/Import:** Consider adding export/import functionality for schemas.
- **Styling:** Customize Ant Design theme for branding if needed.
- **Conditional Nested Button:** Optionally, show "Add Nested Field" only when the parent field type is `nested`.

### Summary

This project is a well-structured, user-friendly JSON schema builder with support for nested fields and live preview. It follows modern React and Ant Design practices, making it easy to maintain and extend. The recursive nested field logic and real-time preview provide a powerful schema-building experience.

---

## License

MIT
