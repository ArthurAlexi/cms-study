import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.DATABASE_URL as string;

if (!MONGODB_URI) {
    throw new Error(
        'Please define the DATABASE_URL environment variable inside .env.local',
    );
}

let cached = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<Connection> {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
            console.log('Db connected');
            return mongoose.connection;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
