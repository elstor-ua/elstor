fetch(`./catalog.json`)
.then(response=>response.json())
.then(data=>data.forEach(item-> {
  document.getElementById('catalog').innerHTML += '
                         <div class = "card">
                         <img src = "${item.img}">
                         <h3>${item.name}</h3>
                         <p>${item.desc}</p>
<span>${item.price} грн. </span>
  </div>';
});
});
