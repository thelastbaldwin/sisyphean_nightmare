import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

export default {
    input: 'src/client.ts',
    output: {
        dir: 'public',
        format: 'cjs',
    },
    plugins: [
        typescript(),
        nodeResolve({ browser: true }),
        replace({
            'process.env.SOCKET_HOST': process.env.SOCKET_HOST,
        }),
        process.env.NODE_ENV === 'local'
            ? serve({
                  contentBase: './public',
                  host: 'localhost',
                  port: process.env.PORT ?? '3001',
              })
            : undefined,
    ],
};
