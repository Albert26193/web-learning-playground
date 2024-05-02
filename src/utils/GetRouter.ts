import fs from 'fs';
import path from 'path';

type frameworkName = 'React' | 'Vue' | 'Vanilla';

export const getFrameworkRouter = (framework: frameworkName) => {
  const directoryPath = path.join(process.cwd(), `src/pages/${framework}`);
  const files = fs.readdirSync(directoryPath);

  return files
    .filter((file) => !file.endsWith('.astro'))
    .map((file) => {
      const route = file.replace('.astro', '');
      return {
        href: `/${framework}/${route}`,
        title: route,
        body: `This is ${route} page`
      };
    });
};
