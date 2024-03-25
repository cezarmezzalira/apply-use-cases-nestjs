const { DATABASE_URL, PORT } = process.env;

export function buildConfig() {
  return {
    database: {
      url: DATABASE_URL,
    },
    port: parseInt(PORT ?? '5000', 10),
  };
}
