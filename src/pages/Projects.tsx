import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "คำอธิบายโปรเจกต์ 1",
      link: "https://github.com/yourprofile/project1",
    },
    {
      title: "Project 2",
      description: "คำอธิบายโปรเจกต์ 2",
      link: "https://github.com/yourprofile/project2",
    },
  ];

  return (
    <div className="projects">
      <h2>ผลงานของผม</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              ดูเพิ่มเติม
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
