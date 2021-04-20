module.exports = function (sequelize,dataTypes) {

    let alias = "Product";

    let cols = {
        id_product: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING(45)
        },
        id_brand: {
            type: dataTypes.INTEGER(11)
        },
        price: {
            type: dataTypes.DECIMAL(6,2)
        },
        id_category: {
            type: dataTypes.INTEGER(11)
        },
        id_genre: {
            type: dataTypes.INTEGER(11)
        },
        short_description: {
            type: dataTypes.STRING(45)
        },
        long_description: {
            type: dataTypes.STRING(45)
        },
        available: {
            type: dataTypes.TINYINT
        }
    }

    let config = {
        tablename: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    //Asociaciones
    Product.assiociate = function(models) {
        // Usuarios
        Product.belongsToMany(models.Users, {
            as: "users",
            through: "user_product",
            foreignKey: "id_product",
            otherKey: "id_user",
            timestamps: false
        })
        // Colores
        Product.belongsToMany(models.Colors, {
            as: "colors",
            through: "product_color",
            foreignKey: "id_product",
            otherKey: "id_color",
            timestamps: false
        })
        // Talles
        Product.belongsToMany(models.Sizes, {
            as: "sizes",
            through: "product_size",
            foreignKey: "id_product",
            otherKey: "id_size",
            timestamps: false
        })
        // Marca
        Product.belongsTo(models.Brands, {
            as: "brands",
            foreignKey: "id_brand" 
        })
        // Categoria
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "id_category"
        })
         // Categoria
        Product.belongsTo(models.Genres, {
            as: "genres",
            foreignKey: "id_genre"
        })
    }

    return Product;

}