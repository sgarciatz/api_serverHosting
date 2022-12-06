

pipeline {
    agent any //{ docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'cd server && npm install && cd ../'
                sh 'docker build ./server -t istic/api_serverhosting'
            }
        }
         stage('test') {
            steps {
                sh 'docker run --detach --name test_api_serverhosting -p 20082:8082 istic/api_serverhosting:latest'
                sh 'newman run server_tests/server_test.postman_collection.json'
                sh 'docker rm -f test_api_serverhosting'
            }
        }
        stage('deploy') {
            steps {
                catchError {
                    sh 'docker rm -f api_serverhosting'
                } 
                sh 'docker run --detach --name api_serverhosting -p 8082:8082 istic/api_serverhosting:latest'

            }
        }
    }
}