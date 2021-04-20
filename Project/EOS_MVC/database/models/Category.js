module.exports = function (sequelize,dataTypes) {

    let alias = "Category";

    let cols = {
        id_category: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tablename: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    return Category;

}