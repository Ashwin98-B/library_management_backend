'use strict';

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    "users",
    {
      id: {
        type : DataTypes.STRING,
        primaryKey : true,
      },
      first_name: {
        type : DataTypes.STRING,
      },
      last_name: {
        type : DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: false,
            message: "Invalid Email"
          }
        }
      },
      password: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING
      }
    }


  );

  users.createUser = (user) => {
    return users.create(user);
  }
  
  users.login = async (userObj) => {
    return await users.findOne({
        where: {
            email: userObj.email
        },
        attributes: ['id', 'email', 'password', 'first_name','last_name','role']
    })
}

  users.listAllUsers = async () => {
    return await users.findAll({
        where: {
          role : "USER"
        },
        attributes: ['id', 'email', 'password', 'first_name','last_name','role']
    })
  }


  return users;
}