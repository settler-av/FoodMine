import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }as ConnectOptions).then(
        () => {
            console.log('Database connection established!');
        },
        err => {
            console.log('Error connecting Database instance due to: ', err);
        }
    )
}