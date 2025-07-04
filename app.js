fetch('data/movies.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('movieContainer');
    const search = document.getElementById('search');

    function renderMovies(movies) {
      container.innerHTML = '';
      movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title}">
          <h2>${movie.title} (${movie.year})</h2>
          <p>${movie.lang}</p>
          <a href="${movie.page}" class="btn">View Details</a>
        `;
        container.appendChild(card);
      });
    }

    renderMovies(data);

    search.addEventListener('input', () => {
      const keyword = search.value.toLowerCase();
      const filtered = data.filter(m =>
        m.title.toLowerCase().includes(keyword)
      );
      renderMovies(filtered);
    });
  });