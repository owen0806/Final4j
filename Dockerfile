FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY final4j-0.0.1-SNAPSHOT.jar app.jar

COPY config.properties config.properties
COPY serviceAccountKey.json serviceAccountKey.json

EXPOSE 8080

# 設定啟動命令
ENTRYPOINT ["java", "-jar", "app.jar"]