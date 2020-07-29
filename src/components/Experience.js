import React from 'react';

const Experience = ({ toggle }) => {

    const skills = [
        {
            category: "frontend development",
            skills: ["CSS", "HTML5", "JavaScript", "React.js"]
        },
        {
            category: "programming",
            skills: ["C#", "C/C++", "Java", "Python", "Data Structures"]
        },
        {
            category: "user interface design",
            skills: ["Figma", "Balsamiq"]
        },
        {
            category: "game development",
            skills: ["Unity 3D", "Vuforia AR"]
        },
        {
            category: "version control",
            skills: ["Git"]
        }
        
    ];

    const renderPills = (eachSkill) => eachSkill.map((skill, index) => {
        return <div key={index}>
            <div className="pill">{skill}</div>
        </div>
    })

    const renderSkills = skills.map((group, index) => {
        return <div key={index} className="skills-group">
            <p className="skills-category">{group.category}</p>
            {renderPills(group.skills)}
        </div>
    })

    return(
        <div>
            <div className="selection-header">
                <div onClick={toggle}><h3>projects</h3></div>
                <div className="selected"><h3>experience</h3></div>
            </div>
            <div className="experience-container">
                <h4>SKILLS</h4>
                {renderSkills}

                <h4 className="experience-header">EXPERIENCE</h4>
                <h5>Empower Her* Voice</h5>
                <p className="experience-subtitle">Web Designer &#38; Developer</p>
                <p>June 2020 - Present</p>
                <p>Design and prototype a complete website redesign. Implement a fully responsive web design on Wix. Create enhanced features and user interactions using JavaScript and the Wix API.</p>

                <h5>Sabai Design</h5>
                <p className="experience-subtitle">Marketing &#38; Design Intern</p>
                <p>Designed, executed, and managed email marketing campaigns. Managed social media accounts and initiatives. Managed and executed Google Ads and Facebook Ads campaigns. Designed promotional materials and graphics.</p>
                
                <h4>EDUCATION</h4>
                <h5>Barrnard College</h5>
                <p className="experience-subtitle">B.A. in Computer Science</p>
                <p>August 2016 – May 2020</p>
            </div>
        </div>
    );
}

export default Experience;