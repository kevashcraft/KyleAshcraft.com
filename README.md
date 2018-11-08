# KyleAshcraft.com

A simple website built with Angular and deployed with Helm to a Kubernetes cluster.

## Development

Run `make dev` to build and start a development container.
Navigate to `http://localhost:4800` to view the site.

## Structure

The site has four components, all fairly small.

- kyle-home is the container for everything
- kyle-card is the card with all of the content
- spotify-logo is an svg version of Spotify's logo
- instagram-logo is an svg version of Instagram's logo

## Initial Installation

Run `make install` to install the Helm chart for the first time.

## Deploy Updates

Run `make deploy` to build and push the current code, which also starts the helm upgrade process once the new image is ready.
