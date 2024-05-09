import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Movie } from '../models/Movie';

const pgConnection = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'acelera-movies',
  username: 'postgres',
  password: '1234',
  synchronize: true,
  logging: true,
  entities: [Movie],
  migrations: [],
  subscribers: [],
});

export const getDBConnection = async (): Promise<DataSource> => {
  if (!pgConnection.isInitialized) {
    console.log('Carregando entidades:', pgConnection.options.entities);
    await pgConnection.initialize();
  }
  return pgConnection;
};