pipeline {
    agent any

    options {
        timestamps()  // For better readability in the logs
        timeout(time: 60, unit: 'MINUTES') // Timeout for the entire pipeline
    }

    environment {
        // Define common environment variables (if needed)
        SAUCE_USERNAME = credentials('sauce-username')
        SAUCE_ACCESS_KEY = credentials('sauce-access-key')
        API_BASE_URL = 'https://api.example.com'
        APP_VERSION = '1.0.0'
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    // Checkout your code from Git repository
                    checkout scm
                }
            }
        }

        stage('Mobile UI Tests') {
            parallel {
                stage('iOS Tests') {
                    agent {
                        docker {
                            image 'mcr.microsoft.com/playwright:latest'  // Example: Use a docker image with all dependencies
                            args '-v /dev/shm:/dev/shm' // Ensure Playwright can run headlessly
                        }
                    }
                    steps {
                        script {
                            echo "Running Mobile UI Tests for iOS..."
                            // Commands to run your iOS tests
                            sh 'npm run test:ui -- --platform=iOS --device="iPhone 15 Pro"'
                        }
                    }
                }

                stage('Android Tests') {
                    agent {
                        docker {
                            image 'mcr.microsoft.com/playwright:latest'  // Example: Android Docker setup
                            args '-v /dev/shm:/dev/shm' 
                        }
                    }
                    steps {
                        script {
                            echo "Running Mobile UI Tests for Android..."
                            // Commands to run your Android tests
                            sh 'npm run test:ui -- --platform=Android --device="Android GoogleAPI Emulator"'
                        }
                    }
                }
            }
        }

        stage('API Tests') {
            agent {
                docker {
                    image 'node:16-alpine'  // Use Node.js image to run API tests
                }
            }
            steps {
                script {
                    echo "Running API Tests..."
                    // Command to run your API tests using Mocha + Cucumber
                    sh 'npm run test:api'
                }
            }

            post {
                always {
                    // Always collect test reports (Junit, Allure, etc.)
                    junit '**/reports/*.xml'  // Adjust based on where reports are stored
                }
                failure {
                    // Handle failure
                    mail to: 'dev-team@example.com',
                         subject: "API Tests Failed",
                         body: "API tests failed. Please check the logs."
                }
            }
        }

        stage('Report Generation') {
            steps {
                script {
                    echo "Generating test reports..."
                    // Optional step to generate consolidated reports (e.g., Allure)
                    sh 'allure generate --clean ./reports'
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            cleanWs()  // Clean up workspace after execution
        }
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
