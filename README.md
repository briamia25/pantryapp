# 🥫 The Shared Pantry App

## 🌟 About the Project

The **Shared Pantry App** is a modern and intuitive personal pantry management application designed to help users efficiently track their food items, manage inventory, and minimize waste.

Built with **React** for a responsive frontend and powered by **AWS Amplify** for a robust, scalable backend, this application provides a seamless experience for:

- **Efficient Item Tracking**: Easily add, view, and update pantry items with details like name, category, quantity, and associated images.
- **Restock Management**: Submit and track requests for low-stock items, ensuring the pantry remains well-supplied.
- **Consumption Logging**: Record item usage to gain insights into consumption patterns and facilitate effective inventory rotation.

This project demonstrates practical application development on AWS, leveraging serverless architecture and managed services to deliver a secure and scalable solution.

---

## ✨ Core Features

- **Secure User Authentication**: Implemented via AWS Cognito User Pools, providing robust sign-up, sign-in, and sign-out functionalities.
- **Comprehensive Item Management**: Full CRUD (Create, Read, Update, Delete) operations for pantry items.
- **Request & Log Tracking**: Create and Read operations for Restock Requests, and Create, Read, and Update operations for Consumption Logs.
- **Image Uploads**: Seamlessly upload and retrieve item images, securely stored in Amazon S3.
- **Real-time Data Interaction**: Utilizes an AWS AppSync GraphQL API for efficient and flexible data interactions.
- **Intuitive UI**: A responsive and user-friendly interface built with React.

---

## 🚀 Cloud Architecture & Design Choices

This application leverages a **serverless-first approach on AWS** via AWS Amplify, showcasing a modern, scalable, and cost-effective cloud architecture.

### 🔧 Backend as a Service (BaaS) with AWS Amplify
Amplify significantly accelerates development by providing a managed service layer for common application features. It orchestrates the provisioning and management of underlying AWS services, allowing for rapid iteration and deployment.

### 🔐 Identity & Access Management with AWS Cognito
User authentication and authorization are handled by **AWS Cognito User Pools**. This ensures secure registration, login, and robust access control, with seamless integration into other AWS services.

### 🗃️ Data Layer: AWS AppSync (GraphQL) & Amazon DynamoDB

- **AWS AppSync** provides a GraphQL API, allowing for efficient data fetching and real-time updates.
- **Amazon DynamoDB** is used as the primary NoSQL data store for pantry items, restock requests, and consumption logs.

### 🖼️ Object Storage with Amazon S3
Amazon S3 stores all user-uploaded pantry item images. It integrates with Amplify for secure, direct client-side uploads.

### ⚙️ Compute (Implicit via Amplify)
Though not directly configured as separate Lambda functions, Amplify workflows may use AWS Lambda behind the scenes for custom logic or background tasks.

This serverless architecture **minimizes operational overhead**, focusing efforts on application development rather than infrastructure management.

---

## ⚙️ Technologies Used

### 🖥️ Frontend
- React
- JavaScript
- CSS

### ☁️ AWS Services (via Amplify)
- **AWS Amplify**: Backend orchestration
- **AWS Cognito User Pools**: Authentication & authorization
- **AWS AppSync**: GraphQL API
- **Amazon DynamoDB**: NoSQL database
- **Amazon S3**: Object storage for images
- *(Implicit)* AWS Lambda, AWS CloudFormation

### 🧰 Dev Tools
- Git (Version Control)

---

## 💻 Setup and Installation

To get this project running locally:

- git clone https://github.com/YOUR_USERNAME/shared-pantry-app.git
- cd shared-pantry-app
- npm install
- amplify pull --appId YOUR_ACTUAL_AMPLIFY_APP_ID --envName pantryap
- amplify init
- amplify push
  
Visit http://localhost:3000 to view the application in your browser.





