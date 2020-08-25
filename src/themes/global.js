import { createGlobalStyle } from 'styled-components';

const breakpoints = {
    sm: '(max-width: 420px)'
}

export const GlobalStyles = createGlobalStyle` 
    *, 
    *::after, 
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.body };
        color: ${({ theme }) => theme.text };
        font-family: 'DM Sans', sans-serif;
        transition: all 0.3s linear;
    }

    h1, h5 {
        color: ${({ theme }) => theme.accentColor };
    }

    h2, h3, h4, h5 { font-weight: 400; }
    
    .experience-container h4, h2 {
        letter-spacing: 4px;
        font-size: 1.1rem;
    }

    h3 {
        letter-spacing: 2px;
        font-size: 1rem;
    }

    a {
        color: ${({ theme }) => theme.accentColor };
        transition: all 0.3s ease-in-out;
        text-decoration: none;
    }

    a:hover {
        color: ${({ theme }) => theme.text };
    }

    footer {
        border-top: 0.5px solid ${({ theme }) => theme.text };
        padding: 1rem;
        margin-top: 2rem;
    }
    
    header {
        display: flex;
        justify-content: flex-end;
        position: fixed;
        width: 95vw;
    }
    
    .landing-container {
        height: 100vh;
        display: flex;
        justify-content: center;
    }
    
    .proj-img-wrapper, .profile-img-wrapper { 
        display: flex;
        position: relative; 
        align-self: center;
        justify-content: center;
    }

    .profile-img {
        border-radius: 50%;
        width: 12rem;
        height: 12rem;
    }

    .project-img {
        width: 11rem;
        height: 11rem;
        box-shadow: 0 5px 4px rgba(0,0,0,0.06), 0 3px 5px rgba(0,0,0,0.06);
    }
    
    .profile-intro {
        align-self: center;
        margin-left: 1.5rem;
        max-width: 40vw;
        line-height: 1.8rem;
    }

    .project-info {
        align-self: center;
        margin-left: 1.5rem;
        width: 50vw;
    }

    .card-container {
        display: flex;
        justify-content: center;
        margin-bottom: 3rem;
    }

    @media ${breakpoints.sm} {
        .card-container, .landing-container {
            flex-wrap: wrap;
            flex-direction: column;
        }
        .profile-intro {
            max-width: 80vw;
            margin: 20px auto;
        }
        .project-info {
            width: 80vw;
            margin-left: 0px;
        }
    }

    .proj-links-wrapper, .liinks-wrapper, .pill {
        box-shadow: 0 5px 4px rgba(0,0,0,0.05), 0 3px 5px rgba(0,0,0,0.05);
    }

    .proj-links-wrapper, .links-wrapper { 
        background-color: ${({ theme }) => theme.text };
        position: absolute;
        top: 90%;
        border-radius: 20px;
        padding: 0.3rem;
        text-align: center;
    }

    .links-wrapper { 
        width: 8rem;
    }

    .proj-links-wrapper {
        width: 4rem;
        left: 70%;
    }

    .proj-links-wrapper i, .links-wrapper i { padding: 0rem 0.3rem; }

    .proj-links-wrapper a, .links-wrapper a { color: ${({ theme }) => theme.body }; }
    .proj-links-wrapper a:hover, .links-wrapper a:hover { color: ${({ theme }) => theme.accentColor }; }

    .selection-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-top: 0.5px solid ${({ theme }) => theme.text }; }
    }

    .selection-header h3 {
        margin: 0px;
        padding: 0.3rem 1rem;
    }

    .selection-header div:not(.selected) { 
        border-top: 3.5px solid ${({ theme }) => theme.body };
    }

    .selected {
        border-top: 3.5px solid ${({ theme }) => theme.accentColor };
    }

    .experience-container {
        margin: auto;
        width: 60vw;
    }

    @media ${breakpoints.sm} {
        .experience-container {
            width: 80vw;
        }
    }
    .experience-container h4 , .skills-group { clear: both; }

    .skills-category {
        margin: 0px;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.accentColor };
        font-style: italic;
    }

    .pill {
        background-color: ${({ theme }) => theme.text };
        font-size: 0.9rem;
        color: ${({ theme }) => theme.body };
        padding: 0.5rem 1rem;
        margin: 0.8rem 0.8rem 0.8rem 0rem;
        float: left;
        border-radius: 30px;
    }

    .experience-container h5 {
        color: ${({ theme }) => theme.text };
        margin: 0px;
        font-size: 1rem;
        font-weight: 500; 
        letter-spacing: 2px;
    }

    .experience-container p:not(.experience-subtitle) { font-size: 0.9rem; }

    .experience-subtitle {
        color: ${({ theme }) => theme.accentColor };
        font-size: 0.8rem;
        margin: 3px 0px 0px 0px;
    }

    .experience-header {
        margin-top: 5rem !important;
    }
    `