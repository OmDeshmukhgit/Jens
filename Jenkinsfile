pipeline {
  agent any
  triggers { githubPush() }   // webhook trigger
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('List Files') {
      steps {
        sh '''
          echo "Listing repo files..."
          ls -l
        '''
      }
    }
    stage('Deploy') {
      steps {
        sh '''
          echo "Deploying site..."
          cp -r * /var/www/html/
          echo "Site deployed successfully!"
        '''
      }
    }
  }
}
