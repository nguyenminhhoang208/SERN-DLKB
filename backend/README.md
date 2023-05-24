# set-up-nodejs-expressjs-with-ts

### Sử dụng sequelize-cli with typescript

# Đầu tiên, install packages:

    npm install sequelize
    npm install --save-dev sequelize-cli

# Tại thư mục gốc, tạo file .sequelizerc có nội dung như sau:

        const path = require('path');
        module.exports = {
                            config: path.resolve('./src/configs', 'db.config.json'),
                            'models-path': path.resolve('./src', 'models'),
                            'seeders-path': path.resolve('./src/db', 'seeders'),
                            'migrations-path': path.resolve('./src/db', 'migrations'),
                        };

# Tiếp theo: npx sequelize-cli init

# Config tsconfig.json để có thể compiler các files ts cần thiết sang js để có thể chạy sequelize-cli:

        {
                "compilerOptions": {
                "target": "es2016",
                "module": "commonjs",
                "moduleResolution": "node" ,
                "rootDirs": [
                "./src/configs/db.config.json",
                "./src/models",
                "./src/db/migrations",
                "./src/db/seeders"
                ] ,
                "declaration": false ,
                "emitDeclarationOnly": false ,
                "outDir": "./dist",
                "isolatedModules": true ,
                "esModuleInterop": true ,
                "forceConsistentCasingInFileNames": true ,
                "strict": true ,
                "skipLibCheck": true
                },
                "include": [
                "./src/models/**/*.ts",
                "./src/db/migrations/**/*.ts",
                "./src/db/seeders/**/*.ts"
                ]
        }

# sửa file .sequelizerc thành nội dung như sau:

const path = require('path');

module.exports = {
config: path.resolve('./src/configs', 'db.config.json'),
'models-path': path.resolve('./dist', 'models'),
'seeders-path': path.resolve('./dist/db', 'seeders'),
'migrations-path': path.resolve('./dist/db', 'migrations'),
};

# config file package.json

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon ./server.ts",
"robocopy": "robocopy \".\\src\\configs\" \".\\dist\\configs\" \"db.config.json\" /mon:1",
"connect": "npx sequelize-cli db:migrate",
"seed": "tsc --project tsconfig.json & npx sequelize-cli db:seed:all",
"migrate": " tsc --project tsconfig.json & npx sequelize-cli db:migrate"
},
