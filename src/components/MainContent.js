import React, { Component } from 'react';
import Projects from './Projects';
import Experience from './Experience';

class MainContent extends Component {
    state = { showProjects: true };

    renderContent() {
        if(this.state.showProjects) {
            return <Projects toggle={() => this.setState({ showProjects: false })} />
        }

        return <Experience toggle={() => this.setState({ showProjects: true})} />
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default MainContent;