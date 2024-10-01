import connect from '@/_libs/connectAPI'

export async function register() {
    try {
        await connect()
        console.log('✔️ database was connected successfuly');
    } catch (error) {
        console.log('❌ Erro in connect to database.')
    }
}