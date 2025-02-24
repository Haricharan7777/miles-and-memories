const places = ["goa", "andaman & nicobar islands", "kerala", "araku valley", "assam", "darjeeling","gokarna","amritsar","hampi","jaipur","kodaikanal","lakshadweep","leh-ladakh","madhurai","madhyapradesh","manali","munnar","mysore","odisha","ooty","pondicherry","rishikesh","shimla","spiti valley","agra","tirupati","udaipur","varanasi","varkala","vizag"];

    let selectedIndex = -1;

    function showSuggestions() {
        let input = document.getElementById("search-input").value.toLowerCase();
        let suggestionsBox = document.getElementById("suggestions-box");

        suggestionsBox.innerHTML = "";
        selectedIndex = -1; // Reset selection

        if (input === "") {
            suggestionsBox.style.display = "none";
            return;
        }

        let filteredPlaces = places.filter(place => place.toLowerCase().startsWith(input));

        if (filteredPlaces.length === 0) {
            suggestionsBox.innerHTML = "<div class='suggestion-item'>No results found</div>";
        } else {
            filteredPlaces.forEach((place, index) => {
                let div = document.createElement("div");
                div.classList.add("suggestion-item");
                div.textContent = place;
                div.onclick = () => selectSuggestion(place);
                div.setAttribute("data-index", index);
                suggestionsBox.appendChild(div);
            });
        }

        suggestionsBox.style.display = "block";
    }

    function handleKey(event) {
        let suggestions = document.querySelectorAll(".suggestion-item");

        if (event.key === "ArrowDown") {
            selectedIndex = (selectedIndex + 1) % suggestions.length;
            updateActiveSuggestion(suggestions);
        } else if (event.key === "ArrowUp") {
            selectedIndex = (selectedIndex - 1 + suggestions.length) % suggestions.length;
            updateActiveSuggestion(suggestions);
        } else if (event.key === "Enter") {
            event.preventDefault();
            if (selectedIndex !== -1) {
                selectSuggestion(suggestions[selectedIndex].textContent);
            }
        }
    }

    function updateActiveSuggestion(suggestions) {
        suggestions.forEach((item, index) => {
            item.classList.toggle("active", index === selectedIndex);
        });

        if (selectedIndex !== -1) {
            document.getElementById("search-input").value = suggestions[selectedIndex].textContent;
        }
    }

    function selectSuggestion(place) {
        document.getElementById("search-input").value = place;
        document.getElementById("suggestions-box").style.display = "none";

        // Redirect based on place name (modify URL structure as needed)
        window.location.href = `${place.toLowerCase()}.html`;
    }

    document.addEventListener("click", (event) => {
        if (!document.querySelector(".search-container").contains(event.target)) {
            document.getElementById("suggestions-box").style.display = "none";
        }
    });