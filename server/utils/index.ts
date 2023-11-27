import pg from "pg";

export const postgresClient = () => {
  const client = new pg.Pool({
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  return {
    client,
  };
};
