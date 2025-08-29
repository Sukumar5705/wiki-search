        const searchInputEl = document.getElementById("searchInput");
        const searchResultsEl = document.getElementById("searchResults");
        const spinnerEl = document.getElementById("spinner");
        const errorMessageEl = document.getElementById("errorMessage");

        function createAndAppendSearchResult(result) {
            const { link, title, description } = result;

            const resultItemEl = document.createElement("div");
            resultItemEl.classList.add("result-item");

            const titleEl = document.createElement("a");
            titleEl.href = link;
            titleEl.target = "_blank";
            titleEl.textContent = title;
            titleEl.classList.add("result-title");
            resultItemEl.appendChild(titleEl);

            const titleBreakEl = document.createElement("br");
            resultItemEl.appendChild(titleBreakEl);

            const urlEl = document.createElement("a");
            urlEl.classList.add("result-url");
            urlEl.href = link;
            urlEl.target = "_blank";
            urlEl.textContent = link;
            resultItemEl.appendChild(urlEl);

            const linkBreakEl = document.createElement("br");
            resultItemEl.appendChild(linkBreakEl);

            const descriptionEl = document.createElement("p");
            descriptionEl.classList.add("link-description");
            descriptionEl.textContent = description;
            resultItemEl.appendChild(descriptionEl);

            searchResultsEl.appendChild(resultItemEl);
        }

        function displayResults(searchResults) {
            spinnerEl.classList.add("d-none");
            searchResultsEl.innerHTML = "";
            errorMessageEl.classList.add("d-none");

            if (!searchResults || searchResults.length === 0) {
                errorMessageEl.textContent = "No results found. Please try a different search term.";
                errorMessageEl.classList.remove("d-none");
                return;
            }

            for (let result of searchResults) {
                createAndAppendSearchResult(result);
            }
        }

        async function searchWikipedia(event) {
            if (event.key !== "Enter") return;

            const searchInput = searchInputEl.value.trim();
            if (!searchInput) {
                errorMessageEl.textContent = "Please enter a search term.";
                errorMessageEl.classList.remove("d-none");
                return;
            }

            spinnerEl.classList.remove("d-none");
            searchResultsEl.innerHTML = "";
            errorMessageEl.classList.add("d-none");

            try {
                const url = `https://apis.ccbp.in/wiki-search?search=${encodeURIComponent(searchInput)}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonData = await response.json();
                displayResults(jsonData.search_results);
            } catch (error) {
                spinnerEl.classList.add("d-none");
                errorMessageEl.textContent = `Error fetching results: ${error.message}`;
                errorMessageEl.classList.remove("d-none");
            }
        }

        searchInputEl.addEventListener("keydown", searchWikipedia);
