var DBconfigs = {
    localdb: {
        urldb : 'mongodb://localhost:27017/shopkhanh',
        dbname : "shopkhanh",
        dbusername : "",
        dbpassword : "",
    },

    clouddb: {
        urldb : "mongodb+srv://<khanhkhanh>:<12345>@cluster0.udcst.mongodb.net/<shopkhanh>?retryWrites=true&w=majority",
        dbname : "shopkhanh",
        dbusername : "",
        dbpassword : "",
    }

};

module.exports = DBconfigs.localdb;