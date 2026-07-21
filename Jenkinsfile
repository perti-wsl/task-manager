pipeline {
  agent any

  options {
    skipDefaultCheckout(true)
  }

  stage('Checkout') {
  steps {
    cleanWs()
    checkout scm
  }
}
    }

    stage('Install Backend') {
      steps {
        dir('task-manager-backend') {
          bat 'npm ci'
        }
      }
    }

    stage('Install Frontend') {
      steps {
        dir('task-manager-frontend') {
          bat 'npm ci'
        }
      }
    }

    stage('Lint Backend') {
      steps {
        dir('task-manager-backend') {
          bat 'npm run lint'
        }
      }
    }

    stage('Lint Frontend') {
      steps {
        dir('task-manager-frontend') {
          bat 'npm run lint'
        }
      }
    }

    stage('Test Backend') {
      steps {
        dir('task-manager-backend') {
          bat 'npm run test'
        }
      }
    }

    stage('Test Frontend') {
      steps {
        dir('task-manager-frontend') {
          bat 'npm run test'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('task-manager-frontend') {
          bat 'npm run build'
        }
      }
    }
  }
}