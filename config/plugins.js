module.exports = ({ env }) => ({
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
      "provider": "strapi-provider-upload-google-cloud-storage",
      "providerOptions": {
        "serviceAccount": {
          "type": "service_account",
          "project_id": "my-journey-v2",
          "private_key_id": "b8e724d2d9ef2a868eee5845fcce56c0162cf48a",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDQ2Z/kZlKkxYiJ\ndfswgwEZgF4aZIebvHumxj/5/OjA6jkKT0wNc0ZirL4jQk7Sq8nw28NNuB2e0GRA\nim3/dQ1aR8wEx3AkiVwfNjI0EHaisLsz0qlPGwjKa/utCyGhswebmfa73h1Bi63g\n4cJOLEsK4eppTkzMJ2C6y+saK9eIySlzCzr6uWI+pqmB0VH6ik6LXnswJ5zypNCR\nTyQRLrQ5/m/FBxB2f+JWX6ISymEEwKGf3yFzSBDlCe3+CGUGNnn+POmUiv3WUXtO\nrDFoRvAKsK9GWxKysNM9UbuJzq6GJ3/P42xMWXoBX3A/79YXty0sOGW0X5YNaFSg\nKCfIvgKDAgMBAAECggEALs1eIgJ2Kbukld1tHZl2AR99tx9pLlLGSQDrbFurUzQJ\n9VAA5JC9KLa6Y09kN5zMw9+TvFJyvNjJZpc/ADzccateQoHpFR79GHd+N6Gq3FmL\nkhj23SXbSfV58HTqpABpR4rwungTiVFCdX9SGk+dv4ISFGg6GJQIfsPc20AQ7HNz\n8/wUZEwJAtyNNRpKRX9WBXQS3fMdWm7Pl2oaZ8hD7UCQqXUGBXwP50/2ZKskWzv1\nD6n3ilx+QsEsvfDF6IcsPoX0JO/cLFPncIFVTZp384/g8PCnGcyiKU7TfK+P3AyW\nOj7IfyvanQoU4l1ygVIiaaepRyYtzwbR2HzCpdcKSQKBgQD9ueS8CnHl3gOVacsx\nbV3gBUGWzqxGTfooFlNAjCZRl77e+aDZ0HPrt13+kA2UHpez8cgYG2qSqGPJXCo4\n0Nds6De5WUh4OV/6rtgfypv4AU2WLQvmVhS1MkMdEnGnKZNMCX4AL6kqSQbnOWqZ\n1rdNKR713tLhRRIYRDN8hOF1SQKBgQDSuMZo5jbRA/Ahg1Q8z467vyvnP25Ci2OM\nTJ90l0eupmNnug1eQGw13yDqPkkTYiQT1ZaMmfi6FPN5xZnhegWSvA45M53FanZA\niD+NMaJ4aBM6sQbeb/rzhXdh+wcDy4lmIJV3cWfl7vHpZvpJX+/jA49byrePm4CN\nO8syx8sVawKBgQDkvFNzGk94FWBRsKBYHOqGbPamSAeTEfU1cnr3M+HPqOeQCKdz\n9bKrjBGWzrMPF01YEd57rSu0r03WV9pQgiXTrr2dwNnOWJsoWbvJXVSijjot6spR\nisT8XSWX7eq78oUyBVSsQktVLaSli2OI8MMrMqkQqyKdpzEa41EvLnQ60QKBgQDR\nmlRZoa0jCXzBiSWwe3Dp1cXw9wpRDN+PfeQakCQQWJeGZO3JM+GvUGwoNJ5xtmxW\ngl2HK9zaE97/4IspWjvS8lZflbU42qYXmK9GXfnTNQrzlYVUmySPONJAVvdqUfow\n6PZj4h1L/PsKhJEvjUtLj43461LdePtNAQ4lS9D5UwKBgQDKBgURErI/7OEoPMXS\nP4GyDyTQIDb9duDGpy59tRbo4PKAL6h2cboiAH4En6z8/zJBQAeTp7hd9tnl0DTR\n+LOnuci0Qqm5YaeK+ReG4RTkg3jSGmvv3NpUUAmsTZC4saCvBvi0a2pftLTChbJN\n1beeEbh0OuqVQetiDzU5x5Dgpg==\n-----END PRIVATE KEY-----\n",
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