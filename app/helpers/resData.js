// function to make all response with the same format
const resData = (res, statusCode, apiStatus, data, message) => {
    let all = { apiStatus, data, message }
    res.status(statusCode).send(all)
}

module.exports = resData