fetch(
  "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    const fBooks = document.querySelector(".fbooks");

    for (let i = 42; i < json.length; i++) {
      const newCard = document.createElement("div");
      const img = document.createElement("img");
      const heading = document.createElement("h3");
      const author = document.createElement("span");
      author.classList.add("text-black-50");
      img.src = json[i].simple_thumb;
      img.alt = json[i].title;
      heading.innerHTML = json[i].title;
      author.innerHTML = json[i].author;
      newCard.appendChild(img);
      newCard.appendChild(heading);
      newCard.appendChild(author);
      fBooks.append(newCard);
    }
  });

fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    const bestImg = document.querySelector(".best-img");
    const bestDesciption = document.querySelector(".best-desciption");
    const cover = document.createElement("img");
    const beastAuthor = document.createElement("span");
    const bestTitle = document.createElement("h3");
    const desciption = document.createElement("div");
    const bestButton = document.createElement("button");
    beastAuthor.classList.add("text-black-50");
    cover.src = json.cover;
    cover.alt = json.title;
    beastAuthor.innerHTML = `BY ${json.authors[0].name}`;
    bestTitle.innerHTML = json.title;
    desciption.innerHTML = json.fragment_data.html;
    bestButton.innerHTML = `Shop It Now <i class="fa-solid fa-arrow-right fa-sm"></i>`;
    bestButton.classList.add("border-0");
    bestImg.append(cover);
    bestDesciption.append(beastAuthor);
    bestDesciption.append(bestTitle);
    bestDesciption.append(desciption);
    bestDesciption.append(bestButton);
  });

  fetch(
    "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const pBooks = document.querySelector(".pbooks");
  
      for (let i = 26; i < 34; i++) {
        const newCard = document.createElement("div");
        const img = document.createElement("img");
        const heading = document.createElement("h3");
        const author = document.createElement("span");
        author.classList.add("text-black-50");
        img.src = json[i].simple_thumb;
        img.alt = json[i].title;
        heading.innerHTML = json[i].title;
        author.innerHTML = json[i].author;
        newCard.appendChild(img);
        newCard.appendChild(heading);
        newCard.appendChild(author);
        pBooks.append(newCard);
      }
    });