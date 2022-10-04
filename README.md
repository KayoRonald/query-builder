# query-builder

Criar uma migração 
```
yarn knex migrate:make nome_da_tabela
```

Subir pro banco de dados
```bash
yarn knex migrate:latest
```
Desfazer as migrações que foram pro banco 
```bash
yarn knex migrate:rollback
```


Seed:
```bash
yarn knex seed:make 01_users
``

Run:
```bash
yarn knex seed:run
```
