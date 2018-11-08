builder:
	docker-compose \
		-f build/dev/docker-compose.yaml \
		--project-name kyleashcraft build

dev: builder
	docker-compose \
		-f build/dev/docker-compose.yaml \
		--project-name kyleashcraft up

bash:
	docker-compose \
		-f build/dev/docker-compose.yaml \
		--project-name kyleashcraft run site /bin/bash

prod:
	docker build -f build/prod/Dockerfile -t kevashcraft/kyleashcraft.com:latest .

push:
	docker push kevashcraft/kyleashcraft.com:latest
