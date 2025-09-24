
class GlobalRepository {
    public async create(modelName: any, DTOname: any, Data: any, transaction?: any): Promise<any> {
        try {

            const record = await modelName.create(Data, { transaction });

            return new DTOname(record);
        } catch (error) {
            throw new Error("Repository, create: " + error);
        }
    }
    public async bulkCreate(modelName: any, DTOname: any, Data: any[], transaction?: any): Promise<any[]> {
        try {
            const records = await modelName.bulkCreate(Data, { transaction });

            return records.map((item: any) => new DTOname(item));
        } catch (error) {
            console.error('Repository: Error al generar los registros: ', error);
            throw new Error("Repository, bulkCreate: " + error);
        }
    }

    public async update(modelName: any, DTOname: any, Data: any, condition: any, transaction?: any): Promise<any> {
        try {
            console.log("Info a modificar: ", Data)
            //console.log("where: ", condition)
            const record = await modelName.update(Data, condition, { transaction });
            //console.log(Data, condition)

            console.log("modificacion: ", record)
            return new DTOname(record);
        } catch (error) {
            console.error('Repository: Error al modificar el registro:')
            throw new Error("Repository, update: " + error);
        }
    }

    public async findAll(modelName: any, DTOname: any, condition: any): Promise<any[]> {
        try {
            const records = await modelName.findAll(condition);
            return records.map((item: any) => new DTOname(item));
        } catch (error) {
            console.error('Error al encontrar los registros: ');
            throw new Error("Repository, findAll: " + error);
        }
    }
    public async findOne(modelName: any, DTOname: any, condition: any): Promise<any> {
        try {
            const record = await modelName.findOne(condition)

            // Si no se encuentra el registro, retorna null
            if (!record) {
                return null;
            }

            return new DTOname(record);
        } catch (error) {
            console.error('Repository: Error al encontrar el registro: ');
            throw new Error("Repository, findOne: " + error);
        }
    }



}
export default GlobalRepository;