import { PrismaClient } from '@/generated/prisma-client'

const prismaClientSingleton = () => {
    let url = process.env.DATABASE_URL;

    // Safety check: Neon pooler endpoints with Next.js can be extremely flaky.
    // Force direct connection if pooler is detected in the string.
    if (url && url.includes('-pooler')) {
        console.warn('⚠️ [Prisma] Pooler endpoint detected. Automatically switching to direct connection for stability.');
        url = url.replace('-pooler', '');
    }

    return new PrismaClient({
        log: ['error', 'warn'],
        datasources: {
            db: {
                url: url
            }
        }
    })
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

