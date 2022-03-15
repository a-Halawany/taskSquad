const mainModel = require('../../models/main.model')
const resData = require('../helpers/resData')

// function send data to DB
sendData = (data) => {
    let currentModel = new mainModel({
        ...data
    })
    currentModel.save()
}

// Start Controller 
class MainController {
    // function handle control with route
    static main(req, res) {
        try {
            sendData({
                date: Date.now(),
                x: {
                    y: 'z'
                }
            })

            // function to make the api same format
            resData(res, 200, true, null, 'data inserted')

        } catch (e) {
            resData(res, 500, false, null, 'Error in server side try again')
        }
    }
}

// export the class to use with routes
module.exports = MainController

