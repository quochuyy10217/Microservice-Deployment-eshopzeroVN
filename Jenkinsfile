pipeline {
    agent any
    stages {
        stage('Build Image') {
            steps {
                sh "docker-compose build"
            } 
        }
        
        stage('Run container') {
            steps {
                sh "docker-compose up -d"
            } 
        }
    }
}
