# Typeorm Issue #11493

This is an example repository to reproduce the issue described in [typeorm issue #11493](https://github.com/typeorm/typeorm/issues/11493#issuecomment-2932955502)

# Steps to reproduce

1. Clone the repository
2. Run the script db.sql in you SQL Server instance
3. Copy the `.env.example` file to `.env` and set the connection parameters for your SQL Server instance
4. Run `npm install`
5. Run `npm run build`
6. Run `npm run start`

# Expected behavior
The script creates an employee and then a contact related to him and it should run without errors and output the following:

```
info: Starting example...
info: Example completed successfully!
```

# Actual behavior
The script fails with the following error:

```
QueryFailedError: Error: Validation failed for parameter '0'. Invalid string.
    at /Users/lacosta/development/typeorm-issue-11493/node_modules/typeorm/driver/sqlserver/SqlServerQueryRunner.js:204:30
    at /Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/base/request.js:440:25
    at Request.userCallback (/Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/tedious/request.js:492:15)
    at Request.callback (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/request.js:239:14)
    at /Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/connection.js:1634:17
    at process.processTicksAndRejections (node:internal/process/task_queues:77:11) {
  query: 'DECLARE @OutputTable TABLE ("id" int);\n' +
    '\n' +
    'INSERT INTO "Contacts"("id_employee", "name") OUTPUT INSERTED."id" INTO @OutputTable VALUES (@0, @1);\n' +
    '\n' +
    'SELECT * FROM @OutputTable',
  parameters: [
    MssqlParameter {
      value: 477,
      type: 'nvarchar',
      '@instanceof': Symbol(MssqlParameter),
      params: []
    },
    MssqlParameter {
      value: 'CLAY',
      type: 'nvarchar',
      '@instanceof': Symbol(MssqlParameter),
      params: []
    }
  ],
  driverError: RequestError: Validation failed for parameter '0'. Invalid string.
      at /Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/tedious/request.js:449:19
      at Array.forEach (<anonymous>)
      at Request.userCallback (/Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/tedious/request.js:446:46)
      at Request.callback (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/request.js:239:14)
      at /Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/connection.js:1634:17
      at process.processTicksAndRejections (node:internal/process/task_queues:77:11) {
    code: 'EPARAM',
    originalError: RequestError: Validation failed for parameter '0'. Invalid string.
        at Request.validateParameters (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/request.js:331:15)
        at Connection.execSql (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/connection.js:1629:15)
        at Immediate.<anonymous> (/Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/tedious/request.js:705:65)
        at process.processImmediate (node:internal/timers:485:21) {
      code: 'EPARAM',
      [cause]: TypeError: Invalid string.
          at Object.validate (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/data-types/nvarchar.js:126:13)
          at Request.validateParameters (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/request.js:329:42)
          at Connection.execSql (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/connection.js:1629:15)
          at Immediate.<anonymous> (/Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/tedious/request.js:705:65)
          at process.processImmediate (node:internal/timers:485:21)
    },
    number: 'EPARAM',
    lineNumber: undefined,
    state: undefined,
    class: undefined,
    serverName: undefined,
    procName: undefined,
    precedingErrors: []
  },
  code: 'EPARAM',
  originalError: RequestError: Validation failed for parameter '0'. Invalid string.
      at Request.validateParameters (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/request.js:331:15)
      at Connection.execSql (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/connection.js:1629:15)
      at Immediate.<anonymous> (/Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/tedious/request.js:705:65)
      at process.processImmediate (node:internal/timers:485:21) {
    code: 'EPARAM',
    [cause]: TypeError: Invalid string.
        at Object.validate (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/data-types/nvarchar.js:126:13)
        at Request.validateParameters (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/request.js:329:42)
        at Connection.execSql (/Users/lacosta/development/typeorm-issue-11493/node_modules/tedious/lib/connection.js:1629:15)
        at Immediate.<anonymous> (/Users/lacosta/development/typeorm-issue-11493/node_modules/mssql/lib/tedious/request.js:705:65)
        at process.processImmediate (node:internal/timers:485:21)
  },
  number: 'EPARAM',
  lineNumber: undefined,
  state: undefined,
  class: undefined,
  serverName: undefined,
  procName: undefined,
  precedingErrors: []
}
```