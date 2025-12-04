# Money Manager – Budget Tracker

## Project Overview

Money Manager is a single-page web application that is meant to help track income and expenses, get a quick snapshot of financial state and habits, and explore budgeting resources. The goal is to make budgeting feel simple and visual rather than overwhelming.

The application focuses on:
- Adding income and expense transactions
- Viewing overall and weekly summaries
- Visualizing spending by category
- Providing links to external budgeting resources

## Features
### Overview Page
- Displays overall totals for:
  - Total Income  
  - Total Expenses  
  - Net Income  
- Introduces the purpose of the app from a student perspective.
- Provides clear navigation tiles to:
  - Overview (Current Page)
  - Input Transactions  
  - Money Analysis  
  - Budgeting Resources  

### Input Transactions Page
- Toggle between Expense and Income modes.
- Form fields:
  - Amount  
  - Date  
  - Category (Food, Rent, Transport, Entertainment, Other)  
  - Optional note/description  
- On submit, the transaction is added to shared state.
- A Transaction History section, which is below the form, lists all entries as cards:
  - Type (income/expense)
  - Amount
  - Description
  - Date and category
- Transactions are shown with the newest entries at the top.

### Money Analysis Page
- Overall summary card:
  - Total income  
  - Total expenses  
  - Net income (all-time)  
- This Week section:
  - Earned this week  
  - Spent this week  
  - Net this week  
  (Based on transactions within a 7-day window around the most recent transaction date.)
- Spending by Category (All Time):
  - Tiles showing the total spent per category. 
- Spending Pie Chart:
  - Doughnut chart visualization of spending by category using Chart.js and vue-chartjs.
  - Chart updates as new transactions are added.

### Resources Page
- Grid of resource tiles with:
  - Title and description  
  - Link to the external resource  

## Technologies Used

- Vue + Vite (with Vue Router) for my framework
- Tailwind CSS fro styling and design
- Chart.js + vue-chartjs – used to create a pie chart
- GitHub for source control
- Data stored in a JSON file
- Azure Deployment Link: https://thankful-ground-0bfe6bc10.3.azurestaticapps.net/ 

## Lessons Learned
When I began to brainstorm this project, I was very ambitious with the features I wanted to demonstrate. An example of this is how I originally wanted to give the user the ability to customize categories and set budgets. After working on the actual web development portion, I realized I needed to prioritize showing UI features with minimal backend, meaning implementing sample data with a JSON file. Additionally, I learned that Tailwind CSS is able to help condense the style.css file while also allowing more flexibility and consistency with the interface. 

## Future Scope
In the future, I want to work on adding a database to allow me to add more features to this web application and make the data persistent. As mentioned earlier, giving the user more customization would be interesting to do. Additionally, adding profiles or sections to allow people to track different accounts or individuals, such as family members or friends. 