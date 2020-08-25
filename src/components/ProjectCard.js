import React from 'react';

const ProjectCard = ({ project }) => {
    return(
        <div className="card-container">
            <div className="proj-img-wrapper">
                <img src={project.imgsrc} alt={project.alt} className="project-img"/>
                <div className="proj-links-wrapper">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>}
                    {project.codepen && <a href={project.codepen} target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>}
                    {project.dribble && <a href={project.dribble} target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>}
                    {project.extLink && <a href={project.extLink}target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>}
                </div>
            </div>
            <div className="project-info">
                <h4>{project.title}</h4>
                <h5>{project.role}</h5>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;