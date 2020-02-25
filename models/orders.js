'use strict';

module.exports = (sequelize, DataTypes) => {
  var orders = sequelize.define(
    "orders",
    {
      id: {
        type : DataTypes.STRING,
        primaryKey : true,
      },
      user_id : {
        type : DataTypes.STRING
      },
      user_name : {
        type : DataTypes.STRING
      },
      book_id : {
        type : DataTypes.STRING
      },
      book_name: {
        type : DataTypes.STRING,
      },
      author_name: {
        type : DataTypes.STRING
      },
      quantity: {
        type: DataTypes.BIGINT
      },
      issued_date : {
          type : DataTypes.STRING
      }
    }


  );

orders.placeOrder = (order) => {
    return orders.create(order);
}
  
orders.listOrders = async (data) => {
    return await orders.findAll({
        where : { user_id : data.user_id},
        attributes: ['id', 'user_id','user_name', 'book_id','book_name', 'author_name', 'quantity', 'issued_date']
    })
}

orders.listAllOrders = async () => {
  return await orders.findAll({
      attributes: ['id', 'user_id','user_name', 'book_id','book_name', 'author_name', 'quantity', 'issued_date']
  })
}

return orders;
}