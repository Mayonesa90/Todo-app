const {sendResponse} = require('../../responses/index')
const {db} = require('../../services/index')

module.exports.handler = async (event) => {

    const id = event.pathParameters.id
    const body = JSON.parse(event.body)
    
    try {
        await db.update({
            TableName: 'my-todos',
            Key: {
                id: id
            },
            UpdateExpression: 'SET todo = :todo, done = :done',
            ExpressionAttributeValues: {
                ':todo': body.todo,
                ':done': body.done
            }
        })


        return sendResponse(200, {message: "Todo successfullt updated"})
    } catch (error) {
        return sendResponse(500, error)
    }
    
};