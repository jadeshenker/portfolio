import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.body};
  border: 1.5px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.1rem 0.3rem 0.3rem 0.3rem;
  position: relative;
  width: 3.7rem;
  height: 1.6rem;

  span {
    font-size: 1rem;
  }

  div {
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const ToggleBtn = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    
    return(
        <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
            <div className="icon-wrapper"><span role="img" aria-label="Sun Icon Light-To-Dark Theme Toggle">&#127774;</span></div>
            <div className="icon-wrapper"><span role="img" aria-label="Moon Icon Dark-To-Light Theme Toggle">&#127771;</span></div>
        </ToggleContainer>
    );
};

ToggleBtn.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default ToggleBtn;