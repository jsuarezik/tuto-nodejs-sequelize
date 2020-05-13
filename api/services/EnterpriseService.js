import database from '../database/models'

class EnterpriseService {
    static async all() {
        try {
            return await database.Enterprise.findAll();
        }
        catch (error) {
            throw error
        }
    }
    static async get(id) {
        try {
            return await database.Enterprise.findByPk(id)
        }
        catch (error) {
            throw error
        }
    }
    static async add(data) {
        try {
            return await database.Enterprise.create(data)
        }
        catch (error) {
            throw error
        }
    }
    static async update(id, data) {
        try {
            return await database.Enterprise.update(data, { where : { id : Number(id) } })
        } 
        catch( error) {
            throw error
        }
    }
    static async delete(id) {
        try {
            return await database.Enterprise.update({ status : 0} , { where : { id : Number(id) } } )
        } 
        catch (error) {
            throw error
        }
    }
}

export default EnterpriseService;
