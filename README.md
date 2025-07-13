This is the `README.md` file for The Shared Pantry App, a personal pantry management application. It helps users efficiently track their food items, manage inventory, and minimize waste.

## About the Project

The Shared Pantry App is a modern and intuitive pantry management application built using **React** for the frontend and powered by **AWS Amplify** for robust backend services. It provides a seamless experience for users to:

* **Track Pantry Items:** Easily add, view, and update items in their virtual pantry, including details like name, category, quantity, and even an image.
* **Manage Restock Requests:** Submit requests for items that are running low, helping to keep the pantry well-stocked.
* **Log Consumption:** Record when items are consumed, providing insights into usage patterns and aiding in inventory rotation.
* **User Authentication:** Securely manage user accounts and access to pantry data through AWS Cognito.
* **Image Storage:** Utilize AWS S3 for storing images associated with pantry items.
* **GraphQL API:** Data interactions are handled efficiently and flexibly using AWS AppSync's GraphQL API.


### Features

* Secure User Authentication (Sign-up, Sign-in, Sign-out).
* CRUD operations for Pantry Items (Create, Read, Update, Delete).
* Create and Read operations for Restock Requests.
* Create, Read, and Update operations for Consumption Logs.
* Image upload functionality for pantry items.
* Intuitive and responsive user interface.

### Technologies Used

* **Frontend:** React, JavaScript
* **Backend:** AWS Amplify
    * **Authentication:** AWS Cognito User Pools
    * **API:** AWS AppSync (GraphQL)
    * **Database:** Amazon DynamoDB
    * **Storage:** Amazon S3
* **Styling:** CSS

### Setup and Installation

To get this project running locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/briamia25/pantryapp.git](https://github.com/briamia25/pantryapp.git)
    cd pantryapp
    ```
2.  **Install project dependencies:**
    ```bash
    npm install
    ```
3.  **Amplify Backend Setup:**
    * If you're new to this project, you'll need to link it to your Amplify backend.
    * Run `amplify pull --appId YOUR_ACTUAL_AMPLIFY_APP_ID --envName pantryap`
        * You can find your `App ID` in the AWS Amplify Console under your project settings.
        * The environment name is `pantryap` as per our session.
    * Alternatively, if you want to deploy your own backend, run `amplify init` and follow the prompts.
4.  **Run the application:**
    ```bash
    npm start
    ```
    The application will typically open in your browser at `http://localhost:3000`.
