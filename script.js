document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchBox').value;
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': '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'
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: searchQuery,
            temperature: 0.7,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseContainer').innerHTML = data.choices[0].text.trim();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
