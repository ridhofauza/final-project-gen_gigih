# Database Structure
- Database Name: gigihPlay
- Collection Name: videoProduct
  
| Field Name    | Type                     |
|---------------|--------------------------|
| _id           | String                   | 
| videoID       | String                   |
| urlThumbnail  | String                   |
| products      | Array of Object Product  |
| comments      | Array of Object Comments |

- Object Product

| Field Name    | Type    |
|---------------|---------|
| _id           | String  | 
| productID     | String  |
| linkProduct   | String  |
| title         | String  |
| price         | Number  |

- Object Comment

| Field Name    | Type   |
|---------------|--------|
| _id           | String |
| username      | String | 
| comment       | String |
| created_at    | String |
| updated_at    | String |

# API Structure
**Video Thumbnail**

  **GET /api/gigihplay/video**
  ---
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <videoProduct_object> }`
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

  **GET /api/gigihplay/video/:videoID**
  ---
  * **URL Params**
    * **Required:** `videoID=[string]`
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <videoProduct_object> }`
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

  **POST /api/gigihplay/video**
  ---
  * **Data Params**
    ```
    {
        urlThumbnail: <string>
    }   
    ```
  * **Success Response:**
    * **Code:** 201
    * **Content:** `{ <videoProduct_object> }`
  * **Error Response:**
    * **Code:** 400
    * **Content:** `{ message: <error_message> }`

  **PATCH /api/gigihplay/video/:videoID**
  ---
  * **URL Params**
    * **Required:** `videoID=[string]`
  * **Data Params**
    ```
    {
        urlThumbnail: <string>
    }   
    ```
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <videoProduct_object> }`
  * **Error Response:**
    * **Code:** 400
    * **Content:** `{ message: <error_message> }`

  **DELETE /api/gigihplay/video/:videoID**
  ---
  * **URL Params**
    * **Required:** `videoID=[string]`
  * **Success Response:**
    * **Code:** 200
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

**Product**

  **GET /api/gigihplay/product/:videoID**
  ---
  * **URL Params**
    * **Required:** `videoID=[string]`
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <Array_of_object_product> }`
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

  **GET /api/gigihplay/product/id/:productID**
  ---
  * **URL Params**
    * **Required:** `productID=[string]`
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <product_object> }`
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

  **POST /api/gigihplay/product**
  ---
  * **Data Params**
    ```
    {
        videoID: <string>,
        linkProduct: <string>,
        title: <string>,
        price: <integer>,
    }   
    ```
  * **Success Response:**
    * **Code:** 201
    * **Content:** `{ <product_object> }`
  * **Error Response:**
    * **Code:** 400
    * **Content:** `{ message: <error_message> }`

  **PATCH /api/gigihplay/product/id/:productID**
  ---
  * **URL Params**
    * **Required:** `productID=[string]`
  * **Data Params**
    ```
    {
        linkProduct: <string>,
        title: <string>,
        price: <integer>,
    }   
    ```
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <product_object> }`
  * **Error Response:**
    * **Code:** 400
    * **Content:** `{ message: <error_message> }`

  **DELETE /api/gigihplay/product/id/:productID**
  ---
  * **URL Params**
    * **Required:** `productID=[string]`
  * **Success Response:**
    * **Code:** 200
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

**Comment**

**GET /api/gigihplay/comment/:videoID**
  ---
  * **URL Params**
    * **Required:** `videoID=[string]`
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <Array_of_object_comment> }`
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

  **GET /api/gigihplay/comment/id/:commentID**
  ---
  * **URL Params**
    * **Required:** `commentID=[string]`
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <comment_object> }`
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

  **POST /api/gigihplay/comment**
  ---
  * **Data Params**
    ```
    {
      username: <string>,
      comment: <string>
    }  
    ```
  * **Success Response:**
    * **Code:** 201
    * **Content:** `{ <comment_object> }`
  * **Error Response:**
    * **Code:** 400
    * **Content:** `{ message: <error_message> }`

  **PATCH /api/gigihplay/comment/id/:commentID**
  ---
  * **URL Params**
    * **Required:** `commentID=[string]`
  * **Data Params**
    ```
    {
      username: <string>,
      comment: <string>
    }  
    ```
  * **Success Response:**
    * **Code:** 200
    * **Content:** `{ <product_object> }`
  * **Error Response:**
    * **Code:** 400
    * **Content:** `{ message: <error_message> }`

  **DELETE /api/gigihplay/comment/id/:commentID**
  ---
  * **URL Params**
    * **Required:** `commentID=[string]`
  * **Success Response:**
    * **Code:** 200
  * **Error Response:**
    * **Code:** 500
    * **Content:** `{ message: <error_message> }`

# How to Run App
```
1. Open Terminal/CMD on project folder directory
2. Run "npm install" on terminal/CMD
3. Rename file .env_example to .env
3. Set PORT and DATABASE_URL in .env file
4. Run "npm run dev" on terminal/CMD
5. If app success on terminal/cmd will print "Server listening on port [PORT]"
```