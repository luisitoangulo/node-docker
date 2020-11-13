pipeline {
    agent any

    stages {

        stage ('construir imagen'){
            steps{
                sh 'docker build -t jenkins-node-docker:v1 .'
                echo 'Imagen construida'
            }
        }
        stage ('Ejecutar contenedor'){
            steps{
                sh 'docker run -d -p 4000:4000 jenkins-node-docker:v1'
                echo 'Contenedor en ejecución'
            }
        }
    }
}