const router = express.Router()
const { usersController } = require('/app/src/controllers/users.js')

router.get('https://jsonplaceholder.typicode.com/users', async (req, res) => {
    try {
        const Users = await usersController.getUsers();
        res.status(200).json(Users)
    } catch {
        sequelizeErrorHandler(err, res)

    }
});