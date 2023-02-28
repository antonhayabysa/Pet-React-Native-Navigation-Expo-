import * as SQLite from 'expo-sqlite';

export class DatabaseConnection {
    private static instance: DatabaseConnection;
    private db: SQLite.WebSQLDatabase;

    private constructor() {
        this.db = SQLite.openDatabase('mydatabase.db');
    }

    public static getConnection(): SQLite.WebSQLDatabase {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }

        return DatabaseConnection.instance.db;
    }
}


const db = SQLite.openDatabase('signup.db');

const createTable = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT);'
        );
    });
};

const addUser = (name: string | number | null, email: string | number | null, password: string | number | null) => {
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO username (username, email, password) VALUES (?, ?, ?)',
            [name, email, password],
            (_, { insertId }) => {
                console.log(`User added with ID: ${insertId}`);
            },
            // @ts-ignore
            (_, error) => {
                console.log(`Failed to add user: ${error}`);
            }
        );
    });
};

const updateUser = (id: string | number | null, name: string | number | null, email: string | number | null, password: string | number | null) => {
    db.transaction((tx) => {
        tx.executeSql(
            'UPDATE username SET username = ?, email = ?, password = ? WHERE id = ?',
            [name, email, password, id],
            (_, { rowsAffected }) => {
                console.log(`User updated with ID: ${id}`);
            },
            // @ts-ignore
            (_, error) => {
                console.log(`Failed to update user: ${error}`);
            }
        );
    });
};

const getUsers = (callback: (arg0: any[]) => void) => {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM users',
            [],
            (_, { rows: { _array } }) => {
                callback(_array);
            },
            // @ts-ignore
            (_, error) => {
                console.log(`Failed to get users: ${error}`);
            }
        );
    });
};

export default {
    createTable,
    addUser,
    updateUser,
    getUsers,
};

