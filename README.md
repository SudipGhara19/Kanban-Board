# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Kanban Board Project Description
This Kanban Board project, created by Sudip Ghara, offers an interactive task management system built using modern web technologies. It allows users to create, manage, and organize tasks across various stages of work: "Requested", "In Progress", and "Done." Here's a breakdown of the features:

View Project / Git Repository:

1.Click on "View Project" to view the live version of the Kanban Board.
Alternatively, click on "Git Repository" to access the source code repository of the project.
Add a Task:

2.After landing on the Kanban Board, you can add a new task by clicking on the plus icon located in the "Requested" section.
This will open a modal where you can enter the details for the new task. Once the task is created, it will appear in the "Requested" section.
Drag & Drop Functionality:

3.After adding tasks to the "Requested" section, you can drag and drop the tasks into any other section (e.g., "In Progress" or "Done").
The changes will be saved to localStorage, ensuring that the tasks persist even after the page reloads.
Edit a Task:

4.You can edit tasks in the "Requested" and "In Progress" sections.
Simply click on a task, and a modal will open, allowing you to make changes and save them.
Delete a Task:

Tasks can only be deleted when they are in the "Done" section, as these tasks are considered completed.
Clicking the delete button will open a confirmation modal for task deletion.
Additional Features and Future Enhancements
While the core functionality is implemented as described above, I have plans to add additional features, such as:

Drag Restrictions: Prevent dragging tasks from the "Done" section back to other sections.
Notifications: Add notifications for task updates or deletion.
Task Prioritization: Enable priority tagging or deadline setting for tasks.
Due to time constraints, I have focused on the key features mentioned above, but there is potential for further enhancements.

Technologies Used
Frontend:

React.js for building the interactive user interface.
Tailwind CSS for styling the components with utility-first classes.
GSAP for smooth animations during task transitions.
Backend:

Node.js for server-side logic (though the current implementation mainly focuses on frontend functionality).
Libraries & Packages:

react-dnd and react-dnd-html5-backend for enabling drag-and-drop functionality.
react-icons for adding icons to enhance the UI.
react-router-dom for routing between different pages.
This project fulfills the core requirements for managing tasks in a Kanban-style board. Despite the short development timeframe, I believe the implementation meets the project's needs while allowing room for further improvements.
