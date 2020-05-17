import EnterpriseService from '../services/EnterpriseService'

class EnterpriseController {
    static async all(req, res) {
        //Validations
        let result = await EnterpriseService.all(req.query)
        if (result.length == 0) {
            res.send({ data : [], message : "No results Found", error : null})
        } else {
            res.send({ data :  result, message : "Success", error : null})
        }
    }
    static async get(req, res) { 
        //validation
        let result = await EnterpriseService.get(req.params.id)
        if (result == null) {
            res.status(404).send({ data : null , message : "No Result Found", error : 'NOT_FOUND'})
        } else {
            res.status(200).send({ data : result , message : "Success", error : null})
        }
    }

    static async add(req, res) {
        const {body} = req.body
        
    }
   
}

export default EnterpriseController;