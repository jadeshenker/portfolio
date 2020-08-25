import React from 'react';
import onaroll from '../assets/images/onaroll.png';
import portalar from '../assets/images/portalAR.png';
import todo from '../assets/images/todoapp.png';
import notes from '../assets/images/notesapp.png';
import wam from '../assets/images/wam.png';
import emaily from '../assets/images/emaily.png';
import todoappdesign from '../assets/images/todoappdesign.png';

import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const projects = [
            {
                title: 'Todo App Design System',
                role: 'UI Design',
                description: 'An experimental design system with custom made icons for a Todo App created in Figma.',
                imgsrc: todoappdesign,
                alt: "todo app design",
                dribble: 'https://dribbble.com/shots/13991043-Todo-List-App-UI',
                extLink: 'https://www.figma.com/file/u5OTPnJKtbWbtHtneIj9wN/todo-app?node-id=0%3A1/'
            },
            {
                title: 'Emaily',
                role: 'Fullstack Web Development',
                description: 'A web app built with Node.js and React which allows users to sign in with Google, send emails with surveys, and visualize data from the surveys.',
                imgsrc: emaily,
                alt: "emaily app",
                extLink: 'https://shielded-sierra-05288.herokuapp.com/',
                github: 'https://github.com/jadeshenker/emaily'
            },
            {
                title: 'Whack a Mole',
                role: 'Web Development',
                description: 'A whack a mole web game built with Javascript and HTML.',
                imgsrc: wam,
                alt: "whack a mole",
                extLink: false,
                github: 'https://github.com/jadeshenker/whack-a-mole'
            },
            {
                title: 'Todo List App',
                role: 'Frontend Development',
                description: 'A fully responsive todo app built with React. Users can use this app to keep track of their todos as well as the tasks they have already completed. Users can also return to their saved lists of todos at any time.',
                imgsrc: todo,
                alt: "todo list",
                extLink: 'https://jss-react-todo-list.netlify.app',
                github: 'https://github.com/jadeshenker/to-do-reactapp'
            },
            {
                title: 'Notes App',
                role: 'Frontend Development',
                description: 'A fully responsive notes app built with React. Notes are edited using Markdown syntax. Users can add, edit, and delete notes, and they will be saved for the user to return to later.',
                imgsrc: notes,
                alt: "notes app",
                extLink: 'https://notes-react-app.netlify.app/',
                github: 'https://github.com/jadeshenker/notes-reactapp'
            },
            {
                title: 'PortalAR Game',
                role: 'Game Development',
                description: 'An AR portal game developed with a team of other students. This game was built with Unity 3D, Vuforia AR and C#.',
                imgsrc: portalar,
                alt: "portal AR game",
                extLink: 'https://youtu.be/4AjW3oYZU0M',
                github: false
            },
            {
                title: '3D Platformer Game',
                role: 'Game Development',
                description: 'A 3D platformer iOS game built with Unity 3D and C#.',
                imgsrc: onaroll,
                alt: "on a roll game",
                extLink: 'https://www.youtube.com/watch?v=pqnBdqRtc7c&feature=emb_title',
                github: false            
            }
        ];

        const renderProjects = projects.map((project, index) => {
            return <ProjectCard project={project} key={index} />
        });
    
    return(
            <div>
               {renderProjects}
            </div>
    ); 
}

export default ProjectList;