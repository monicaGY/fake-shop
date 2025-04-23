# Fake Shop

**Fake Shop** is a simulated online store built with **Nuxt.js** and using **external services**. This project provides an interactive shopping experience with the following key features:

### Features

- **Explore Products**: View the available items in the store.
- **Filter by Price**: Easily find products using price filters.
- **Cart Management**:
  - **Add products** to the cart.
  - **Modify the quantity** of products directly from the cart.
- **Add from the Listing**: Products can also be added to the cart directly from the store view.



## Prerequisites

Before you begin, ensure you have the following installed:
- [Git](https://git-scm.com/downloads)

## Clone and Build the API
To build and run this project, you'll need to clone the repository and follow the setup instructions provided in the project's README.
<br>

🔗 [**API Repository – api-fakeShop**](https://github.com/monicaGY/api-fakeShop)


## Clone the Repository
```bash
# Clone the repository
git clone https://github.com/monicaGY/fake-shop fake-shop

# Navigate to the project directory
cd fake-shop
```

## Environment Setup

```bash
# Copy the example env file
cp .env.example .env

# Add the following variables in .env file
API_DOMAIN_FAKE_SHOP=https://fakestoreapi.com/
API_DOMAIN_FAKE_SHOP_CARTS=http://localhost:8080/api/
USER_ID_SHOP=7
CART_ID=1
```

## Run the Project

To get the project up and running:

```bash
# Install dependencies
npm install

# Start the server
npm run dev
```


