document.getElementById('searchBtn').addEventListener('click', function() {
    var searchQuery = document.getElementById('searchBox').value;
    document.getElementById('responseContainer').innerHTML = 'You searched for: ' + searchQuery;
});
