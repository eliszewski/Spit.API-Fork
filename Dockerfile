# Use the OpenJDK 17 slim image as the base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the source code and pom.xml to the container
COPY . /app

# Build the application using Maven
RUN apt-get update && \
    apt-get install -y maven && \
    mvn clean package

# Expose port 8080 for your application (if needed)
EXPOSE 8080

# Start the Java application
CMD ["java", "-jar", "target/Spit.API-0.0.1-SNAPSHOT.jar"]
