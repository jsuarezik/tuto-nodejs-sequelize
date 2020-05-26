import database from '../database/models'

class UserService {
    static async all() {
        try {
            return await database.User.findAll();
        }
        catch (error) {
            throw error
        }
    }
    static async get(id) {
        try {
            return await database.User.findByPk(id)
        }
        catch (error) {
            throw error
        }
    }
    static async getByEmail ( email) {
        try {
            if (!email) return null; 
            return await database.User.findOne({ where : { 
                email : email
            }});
        } catch (error) {
            throw error
        }
    }

    static async add(data) {
        try {
            return await database.User.create(data)
        }
        catch (error) {
            throw error
        }
    }
    static async update(id, data) {
        try {
            return await database.User.update(data, { where : { id : Number(id) } })
        } 
        catch( error) {
            throw error
        }
    }
    static async delete(id) {
        try {
            return await database.User.update({ status : 0} , { where : { id : Number(id) } } )
        } 
        catch (error) {
            throw error
        }
    }
}

export default UserService;
