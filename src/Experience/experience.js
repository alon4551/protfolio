import React from 'react';
import { Card ,Button} from 'react-bootstrap';
import './experience.css'
import Projects from './projects.json'
function Experience (){
    return (
        <div className='main'>
            <h1 className='title'>
                My Projects
            </h1>
            <div className='gallery'>
                {
                    Projects.map((project)=>{
                        return(
                            <Card style={{ width: '18rem' }}>
                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                    {project.expline}
                                </Card.Text>
                                <Button variant="primary" href={project.link}>Github</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                
            </div>
        </div>
    );
}

export default Experience;