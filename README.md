# URL Shortener Application

A simple and efficient web application to convert long URLs into short, shareable links with click tracking and analytics.

---

## 🌟 Features

- **Shorten URLs**: Quickly generate short, unique links from long URLs.
- **Automatic Redirection**: Redirect users to the original URL when accessing a short link.
- **Click Tracking**: Log each click with a timestamp for analytics.
- **Database-Backed**: Uses MongoDB to store original URLs, short IDs, and click data.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose for database operations

---

## 🚀 Installation and Setup

Follow these steps to set up the application on your local system:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   ```
2. Navigate to the project directory:
   ```bash
   cd url-shortener
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and configure the following environment variables:
   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Visit the application in your browser at `http://localhost:5000`.

---

## 🖍️ Usage

### Endpoints

#### 1. **Shorten a URL**

- **Endpoint**: `POST /shorten`
- **Description**: Generate a short URL from a given long URL.
- **Request Body**:
  ```json
  {
    "originalUrl": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "shortId": "abc123",
    "originalUrl": "https://example.com"
  }
  ```

#### 2. **Access a Shortened URL**

- **Endpoint**: `GET /:shortId`
- **Description**: Redirects to the original URL associated with the given short ID.

---

## 📁 Project Structure

```
.
├── models/
│   └── url.js          # Mongoose schema and model for URL
├── routes/
│   └── index.js        # API routes
├── .env                # Environment variables
├── server.js           # Entry point for the application
└── README.md           # Project documentation
```

---

## 📦 Example

1. Use `POST /shorten` to shorten a long URL:

   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"originalUrl":"https://example.com"}' http://localhost:5000/shorten
   ```

   Response:

   ```json
   {
     "shortId": "abc123",
     "originalUrl": "https://example.com"
   }
   ```

2. Visit `http://localhost:5000/abc123` in your browser to be redirected to `https://example.com`.

---

## 🐛 Troubleshooting

- **Database Connection Issues**: Check if your `MONGO_URI` in `.env` is correct and your MongoDB server is running.
- **Port Conflicts**: Make sure the port defined in the `.env` file (default: `5000`) is not in use by another application.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to your branch and submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

---

**Happy Coding! 🎉**


