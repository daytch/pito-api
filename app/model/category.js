const { dbmysql } = require('../middlewares');
const TableName = "category";

exports.getAllRecord = function(callback){
    dbmysql.query("SELECT * FROM " + TableName + " WHERE 1=1", function(error, rows, fields){
        if(error){
            // console.log(error);
            callback(error, null);
        }
        else {
            // console.log(rows);
            callback(null, rows);
        }
    });
};

exports.getCategory = async(id_cat, callback) => {
    var que = "SELECT * FROM " + TableName + " WHERE 1=1 AND id = " + id_cat;
    
    dbmysql.query(que, function(error, rows, fields){
        if(error){
            callback(error, null);
        }
        else {
            callback(null, rows);
        }
    });
};