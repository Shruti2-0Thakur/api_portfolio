# Portfolio API

This repository serves as the backend API for a dynamic portfolio. It includes endpoints for managing resume data, projects, experiences, and skills with full CRUD (Create, Read, Update, Delete) functionalities.

<p align="center">
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjlsMjZnc3N4cnMxMzhiMmNqaGcwMno1dWIzcjdiaHV4bTkwODR5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8GqctmCjZjSL8StnCy/giphy.gif" alt="meme GIF" style="width: 250px;" />
</p>


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Resume](#resume)
  - [Projects](#projects)
  - [Experiences](#experiences)
  - [Skills](#skills)
- [Contributing](#contributing)


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/api_portfolio.git
    cd api_portfolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. Start the server:
    ```bash
    nodemon app.js
    ```

## Usage

The API server will be running on `http://localhost:5000`. Use the endpoints described below to interact with the portfolio data.

## API Endpoints

### Resume

- **GET /api/resume**: Retrieve the resume.
- **POST /api/resume**: Create a new resume entry.
- **PUT /api/resume/:id**: Update a specific resume entry.
- **DELETE /api/resume/:id**: Delete a specific resume entry.

### Projects

- **GET /api/projects**: Retrieve all projects.
- **POST /api/projects**: Create a new project.
  - Request body:
    ```json
    {
      "codeLink": "URL_to_code",
      "demoLink": "URL_to_demo",
      "description": "Project description",
      "title": "Project title",
      "image": "URL_to_image"
    }
    ```
- **PUT /api/projects/:id**: Update a specific project.
- **DELETE /api/projects/:id**: Delete a specific project.

### Experiences

- **GET /api/experiences**: Retrieve all experiences.
- **POST /api/experiences**: Create a new experience.
  - Request body:
    ```json
    {
      "company": "Company name",
      "position": "Job position",
      "duration": "Duration of employment",
      "logo": "URL_to_company_logo",
      "certificates": ["URL_to_certificate_1", "URL_to_certificate_2"],
      "details": "Detailed description of the experience"
    }
    ```
- **PUT /api/experiences/:id**: Update a specific experience.
- **DELETE /api/experiences/:id**: Delete a specific experience.

### Skills

- **GET /api/skills**: Retrieve all skills.
- **POST /api/skills**: Create a new skill.
  - Request body:
    ```json
    {
      "name": "Skill name",
      "level": "Proficiency level"
    }
    ```
- **PUT /api/skills/:id**: Update a specific skill.
- **DELETE /api/skills/:id**: Delete a specific skill.

## Contributing

Contributions are welcome! Please create a pull request or open an issue for any improvements or suggestions.

<p align="center">
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZhc2piYnkwaWZjMnAzcGxyYWkxbTBqeWx6cjQ4cGZkNjFicGx2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5z14cGpQk6ZL3fiNJA/giphy.gif" alt="meme GIF" style="width: 250px;" />
</p>


