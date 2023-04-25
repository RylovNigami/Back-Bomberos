export ={

      type: `postgres`,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      entities: ['src/entities/*{.ts,.js}'],
      seeds: ['src/seeds/*{.ts,.js}'],
      synchronize: true,
    


}