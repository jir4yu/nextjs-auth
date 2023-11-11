#### Pre-requisite

* run `npm install`
* Create `.env` file with these variables

```
NEXTAUTH_SECRET=supersecretapp
NEXTAUTH_URL=http://localhost:3000
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=admin
POSTGRES_PASSWORD=123123123
POSTGRES_DB=nextauth_prisma
DATABASE_URL=postgresql://admin:123123123@localhost:5432/nextauth_prisma?schema=public
```

* You have to install docker and use `docker-compose up` to run a postgres database
* run `npx prisma migrate dev --name init` to create a database (schema from `prisma/schema.prisma`)
* then run `npx prisma db seed` to seed the database