import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../database/index.js";

const User = sequelize.define("User", {
	id: {
		type: DataTypes.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
		unique: true
	},
	firstName: {
		type: DataTypes.STRING
	},
	middleName: {
		type: DataTypes.STRING
	},
	lastName: {
		type: DataTypes.STRING
	},
	userName: {
		type: DataTypes.STRING,
		unique: true
	},
	email: {
		type: DataTypes.STRING,
		unique: true
	},
	phoneNumber: {
		type: DataTypes.STRING,
		unique: true
	},
	password: {
		type: DataTypes.STRING
	},
	dateOfBirth: {
		type: DataTypes.STRING
	},
	role: {
		type: DataTypes.ENUM([
			"User", "Admin"
		]),
		defaultValue: "User"
	},
	verified: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
	active: {
		type: DataTypes.BOOLEAN,
		defaultValue:true
	}
}, {
	sequelize,
	timestamps: true,
	tableName: "users",
	modelName: "User"
});

export default User;