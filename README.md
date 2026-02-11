# GithubCopilotTraining

## Projects

- **Spring Boot backend (`spring boot`)**: a small microservice that returns a list of posts at `/api/posts`. Build with Maven (the repo includes a Maven wrapper) and run the produced JAR. The service listens on port `8080` by default.

- **Angular frontend (`frontend`)**: a minimal Angular app that calls the backend `/api/posts`. Development uses the Angular CLI (dev server proxies `/api` to the backend). A production build is emitted to `frontend/dist/frontend` and can be served as static files; a small `frontend/static-proxy.js` helper is included to serve the build and proxy `/api` to the backend.

## Quick start

1. Start the backend:

	 - From `spring boot/` build and run:

		 ```bash
		 cd "spring boot"
		 ./.mvn/apache-maven-3.9.0/bin/mvn -DskipTests package
		 java -jar target/posts-service-0.0.1-SNAPSHOT.jar
		 ```

2. Serve the frontend (production build already created in the workspace):

	 - Run the included static+proxy server:

		 ```bash
		 # ensure node is available (nvm or system)
		 node frontend/static-proxy.js
		 # open http://localhost:8081
		 ```

	 - Or serve the static files directly from `frontend/dist/frontend` using any static server.
