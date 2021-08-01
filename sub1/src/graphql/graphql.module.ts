import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';

@Module({
  imports: [
      GraphQLModule.forRoot({
        useGlobalPrefix: true,
        cors: true,
        sortSchema: true,
        autoSchemaFile: join(process.cwd(), 'src/autogen/schema.gql'),
      }),
  ]
})
export class GraphqlModule {}