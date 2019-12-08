class Item {
  constructor(title, image, desc) {
    this.title = title,
      this.image = image,
      this.desc = desc;
  }
}

let shoesHandler = function (req, res) {
  var url = require('url');
  var query = url.parse(req.url, true).query;
  res.statusCode = 200;

  if (query.type == "formal") {
    res.setHeader('Content-Type', 'text/html');
    let item = new Item("Shoes", "img.jpg", "Formal Shoes");
    res.write(`<h1> ${item.title} </h1> ${item.image} <br> ${item.desc} `);

  } else {
    res.setHeader('Content-Type', 'text/html');
    let item = new Item("Shoes", "img.jpg", "Regular Shoes");
    res.write(`<h1> ${item.title} </h1> ${item.image} <br> ${item.desc} `);

  }
  res.end();

}

let socksHandler = function (req, res) {
  var url = require('url');
  var query = url.parse(req.url, true).query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (query.type == "winter") {
    let item = new Item("Socks", "img.jpg", "Winter Socks");
    res.write(`<h1> ${item.title} </h1> ${item.image} <br> ${item.desc} `);
  } else {
    let item = new Item("Socks", "img.jpg", "Regular Socks");
    res.write(`<h1> ${item.title} </h1> ${item.image} <br> ${item.desc} `);
  }
  res.end();

}
module.exports = {
  'shoesHandler': shoesHandler,
  'socksHandler': socksHandler
}