### Posts Feed with Search Web Application

Welcome to the Posts Feed with Search Web Application! This application allows users to create text posts, add comments, and search for both posts and comments. Read through this README to understand how to set up, use, and contribute to the project.

## User Authentication:
Users are prompted to enter their name and password before accessing the main page.

## Post Creation:
Users can create new text posts, including a message and the user's name.

## Comment Addition:
Users can add comments to any existing post, providing a message and their name.

## Search Functionality:
- The application allows users to search for all posts and comments.
- Search results replace the content of the latest posts.

## Dynamic UI:
- If posts are available, they are displayed.
- If there are no posts, a message encourages the user to create a post.
- During searches, a spinner indicates that a search is in progress.
- If the search returns no results, a message informs the user.

### Getting Started

## Prerequisites
Make sure you have the following installed on your machine:

- Node.js
- npm

## Installation
- Clone the repository:

```bash
git clone https://github.com/psychologicalname/kennect_assesment.git
cd kennect_assesment
```

- Install dependencies:

```bash
npm install
```

## Configuration
- Set up your database using Prisma. Refer to the Prisma Documentation for guidance.
- Configure your environment variables:

Create a .env file in the root directory and add the following:

```bash
DATABASE_URL="your-database-url"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=SECRET_STRING_FOR_SESSION
```
Replace your-database-url with the URL of your database.

### Usage

## Asking User for Name
- Start the development server:
```bash
npm run dev
```

- Access the application in your browser.
- Enter your name and password when prompted. 
- Use the same name and password next time you want to log in.

## Creating Posts
- After entering your name and password, you will be redirected to the home page where you can view all posts or create one.
- Use the provided form to create a new post.

## Adding Comments
- Click on an existing post.
- Use the comment form to add a comment to the selected post.

## Searching Posts and Comments
- Utilize the search bar to search for posts and comments.
- Observe the dynamic UI changes during the search process.

### Contributing

Contributions are welcome! Feel free to open issues or pull requests.