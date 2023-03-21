# Ecommerce Back-End 
  [![License](https://img.shields.io/static/v1?label=License&message=MIT%20License&color=green)](LICENSE)

  #### Table of contents:
  - [Description](#description)
  - [Instalation](#installation)
  - [Usage](#usage)
  - [License](#license)
  ---
  ## Description
  This Node.js application is an Ecommerce Back-End API  
  - Link to video walk-through: https://drive.google.com/file/d/1EBFiYqT3LCDhAptL19njZgVo6o8OxJlx/view

  ## Installation
  - Install dependecies by running `npm i`
  - Create the mysql database `source schema.sql` from the db folder
  - Seed database `npm run seed`
  - Start server `npm start`

  ## Usage
    The API has a number of endpoints.
    GET `/api/products/`, `/api/tags/`, `/api/categories/`
    GET `/api/products/:id` , `/api/tags/:id`, `/api/categories/:id`
    POST `/api/products/`, `/api/tags/`, `/api/categories/`
    PUT `/api/products/:id` , `/api/tags/:id`, `/api/categories/:id`
    DELETE `/api/products/:id` , `/api/tags/:id`, `/api/categories/:id`


  ## License
  This application is covered under the [MIT License](LICENSE)

---
![Screeshot1](./images/GET-Products.png)
---
![Screenshot2](./images/POST-product.png)

