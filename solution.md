## How To Run

Build the docker image using

```
docker build -t items-api
```

And then run it using:

```
docker run items-api
```

## Changes

The API exposes simple RESTful routes to 
- create an item
- get an item via its UUID
- update an item via its UUID
- get a list of items that match an ID and name

I chose Nest.js as the framework to scaffold this API due to my familiarity with the framework as well as its opinionated nature, as well as the time constraint of 2 hours to work on this project.

The framework takes a domain driven approach to file structure -- item related files (e.g. controller, service, specs) are all under the same folder, which I believe is scalable for team collaboration, especially if new domains (e.g. users) are added.

I used this article as reference when building out the API:
https://blog.logrocket.com/containerized-development-nestjs-docker/

## Future Updates, Outstanding Code

Had I more time, I would take a end-to-test test driven approach, writing expectations from the `app.e2e-spec` to assert the specifications listed for the project are being met as expected.

I would also opt to use docker-compose instead of a dockerfile to consume other technologies like PostgreSQL, MongoDB, and Redis to ensure items persist in memory. With the use of these databases, a new file for Item repository access would be created for the different functionalities, as well as validations and other constraints using [class-validator](https://github.com/typestack/class-validator).


I would also modify the `findBy(filter)` function to be an OR instead of an AND as the current behavior would return a list with a single item.
