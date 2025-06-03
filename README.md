# Typeorm Issue #11493

This is an example repository to reproduce the issue described in [typeorm issue #11493](https://github.com/typeorm/typeorm/issues/11493#issuecomment-2932955502)

# Steps to reproduce

1. Clone the repository
2. Run the script db.sql in you SQL Server instance
3. Copy the `.env.example` file to `.env` and set the connection parameters for your SQL Server instance
4. Run `npm install`
5. Run `npm run build`
6. Run `npm run start`