pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vite-react-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker rm -f vite-react || true
                docker run -d -p 5173:5173 --name vite-react vite-react-app
                '''
            }
        }
    }
}
