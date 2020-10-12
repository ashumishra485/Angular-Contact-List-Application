import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import chalk from 'chalk';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { HttpExceptionFilter } from 'shared/filters/http-execption.filter';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useStaticAssets('files');
  const hostDomain = AppModule.isDev ? `${AppModule.host}:${AppModule.port}` : AppModule.host;
  const swaggerOptions = new DocumentBuilder()
    .setTitle('Contact API')
    .setDescription('Contact APi Documentation')
    .setVersion('1.0.0')
    .setHost(hostDomain.split('//')[1])
    .setBasePath('/v1')
    .addBearerAuth('Authorization', 'header')
    .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  app.use('/v1/docs/swagger.json', (req, res) => {
    res.send(swaggerDoc);
  });
  SwaggerModule.setup('/v1/docs', app, null, {
    swaggerUrl: `${hostDomain}/v1/docs/swagger.json`,
    explorer: true,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true
    }
  })
  app.setGlobalPrefix('v1');
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(AppModule.port);
  console.log(chalk.green('Server created on ') + chalk.white('' + AppModule.port));
}
bootstrap();

