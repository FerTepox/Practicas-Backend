import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

//const sequelize = new Sequelize(`postgres://${process.env.USERNAME_DB!}:${process.env.PASSWORD_DB!}@${process.env.HOST_DB!}:${process.env.PORT_DB!}/${process.env.DATABASE_NAME!}`)

// Exportamos una promesa que resuelve a Sequelize
const sequelize: Promise<Sequelize> = (async () => {
  // En tu caso ya tienes las variables en .env
  const host = process.env.HOST_DB!;
  const username = process.env.USERNAME_DB!;
  const password = process.env.PASSWORD_DB!;
  const database = process.env.DATABASE_NAME!;
  const port = Number(process.env.PORT_DB!);

  return new Sequelize({
    dialect: "postgres",
    host,
    username,
    password,
    database,
    port,
    logging: (msg) => console.log(msg), // puedes quitarlo si no quieres logs
    define: {
      freezeTableName: true, // evita pluralizar nombres
      timestamps: false,
    },
  });
})();

export default sequelize;