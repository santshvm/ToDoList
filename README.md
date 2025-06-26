# Selenium Test Automation Project – To-Do List Application

## Repository
Frontend App: https://github.com/santshvm/ToDoList

This repository contains a suite of automated test cases developed using Selenium WebDriver and TestNG in Java, targeting a custom-built To-Do List web application. The purpose of this project is to verify key functionalities through automated UI tests and demonstrate end-to-end testing using a clean and modular structure.


## Test Scenarios Covered

- Add Task – Adds a new item and verifies it is displayed in the list.

- Delete Task – Removes an existing item from the list and verifies it no longer exists.

- Mark Task as Complete – Simulates checking a task as completed and validates checkbox state.

- Filter Tasks (Active / Completed / All) – Tests the UI filter functionality to display tasks based on status.

- Date Heading Validation – Confirms that the current date is correctly rendered in the UI header.

## Technology Stack

- Language: Java

- Automation: Selenium WebDriver

- Testing Framework: TestNG

- Build Tool: Maven

- Execution Config: testng.xml

- Browser: Google Chrome (via ChromeDriver)

## Project Structure

![image](https://github.com/user-attachments/assets/d2628e3f-3eec-4631-b702-d2e1500f5d0e)



## How to Run

Ensure your To-Do app is running locally at http://localhost:3000
(Start with: node app.js)

Download and configure ChromeDriver for your system.
Place it in the project root or add to system PATH.

Run the following command in terminal:
mvn test

Test results will be available under the test-output/ directory.

