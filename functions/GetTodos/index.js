const {sendResponse} = require('../../responses/index')
const {db} = require('../../services/index')

module.exports.handler = async (event) => {

    try {
        const data = await db.scan({
            TableName: 'my-todos'
        })
        return sendResponse(200, data.Items)
    } catch (error) {
        return sendResponse(500, error)
    }
    
};