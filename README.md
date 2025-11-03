🏆 League API – CRUD con Node.js, Express y MongoDB

Este proyecto implementa una API RESTful para gestionar ligas deportivas, permitiendo crear, leer, actualizar y eliminar registros desde una base de datos MongoDB.

⚙️ Tecnologías utilizadas

Node.js
Express
Mongoose (MongoDB)
Postman (para pruebas de endpoints)

🚀 Funciones principales (CRUD)
Método	Endpoint	Descripción
GET	-> /api/leagues	- Obtiene todas las ligas almacenadas
GET	->/api/league/:id	- Obtiene una liga específica por su ID
POST ->	/api/league	- Crea una nueva liga
PUT	-> /api/league/:id	- Actualiza una liga existente
DELETE ->	/api/league/:id	- Elimina una liga por ID

🧩 Estructura del modelo League
{
  name: String,          // Nombre de la liga (obligatorio, 3–40 caracteres)
  sport: String,         // Tipo de deporte (obligatorio, debe ser uno de los valores permitidos)
  country: String,       // País de la liga (obligatorio)
  openingDate: Date,     // Fecha de inicio (opcional)
  participantNumber: Number, // Número de participantes (obligatorio)
  createdAt: Date,       // Fecha de creación (automática)
  updatedAt: Date        // Fecha de última actualización (automática)
}

🧠 Controladores

Los controladores implementan la lógica principal del CRUD:

🔹 getLeagues
Obtiene todas las ligas de la base de datos.

🔹 getLeagueById
Devuelve una liga específica según el ID recibido como parámetro.

🔹 createLeague
Crea una nueva liga validando los datos de entrada.
Incluye manejo de errores de validación de Mongoose.

🔹 updateLeague
Actualiza una liga existente. Si el ID no existe, devuelve un error 404.

🔹 deleteLeague
Elimina una liga según su ID. Si no se encuentra, devuelve un error 404.

🧪 Colección de Postman

🔹 getLeagues

curl --location --request GET 'http://localhost:3000/api/leagues' \
--header 'Content-Type: text/plain' \
--data '{
    "name": "Age Of Empires",
    "platform": "PC",
    "price": 15,
    "stock": 100,
    "img": "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2019%2F08%2F19%2Fheader_image%2F163326851566244790.jpg?auth=4590a7b05c560f7cd787ff019086f8e44a87d1228e1d7eb769c413b695658108&width=480&height=250&smart=true"
}'

🔹 getLeagueById

curl --location --request GET 'http://localhost:3000/api/league/690767f7bf7e727f003292a6' \
--header 'Content-Type: text/plain' \
--data '{
    "name": "Age Of Empires",
    "platform": "PC",
    "price": 15,
    "stock": 100,
    "img": "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2019%2F08%2F19%2Fheader_image%2F163326851566244790.jpg?auth=4590a7b05c560f7cd787ff019086f8e44a87d1228e1d7eb769c413b695658108&width=480&height=250&smart=true"
}'

🔹 createLeague

curl --location 'http://localhost:3000/api/league' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Premier League",
    "sport": "football",
    "country": "England",
    "participantNumber": 20
}   '

🔹 updateLeague

curl --location --request PUT 'http://localhost:3000/api/league/690910a0253a991a06c8fb7f' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Liga Argentina",
    "sport": "Football",
    "country": "Argentina",
    "participantNumber": 40
}   '

🔹 deleteLeague

curl --location --request DELETE 'http://localhost:3000/api/league/6908f8341ff8ceea936cc6d1'
