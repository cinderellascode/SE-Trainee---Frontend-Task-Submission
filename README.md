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

![Demo Screenshot](<img width="1366" height="669" alt="demo" src="https://github.com/user-attachments/assets/80b85974-ce6a-4932-be5e-d110ee6b31c5" />
) <!-- Add your screenshot here -->

---

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/cinderellascode/SE-Trainee---Frontend-Task-Submission.git
    cd SE-Trainee---Frontend-Task-Submission
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

### Summary

This project is a well-structured, user-friendly JSON schema builder with support for nested fields and live preview. It follows modern React and Ant Design practices, making it easy to maintain and extend. The recursive nested field logic and real-time preview provide a powerful schema-building experience.


## License

MIT
