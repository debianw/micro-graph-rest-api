# GraphQL / REST Architecture support based on micro / Apollo GraphQL

The purpose of this repo is to collect the best ideas of architecting an API that provides both GraphQL and REST

## Install

```
npm install
npm run start:watch
```

### GraphQL:

```
curl -X POST \
  http://localhost:4001/graphql \
  -H 'Accept: */*' \
  -H 'accept-encoding: gzip, deflate' \
  -d '{
	"query": "query getAllUsers { users { id, username, firstName, lastName } }",
	"operationName": "getAllUsers"
}'
```

### REST:
`curl http://localhost:4001/api/users`