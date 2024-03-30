const db = require('../db')

module.exports.getAllProducts = async () => {
    const [records] = await db.query("SELECT * FROM shopping_portal")
        .catch(err => console.log(err))
    return records;
}

module.exports.getAllProductsById = async (id) => {
    const [record] = await db.query("SELECT * FROM shopping_portal WHERE id = ?", [id])
        .catch(err => console.log(err))
    return record;
}


module.exports.DeleteProductsById = async (id) => {
    const [record] = await db.query("DELETE FROM shopping_portal WHERE id = ?", [id])
        .catch(err => console.log(err))
    return record;
}

module.exports.insertProduct = async (productData) => {
    const { title, description, status } = productData;
    const [result] = await db.query("INSERT INTO shopping_portal (title, description, status) VALUES (?, ?, ?)", [title, description, status])
        .catch(err => console.error(err));
    return result;
}



module.exports.updateProductById = async (id, productData) => {
    const { title, description, status } = productData;
    const [result] = await db.query("UPDATE products SET title = ?, description = ?, status = ?, WHERE id = ?", [title, description, status, id])
        .catch(err => console.error(err));
    return result;
}



