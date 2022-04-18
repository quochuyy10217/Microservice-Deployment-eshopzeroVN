pipeline {
    agent any
    stages {
        stage('Get docker-compose') {
            steps {
                sh "apt install curl"
                sh "curl -L \"https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose"
                sh "chmod +x /usr/local/bin/docker-compose"
            } 
        }
        stage('Build Image') {
            steps {
                sh "docker-compose build"
            } 
        }
        
        stage('Run container') {
            steps {
                sh "docker-compose up"
            } 
        }
    }
}
