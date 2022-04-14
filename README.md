# .NET Microservices Sample Application

Deploy sample .NET 5 reference application, based on a simplified microservices architecture and Docker containers forked from [](https://github.com/oguzzaydin/eshopzero). This application is translated to Vietnamese by me.

## Build this application

Run the command below.

`docker-compose up --build`

Access the application via the URL:

`http://localhost:4000/`

## Create Order Scenario

<p align="center">
  <img src="https://raw.githubusercontent.com/oguzzaydin/eshopzero/main/img/create-order-screenshot.png" />
</p>

## Docker Containers

| Image   | Port  | Host   | 
|---|---|---|
|  eshopzero/client:latest  | 4000  | localhost  |
|  eshopzero/gateway:dev |  5200 | localhost  |
|  eshopzero/product-api:dev | 5203  | localhost  |
|  eshopzero/order-api:dev | 5202  | localhost  |
|  eshopzero/identity-api:dev | 5201  | localhost  |
|  rabbitmq:3-management-alpine | 15672  | localhost  |
|  datalust/seq:latest | 5340  | localhost  |
|  postgres:latest | 5432  | localhost  |
|  redis:alpine | 6379  | localhost  |
|  portainer | 9000  | localhost  |

## Architecture Overview

<p align="center">
  <img src="https://raw.githubusercontent.com/quochuyy10217/eshopzero/main/img/microservice-architecture.png" />
</p>

## Tech Stack

- .Net 5
- RabbitMQ
- Serilog & Seq 
- Redis
- Event Source
- CQRS && DDD
- MediaTR
- ReactJS
- İdentity Server
- Docker
- Ocelot
- PostgreSQL
- Entity Framework Core
- Ant Design
- Portainer