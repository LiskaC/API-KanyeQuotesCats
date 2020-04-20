let quotesDiv = document.getElementById('quotes');
fetch("https://api.kanye.rest")
  .then(res => res.json())
  .then(quote =>
    { quotesDiv.innerHTML += `<p> ${quote.quote} </p>` }
    );

  let catbutton = document.getElementById('give-cat');
  catbutton.addEventListener("click", evt => {
    let catDiv = document.getElementById('cat-pic')
    fetch("https://api.thecatapi.com/v1/images/search?")
    .then(res => res.json())
    .then(cats => {
      cats.forEach(cat => {
        catDiv.innerHTML += `<h3>This ${cat.breeds} is pretty, oh so pretty!</h3>
        <img src="${cat.url}" alt="this is a cat picture"/>`
      });
    });
  });