# POC of application deployed on Google Cloud which is composed of:
1. Google Cloud SQL postgres database
2. Google Cloud Run - client side - Angular, Dockerized, Nginx
3. Google Cloud Run - server side - Spring Boot, Dockerized

# Configuration on Google Cloud
## Google Cloud SQL
1. Create Google Cloud SQL instance
2. Region: Finland for example
3. Create a database

## Backend instance
1. Create Google Cloud Run instance
2. Continuously deploy from a repository
3. Choose this repository, master branch and the Dockerfile location
4. Region: Same as previous
5. Environment Variables
- INSTANCE_CONNECTION_NAME=[Connection name of the google cloud sql instance]
- DB_NAME=[database_name]
- DB_USER=[database username]
- DB_PASS=[database password]
- CLIENT_URL=[client instance url] to be added after client instance is created
6. Cloud SQL connections should be the database address from previous step

## Client instance
1. Change ```serverInstanceUrl``` from ```environment.prod.ts``` with the server address:
- ```https://github.com/ciprian-anghel/google-cloud-poc/blob/master/client/client-google-cloud-poc/src/environments/environment.prod.ts```
2. Create Google Cloud Run instance
3. Continuously deploy from a repository
4. Choose this repository, master branch and the Dockerfile location
5. PORT: 8080

# Some server side notes to be remembered
## 1. Connect to Google Cloud SQL database
- Add to pom.xml:
```
<dependency>
	<groupId>com.google.cloud.sql</groupId>
	<artifactId>postgres-socket-factory</artifactId>
</dependency>
```
- application.properties
```
spring.datasource.url=jdbc:postgresql:///${DB_NAME}?socketFactory=com.google.cloud.sql.postgres.SocketFactory&cloudSqlInstance=${INSTANCE_CONNECTION_NAME}
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASS}
spring.datasource.driver-class-name=org.postgresql.Driver
```
