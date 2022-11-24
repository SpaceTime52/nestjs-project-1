import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap(): Promise<void> {
  const app: any = await NestFactory.create(AppModule);
  const port: any = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`listening on port ${port}`);

  if (module.hot) {
    // Hot Reload
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
