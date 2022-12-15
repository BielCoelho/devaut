import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: ['src/graphql/**/*.gql', 'src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
};

export default config;
