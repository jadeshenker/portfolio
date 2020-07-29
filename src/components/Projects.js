import React from 'react';
import ProjectList from './ProjectList';

const Projects = ({ toggle }) => {
    return(
        <div>
            <div className="selection-header">
                <div className="selected"><h3>projects</h3></div>
                <div onClick={toggle}><h3>experience</h3></div>
            </div>
            <ProjectList />
        </div>
    );
}

export default Projects;