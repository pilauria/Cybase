# Cybase App

[App demo](https://cibaseapp.herokuapp.com/)

## Description

Cibase is a bicycle e-commerce app where you can buy bycicles.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **SearchBar**: anyone can search product through the searchbar (case insensitive, can search signs and characters, can insert just initial or 1 or more words within the searched terms)
- **User Signup:** As an anon I can sign up in the platform so that I can browse products, add them to basket and edit the basket.
- Cannot add to cart products out of stock
- See average review for any product
- **User Login:** As a user I can login to the platform so that I can:
  - complete the payment process
  - see my orders
  - write reviews
  - edit my account
  - see error messages about failed payments, no more that 1 review for product.
- **User Logout:** As a user I can logout from the platform so no one else can use it
- **Admin Login:** As an Admin I can:
  - add / create / edit / delete Orders
  - create/edit/delete products
  - create/edit delete other admin users
  - see status of payments and orders
  - confirm delivery
  - write review
  - browse/add/buy products

## Backlog

User profile:

- Create different Loader
- Password check (REGEX)
- Authentication with social login,
- Categories and sub categories of products,
- Discount coupon code,
- Password forgot/reset, confirmation email on signup, \*\*\*\*
- Multiple Image Uploads with Client Side Resize,
- Advance searching and filtering,
- Add to wishlist,
- Upload images to cloudinary (and multiple image upload)
- PDF/Invoice Download
- Stripe payment
- List New Products First
- Add A Dropdown to Brand Instead of text-input
- Have multiple images show in a slider inside product details view.
- Implement a edit or delete functionality for reviews
- Implement Stripe
- Implement Dark Mode
- Filtering: By Price, By brand
- Save Payment Method To LocalStorage.
- If product price changed, show a red slash on old price and show new one next to it.
- Add modal windows instead of alerts

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                                | Component         | Permissions                          | Behavior                                                      |
| ----------------------------------- | ----------------- | ------------------------------------ | ------------------------------------------------------------- |
| `/`                                 | HomeScreen        | public `<Route>`                     | Home page                                                     |
| `/register`                         | RegisterScreen    | anon only `<AnonRoute>`              | Signup form, link to login, navigate to homepage after signup |
| `/login`                            | LoginScreen       | anon only `<AnonRoute>`              | Login form, link to signup, navigate to homepage after login  |
| `/product/:id`                      | ProductScreen     | anon `<Anon/PrivateRoute>`           | Show single product details                                   |
| `/profile`                          | ProfileScreen     | user only `<PrivateRoute>`           | Shows user profile                                            |
| `/placeorder`                       | PlaceOrderScreen  | user only `<PrivateRoute>`           | Place Order                                                   |
| `/payment`                          | PaymentScreen     | user only `<PrivateRoute>`           | Make payment                                                  |
| `/shipping`                         | ShippingScreen    | user only `<PrivateRoute>`           | Show Shipping details                                         |
| `/order/:id`                        | OrderScreen       | user only `<PrivateRoute>`           | Show paiy order                                               |
| `/cart/:id?`                        | CartScreen        | anon/user only `<Anon/PrivateRoute>` | Show cart                                                     |
| `/admin/userlist`                   | UserListScreen    | admin only `<PrivateRoute>`          | Show users list                                               |
| `/admin/user/:id/edit'`             | UserEditScreen    | admin only `<PrivateRoute>`          | Edit user                                                     |
| `/admin/productlist`                | ProductListScreen | admin only `<PrivateRoute>`          | Show products list                                            |
| `/admin/productlist/:pageNumber`    | ProductEditScreen | admin only `<PrivateRoute>`          | Show products list w/ pagination                              |
| `/admin/product/:id/edit`           | ProductEditScreen | admin only `<PrivateRoute>`          | Edit product                                                  |
| `/admin/orderlist`                  | OrderListScreen   | admin only `<PrivateRoute>`          | Show orders list                                              |
| `/search/:keyword`                  | HomeScreen        | pubblic `<Anon/PrivateRoute>`        | Show search /keyword                                          |
| `/page/:pageNumber`                 | HomeScreen        | pubblic `<AnonPrivateRoute>`         | Show search / pagenumber                                      |
| `/search/:keyword/page/:pageNumber` | HomeScreen        | pubblic `<AnonPrivateRoute>`         | Show search                                                   |

## Components

- CartScreen

- ErrorPage

- HomeScreen

- RegisterScreen

- LoginScreen

- ProductScreen

- ProfileScreen

- PaymentScreen

- ShippingScreen

- OrderScreen

- CartScreen
- UserListScreen
- UserEditScreen
- ProductListScreen
- ProductEditScreen
- OrderListScreen
- Checkout steps
- Footer
- Header
- FormContainer
- Loader
- Message
- Meta
- Paginate
- Product
- ProductCarouserl
- Rating
- SearchBox

<br>

# Server / Backend

## Models

User model

```javascript
 {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
```

Product model

```javascript
 {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema], //average of reviews rating
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
```

Order model

```javascript
{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
```

Review model

```javascript
{
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                             | Request Body            | Success status | Error Status | Description                                                                                                                     |
| ----------- | ------------------------------- | ----------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/api/users/profile`            | Saved session           | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/api/users`                    | {name, email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                   | {username, password}    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`                  | (empty)                 | 204            | 400          | Logs out the user                                                                                                               |
| DEL         | `api/users/:id`                 |                         |                | 400          | Delete a user, admin only                                                                                                       |
| PUT         | `/api/users/profile`            | {id}                    |                |              | Show specific tournament                                                                                                        |
| GET         | `/api/users/:id`                | {}                      | 201            | 400          | Get users by ID. Admin only                                                                                                     |
| PUT         | `/api/users`                    | {}                      | 200            | 400          | Get all users. Admin only                                                                                                       |
| DELETE      | `Update user by ID. Admin Only` | {id}                    | 201            | 400          | delete tournament                                                                                                               |
| GET         | `/api/orders/:id`               |                         |                | 400          | Get an order by ID                                                                                                              |
| PUT         | `/api/players/:id`              | {id}                    |                |              | Update user by ID. Admin Only                                                                                                   |
| GET         | `/api/orders/myorders`          | {}                      | 200            | 404          | Get logged in users order                                                                                                       |
| GET         | `/api/products`                 | {name,img}              | 201            | 400          | Get all products                                                                                                                |
| GET         | `/api/products/:id`             | {id}                    | 200            | 400          | Get single product by id                                                                                                        |
| DEL         | `/api/products/:id`             | {}                      | 201            | 400          | Delete product. Admin only.                                                                                                     |
| GET         | `/api/products`                 | {}                      |                |              | Add new sample product                                                                                                          |
| POST        | `/api/products/:id/reviews`     | {}                      |                |              | Add new product review                                                                                                          |
| POST        | `/api/users/login`              | {}                      |                |              | Authenticate users and get token                                                                                                |
| GET         | `/api/orders/:id`               | {}                      |                |              | Get an order by ID                                                                                                              |
| GET         | `/api/orders/myorders`          | {}                      |                |              | Get logged in users order ID                                                                                                    |

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/)
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/pilauria/Cybase)

[Server repository Link](https://github.com/pilauria/Cybase)

[Deployed App Link](https://cibaseapp.herokuapp.com/)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
