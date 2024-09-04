const {db} = require('../../services/index')
const {sendResponse} = require('../../responses/index')
const { nanoid } = require('nanoid');

module.exports.handler = async (event) => {
    const body = JSON.parse(event.body)
    const id = nanoid()

    try {
        await db.put({
        TableName: 'my-todos',
        Item: {
            id: id,
            todo: body.todo,
            done: false
        }
        });
        return sendResponse(200, {message: 'Todo created!'})
    } catch (error) {
        return sendResponse(500, {message: error.message})
    }
    
}