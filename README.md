# Server side
## Connect to Google Cloud SQL database notes
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
The following Environment Variables are set to the Google Run instance:
- DB_NAME=<database_name>
- INSTANCE_CONNECTION_NAME=<Connection name of the google sql instance>
- DB_USER=<database username>
- DB_PASS=<database password>
