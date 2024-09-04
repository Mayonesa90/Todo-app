const {sendResponse} = require('../../responses/index')
const {db} = require('../../services/index')

module.exports.handler = async (event) => {

    const id = event.pathParameters.id
    
    try {
        const data = await db.delete({
            TableName: 'my-todos',
            Key: {
                id: id
            }
        })


        return sendResponse(200, {message: `Todo with id ${id}  successfully deleted`})
    } catch (error) {
        return sendResponse(500, error)
    }
    
};