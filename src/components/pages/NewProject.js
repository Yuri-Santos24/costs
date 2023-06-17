import { useHistory } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function  NewProject() {

    const history = useHistory()

    function createPost(project) {


        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
            body:JSON.stringify(project)
        }).then((resp) => resp.json()).then((data) => {console.log(data)}).catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os seus serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projetos" />
        </div>
    )
}

export default NewProject