'use strict';

module.exports = (sequelize, DataTypes) => {
  var books = sequelize.define(
    "books",
    {
      id: {
        type : DataTypes.STRING,
        primaryKey : true,
      },
      book_name: {
        type : DataTypes.STRING,
      },
      author_name: {
        type : DataTypes.STRING
      },
      quantity: {
        type: DataTypes.BIGINT
      }
    }


  );

books.addBooks = (book) => {
    return books.create(book);
}
  
books.listBooks = async () => {
    return await books.findAll({
        attributes: ['id', 'book_name', 'author_name', 'quantity']
    })
}

books.updateBook = async (data) => {
    console.log("Update Book",data)
    return await books.update(
        {
            quantity :  data.quantity 
        }, 
        {
            where : { id : data.book_id }
        }
    );
}

books.deleteBook = async (data) => {
    return await books.destroy(
        {
            where : { id : data.id }
        }
    );
}


  return books;
}