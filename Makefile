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

VERSION := $(shell git rev-parse --short HEAD)

push:
	@echo Building and pushing $(VERSION)
	docker build -f build/prod/Dockerfile -t kevashcraft/kyleashcraft.com .
	docker tag kevashcraft/kyleashcraft.com kevashcraft/kyleashcraft.com:$(VERSION)
	docker tag kevashcraft/kyleashcraft.com kevashcraft/kyleashcraft.com:latest
	docker push kevashcraft/kyleashcraft.com:$(VERSION)
	docker push kevashcraft/kyleashcraft.com:latest

deploy: push
	helm upgrade --set tag=$(VERSION) kyleashcraft ./build/helm

install:
	helm install kyleashcraft ./build/helm
