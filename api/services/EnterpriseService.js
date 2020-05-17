import database from '../database/models'
import qs       from 'qs'

class EnterpriseService {
    static async all(query = {}) { /// { filters : {}, includes : {}, appends : {}, sorts : {}, pagination : {page : 1 , per_page : 15 }}
        const { filters , includes, appends , sorts ,pagination } = query
        try {
            
            return await database.Enterprise.findAll( { where : {...query.filters}});
        }
        catch (error) {
            throw error
        }
    }
    static async get(id, query ) {
        try {
            
            return await database.Enterprise.findOne({ where : { ... query.filters,  id: id }})
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
