# POC of application deployed on Google Cloud which is composed of:
1. Google Cloud SQL postgres database
2. Google Cloud Run - client side - Angular, Dockerized, Nginx
3. Google Cloud Run - server side - Spring Boot, Dockerized

> [!IMPORTANT]
> The following configuration was used to serve instances on Google Cloud Run and Google Cloud SQL with Postgres.

# Server side key notes
## Connect to Google Cloud SQL database
### 1. pom.xml dependency
```
<dependency>
	<groupId>com.google.cloud.sql</groupId>
	<artifactId>postgres-socket-factory</artifactId>
</dependency>
```
### 2. application.properties
```
spring.datasource.url=jdbc:postgresql:///${DB_NAME}?socketFactory=com.google.cloud.sql.postgres.SocketFactory&cloudSqlInstance=${INSTANCE_CONNECTION_NAME}
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASS}
spring.datasource.driver-class-name=org.postgresql.Driver
```
The following Environment Variables are set to the Google Cloud Run instance:
- DB_NAME=[database_name]
- INSTANCE_CONNECTION_NAME=[Connection name of the google sql instance]
- DB_USER=[database username]
- DB_PASS=[database password]

### Documentation
- [Connect to Cloud SQL for PostgreSQL from Cloud Run](https://cloud.google.com/sql/docs/postgres/connect-instance-cloud-run)  
- [Connecting to Cloud SQL - Postgres](https://github.com/GoogleCloudPlatform/java-docs-samples/blob/main/cloud-sql/postgres/servlet/README.md)
