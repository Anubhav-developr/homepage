function searchWithDuck(event) {
    var searchQuery = document.getElementById("query_box").value;
    if (searchQuery != "") {
        searchQuery = "https://duckduckgo.com/?q=" + searchQuery;
        window.location.href = searchQuery;
    }
    return false;
}
