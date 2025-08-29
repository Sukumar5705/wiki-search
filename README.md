
# Wikipedia Search

## Overview
**Wikipedia Search** is a lightweight, single-page web application that allows users to search Wikipedia articles using a keyword.  

The application fetches search results from a **public API** and displays them in a **clean, responsive interface**.  
Built with **HTML, JavaScript, and Bootstrap 5**, it features a modern design with syntax highlighting, error handling, and a user-friendly experience.

The application is a **standalone HTML file** with embedded JavaScript and CSS, making it **easy to deploy and share**.  
It uses the **Fetch API** to retrieve search results and dynamically renders them with **links, titles, and descriptions**.

---

## Features
- **Search Functionality**: Users can enter a keyword and press *Enter* to fetch relevant Wikipedia articles.  
- **Responsive Design**: A clean, card-based layout styled with **Bootstrap 5** and custom CSS, optimized for all screen sizes.  
- **Syntax Highlighting**: Search results are displayed with clear formatting for titles, URLs, and descriptions.  
- **Error Handling**: Displays user-friendly error messages for empty searches, no results, or network issues.  
- **Loading Indicator**: A spinner is shown during API requests to indicate loading status.  
- **Accessibility**: Includes ARIA attributes and screen-reader-friendly elements for better accessibility.  

---

## Project Structure
```

wikipedia-search/
├── index.html            # Main HTML file with embedded JavaScript and CSS
├── .gitignore            # Git ignore file
└── README.md             # Project documentation

```

---

## Execution Flow

### 1. User Interaction
- The user enters a **keyword** in the search input field (`index.html`) and presses the **Enter** key.  
- Input is validated to ensure it is not empty, preventing unnecessary API calls.  

### 2. API Request
- JavaScript listens for the **"Enter" key event** and triggers the `searchWikipedia` function.  
- The function constructs a request URL:  
```

[https://apis.ccbp.in/wiki-search?search=](https://apis.ccbp.in/wiki-search?search=)<keyword>

````
- A `fetch` request is made to the API using the **GET method**, handled asynchronously with `async/await`.  

### 3. Result Processing
- On successful response, JSON data is parsed to extract `search_results` (titles, links, descriptions).  
- The `displayResults` function clears old results and iterates over new results.  
- Each result is dynamically rendered as a **Bootstrap-styled card** with:  
- Clickable title  
- URL  
- Short description  

### 4. Error Handling and Feedback
- If the search term is **empty**, an error message is shown.  
- If the API request fails or returns no results → display a user-friendly error message.  
- A **loading spinner** is displayed during the API call and hidden once results or errors are processed.  

---

## Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)  
- No server setup required — application is a single **HTML file**.  

---

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/wikipedia-search.git
cd wikipedia-search
````

#### 2. Run the Application

* Open `index.html` directly in your browser (**double-click** the file).
* Or serve it using a simple HTTP server:

  ```bash
  npx http-server
  ```
* Then open:

  ```
  http://localhost:8080
  ```

#### 3. Usage

* Enter a **keyword** in the search input field and press **Enter**.
* View search results with:

  * Clickable **titles**
  * **URLs**
  * **Brief descriptions**
* If no results or an error occurs → appropriate message will be displayed.

---

## Dependencies

* **Bootstrap 5.3.3** → responsive styling & components (via CDN).
* **Popper.js** → required for Bootstrap’s JS components (via CDN).

⚡ No external libraries like jQuery → keeps the app **lightweight and fast**.

---

## Contributing

Contributions are welcome! 🎉

1. Fork the repository
2. Create a new branch

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes

   ```bash
   git commit -m "Add your feature"
   ```
4. Push branch

   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

* **Bootstrap 5** → responsive styling and components
* **CCBP API** → for providing the Wikipedia search API
* **Wikipedia** → the open knowledge base powering search results

```

Do you also want me to **include the full index.html source code** (with embedded JS + CSS) in the markdown for documentation?
```
