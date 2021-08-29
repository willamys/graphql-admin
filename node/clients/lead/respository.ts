import { readFile, writeFile } from 'fs'
import { resolve } from 'path'

function createRepository(name: string) {

  const path = resolve(__dirname, `${name}.json`);

  return {
    read: () => new Promise((resolve, reject) => {
      readFile(path, (error, data?: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(JSON.parse(data));
      })
    }),

    write: (data: any) => new Promise<void>((resolve, reject) => {
      writeFile(path, JSON.stringify(data), (error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      })
    })
  }
}

export default createRepository;
