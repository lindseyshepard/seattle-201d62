// our plan

/*
  sales data in a table
  // store some data in an object
  // min cust, max cust, avg cookies, storename, hours open, actual sales ( each hour ), total
  // we need sales - do some math, (avg X customers) x each hour
  // we need mock data for customers : random generator
  // we need a total - add up the total from each hour (math)

  // put things in a table
  // 1. find the target
  // 2. create the content -
        2.1 labels, numbers (in rows, tr)
        actual text in cells (th and td)
        2.2 comes from the sales data
      3. append
*/

// constructor function for my stores (seattle, tokyo), all constructors are capitalized
function Store(minCustomers, maxCustomers, avgCookiesPerCustomer, storeName, hourOpen, hourClosed){
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer; // i walk in i will buy 10 cookies
  this.storeName = storeName;
  this.hourOpen = hourOpen;
  this.hourClosed = hourClosed;

  // actual sales, total
  this.cookieSales = [];
  this.total = 0;

}

Store.prototype.generateRandomCustomersForOneHour = function(){
  // return a random #
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

Store.prototype.sellCookiesForAllHours = function() {
  // make 13 hours worth of sales, put them in an array

  for(var i = this.hourOpen; i < this.hourClosed; i += 100){

    // no for loop to start, just once to start
    // avgCookies is a statistic (100.3)
    // we made an executive decision here, you would ask the customer
    var cookies = Math.floor(this.generateRandomCustomersForOneHour() * this.avgCookiesPerCustomer); // 23 cookies that hour
    this.cookieSales.push(cookies);
  }

};

Store.prototype.totalTheSales = function () {
  // adding everything from the soldCookies array
  // return a total, maybe store it in the object
  for(var i = 0; i < this.cookieSales.length; i++){
    this.total = this.total + this.cookieSales[i];
  }
  return this.total;
};

Store.prototype.renderAsATableRow = function() {
  // 1. find the target
  var myTable = document.getElementById('cookieStores');
  // 2. create the content -
  //    2.1 put in a row)
  var newTrowEl = document.createElement('tr');
  //    actual text in cells(th and td)
  var newThEl = document.createElement('th');
  newThEl.textContent = this.storeName;
  newTrowEl.appendChild(newThEl);

  for(var i = 0; i < this.cookieSales.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookieSales[i];
    newTrowEl.appendChild(tdEl);
  }

  var tdEl = document.createElement('td');
  tdEl.textContent = this.total;
  newTrowEl.appendChild(tdEl);


  myTable.appendChild(newTrowEl);
};

var seattle =new Store(2, 20, 100.3, 'Seattle', 1100, 1600);
console.log(seattle);
// var tokyo = new Store(20);
// test for rando
console.log('rando for an hour : ' + seattle.generateRandomCustomersForOneHour());

// test for making my array
seattle.sellCookiesForAllHours();
// cookie sales will be the name of my array
console.log('sales array : ', seattle.cookieSales);

// test for the total
seattle.totalTheSales();
// totalSales will be the name of the total
console.log('total : ' + seattle.total);

seattle.renderAsATableRow();

var tokyo = new Store(2, 3, 1.7, 'Tokyo Delights', 200, 2200);
tokyo.sellCookiesForAllHours();
tokyo.renderAsATableRow();
tokyo = new Store(2, 10, 11.7, 'asdf Delights', 200, 2200);
tokyo.sellCookiesForAllHours();
tokyo.renderAsATableRow();
tokyo = new Store(20, 30, 3.1, 'Tokyo asdf', 200, 2200);
tokyo.sellCookiesForAllHours();
tokyo.renderAsATableRow();
tokyo = new Store(2, 3, 1.7, 'Tokyo Delights', 200, 2200);
tokyo.sellCookiesForAllHours();
tokyo.renderAsATableRow();
tokyo = new Store(2, 3, 1.7, 'Tokyo Delights', 200, 2200);
tokyo.sellCookiesForAllHours();
tokyo.renderAsATableRow();



