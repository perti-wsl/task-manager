pipeline {
  agent any

  options {
    skipDefaultCheckout(true)
  }

  stages {
    stage('Checkout') {
      steps {
        cleanWs()
        checkout scm
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
    stage('Deploy') {
  steps {
    bat 'docker compose down'
    bat 'docker compose up --build -d'
  }
}
stage('Verify Backend Health') {
  steps {
    powershell '''
      $response = Invoke-WebRequest -Uri "http://localhost:5000/health" -UseBasicParsing
      if ($response.StatusCode -ne 200) {
        throw "Backend health check failed"
      }
    '''
  }
}
  }
}