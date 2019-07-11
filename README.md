# mystuff

Environment Setup
-----------------

The entire environment is provisioned by Ansible using [Docker](https://docs.docker.com/)

**Requirements**
- Docker
- Docker-compose

##### Up
`docker-compose up`

Load data `docker exec ms-api "node" "server/load_data.js"`

##### access
* web - [localhost:8080](localhost:8080)
* app - [localhost:3000](localhost:3000)
* elasticsearch - [localhost:9200](localhost:9200)
