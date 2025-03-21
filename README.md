# API Rest to follow the stocks updates on the market

This project is meant to be a stock tracker and brokerage simulator where a logged user can see in real time a stock price changing over time and buy it if preferred.

## Hexagonal Architecture

Well known as well as adapters and ports architecture the project follows a hexa architecture, this allows to mantain the independence of the system components.

## Constrains

- Node.js 23.0.0
- MongoDB

## Used packages

- `bcryptjs`: ^2.4.3
- `body-parser`: ^1.20.3
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.21.1
- `jsonwebtoken`: ^9.0.2
- `mongoose`: ^8.8.3
- `nodemon`: ^3.1.7

## Project description

### Functionalities

1. **Authentication flow**:
   - Register a user encrypting password using JWT.
   - Create the user reference in Mongo DB database.
   - Retrieving user from DB.
   - Loging confirming the user password whether is valid or not:

2. **Requesting to Alpha vantage stocks**:
   - Allows the user to retrieve the history movement of a stock price in a range of 15 min passing the symbol of the wanted stock.

3. **Obtener Cantidad de Imágenes Procesadas Agrupadas por Horas**:
   - Permite obtener la cantidad de imágenes procesadas agrupadas por horas en una fecha específica.

### Estructura del Proyecto

- `src/application/services`: Contiene la lógica de negocio y los servicios de la aplicación.
- `src/domain/models`: Contiene los modelos de datos de MongoDB.
- `src/domain/repositories`: Contiene las interfaces de los repositorios.
- `src/adapters/repositories`: Contiene las implementaciones de los repositorios.
- `src/adapters/controllers`: Contiene los controladores de la API.
- `src/infrastructure/config`: Contiene la configuración de la base de datos.
- `src/infrastructure/middleware`: Contiene los middlewares de la aplicación.
- `src/infrastructure/routes`: Contiene las rutas de la API.
- `src/utils`: Contiene funciones utilitarias.

#### Para visualizar la estructura mas claramente ingresa a: 
- ```bash
  https://gitingest.com/freiman-uribe/imgProcessor_backend-
  ```

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/freiman-uribe/imgProcessor_backend-.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd imgProcessor_backend-
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno en el archivo .env:

   ```env
   PORT=3000
   MONGO_URI=demo_mongoDB_URI
   AWS_S3_BUCKET_NAME=demo_bucket_name
   AWS_ACCESS_KEY_ID=your_aws_access_key_id
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   AWS_REGION=your_region
   JWT_SECRET=your_jwt_secret
   ```

### Uso

1. Inicia el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

2. Inicia el servidor en modo producción:

   ```bash
   npm start
   ```

### Endpoints

- **POST /api/auth/register**: Registra un nuevo usuario.
- **POST /api/auth/login**: Inicia sesión y obtiene un token JWT.
- **POST /api/images/upload**: Sube una imagen para ser procesada.
- **GET /api/images/search**: Busca imágenes subidas entre dos fechas.
- **GET /api/images/count**: Obtiene la cantidad de imágenes procesadas agrupadas por horas en una fecha específica.

### Ejemplo de Uso

1. **Registrar un Usuario**:

   ```bash
   curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"name": "John Doe", "username": "johndoe", "password": "password123", "userType": "Client"}'
   ```

2. **Iniciar Sesión**:

   ```bash
   curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"username": "johndoe", "password": "password123"}'
   ```

3. **Subir una Imagen**:

   ```bash
   curl -X POST http://localhost:3000/api/images/upload -H "Authorization: Bearer your_jwt_token" -F "image=@path_to_your_image.jpg"
   ```

4. **Buscar Imágenes entre Fechas**:

   ```bash
   curl -X GET "http://localhost:3000/api/images/search?startDate=2023-01-01&endDate=2023-12-31" -H "Authorization: Bearer your_jwt_token"
   ```

5. **Obtener Cantidad de Imágenes Procesadas Agrupadas por Horas**:

   ```bash
   curl -X GET "http://localhost:3000/api/images/count?date=2023-01-01" -H "Authorization: Bearer your_jwt_token"
   ```

### Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría realizar.

# api-stock
