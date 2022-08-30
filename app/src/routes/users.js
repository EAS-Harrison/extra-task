const router = express.Router()

router.get('https://jsonplaceholder.typicode.com/users', async (req, res) => {
    try {
        const Users = await usersController.getUsers();
        res.status(200).json(Users)
    } catch {
        sequelizeErrorHandler(err, res)

    }
});