module.exports = ({ env }) => ({
  "custom-api": {
    "enabled": true,
    "resolve": "./node_modules/strapi-plugin-custom-api"
  },
  "email": {
    "config": {
      "provider": 'sendgrid',
      "providerOptions": {
        "apiKey": env('SENDGRID_API_KEY'),
      },
      "settings": {
        "defaultFrom": 'admin@myjourneytracker.com',
        "defaultReplyTo": 'admin@myjourneytracker.com',
      },
    },
  },
  "upload": {
    "enabled": true,
    "config": {
      "provider": "@strapi-community/strapi-provider-upload-google-cloud-storage",
      "providerOptions": {
        "serviceAccount": {
          "type": "service_account",
          "project_id": "my-journey-v2",
          "private_key_id": "aad33346985a0e35f89716f9f352b164a151596f",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqlS6z7+gtd53/\nrsExzu6braJOl55HcBF6iykoOt2ZWwe5OVeZJWldqzNfnmaOfAJyMW5UTtiLjw6n\nOfH/ZPetIRK0q0lmrf4WwlfZAx1oq7pb6jqUvES9fBomyzOPrSztXrj771YQtuwa\nXu+LOUbvnAFBUUEYHTNfveC7I7DHYwO546JDhgXuqfIvUAZUt/3c/PAYo5hAdxiB\ndCnTQxHF2hyQCxxccpGyLSE7v6vQKTU83rBeysAzkheykTS+zeMF96KH9dh1Xj3x\nGnUjKNRXDQEvS/mhsT5VYljSl3rcBjsfVF1c9P/oS7A9sGKLJvk5pqa4W640RaZV\neGGjBuuTAgMBAAECggEAA1QhERGYORXa4WyWMLkMDdyUk2DfSlVdZVFmRwrLprlG\nb7qHq5deI7jVS+hCbpX6KggTAUiuEAOFd62yhdPs+VXjkICl5Kgy1Z99bJ1JXfDG\n3rOoVI+6CO0p3XnSqivN+clGPYvfoYmM4NgeqwrSIwMJdwXGJPtDoG0R5NT07t/o\nuPFfD0M7ZXq+CN7ImvOls2ahxyAkVwa3AgM8yRcrghLKILWn+uX32lm4JqSMoUaU\n8rHMDhz/JTyNxYiCEos0Z+4NPtubwFuI3RbTuAGAzJF1aYghe8a6qAlszgdMAdwa\nPvC/leXqS4EiiOjDX0k/ofeWx9xMI88ccZzb92f4IQKBgQDjvMDkZymcbEuDvI3i\nV3UIrrGzvbK1NCQAlgB3xvMIWZFfBZcXb2Cx3HCUBRAacbKhnEHWeA97q85d2TdN\nCQ+RebCzOLwxqIHLRfyae9kxZjv6xxINfRH5cV5Q0FtlgJAZMeErdrts90OG0B/z\nMQhAZqVzupXMn+uY5Ca7eRzG2QKBgQC/wJ6/gP+7vG+N/GHifP1f87YQqLDEczI2\n+zTju5MoIN9HSAlM8Ya8LlgmZUL2YSuvaxbE+VaGWpARLHx6eXRbPt+YgGzcOUqe\nf8VWubxqfxVHuIQ/8VVOHUBRR29Sl4PO2AK8QMkeLEtUnbokiaOK5b7nypBLt6Y3\n3NGYqre6SwKBgQDg9t1JAsttFOFHwiQaebBHomIyHusA6v/BgGv35hS/o9LhneES\nKljHee3Pmmy84qHF2ViEJteMoDvcIy3osFGrsB0n/ZySJVYJ2hnc9QipLseDQ9EG\neA0gbqfvhtMyIly2Nrqqt8APtPYEn2VgU4hGLd+0wZUmrLcLshy8xrfxiQKBgEEC\ngg+1IX65rSx7M4iBDboZO1G8j2mbEJw5YL4Q2xxQwMI+9wBCJoboQ3SJAkHbwd7Q\nNMEFM8OLMqrP5Uf0o3FICLCAYefr+JNyCCqV//4vJbzSHuw62swH+MVVrbVXrxVS\ngOLoKAd1xvhiHTjD/VFbAPU+5Nr24YCw+dKDlpSvAoGALQNsYQVN0NkYqkchwDWG\nJSkZi1azF20INBtyYasscxPwPEFsMW5umIz4R8v3uhTUt7KJuKs5wknJHrzbLbJj\nO3gWA55hpCqjXGmGEQPJ5iX+P1EQvKzhlGbX+i5O52Lh8nDC7pfZIqJzGhCPR6Au\nFtrMxkSSNoOFSlQV7UqOmPc=\n-----END PRIVATE KEY-----\n",
          "client_email": "firebase-adminsdk-1k6mg@my-journey-v2.iam.gserviceaccount.com",
          "client_id": "106297992762814842711",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1k6mg%40my-journey-v2.iam.gserviceaccount.com"
        },
        "publicFiles": true,
        "uniform": false,
        "bucketName": "my-journey-v2.appspot.com",
        "baseUrl": "https://storage.googleapis.com/my-journey-v2.appspot.com",
        "basePath": ""
      }
    }
  }
});