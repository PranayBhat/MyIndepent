var Pizza_List = [
  "Paneer Pizza-Rs-200",
  "Sweet Corn Pizza Rs-200",
  "Simply Veg Pizza Rs-200",
  "Capsicum Pizza Rs-200",
  "Peri-Peri pizza Rs-200",
  "Olive Curnch Pizza Rs-200",
  "Paneer Tikka Pizza Rs-200",
  "Paneer Masala Pizza Rs-200",
];
function getmenu() {
  var htmldata = "";
  Pizza_List.sort();
  for (var i = 0; i < Pizza_List.length; i++) {
    htmldata = htmldata + Pizza_List[i] + "<br>";
  }
  document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item() {
  var htmldata;
  var imgtags = '<img id="im1" src="Pizza.png"/>';
  var item = document.getElementById("add_item").value;
  Pizza_List.sort();
  htmldata = "";
  for (var i = 0; i < Pizza_List.length; i++) {
    htmldata = htmldata + imgtags + Pizza_List[i] + "<br>";
  }
  document.getElementById("display_addedmenu").innerHTML = htmldata;
}
function add_top() {
  var item = document.getElementById("add_item").value;
  Pizza_List.push(item);
  add_item();
}

var FrienchFries_List = [
  "Paneer FrienchFries Rs-400",
  "Sweet Corn FrienchFries Rs-400 ",
  "Simply Veg FrienchFries Rs-400",
  "Capsicum FrienchFries Rs-400",
  "Peri-Peri FrienchFries Rs-400",
  "Olive FrienchFries Rs-400",
];

function frenchmenu() {
  var htmldata = "";
  FrienchFries_List.sort();
  for (var i = 0; i < FrienchFries_List.length; i++) {
    htmldata = htmldata + FrienchFries_List[i] + "<br>";
  }
  document.getElementById("display_frechmenu").innerHTML = htmldata;
}
function add_frenchitem() {
  var htmldata;
  var imgtags = '<img id="im1" src="https://o.remove.bg/downloads/1adaef53-e4b1-4762-867d-8d8ebcada16e/images-removebg-preview.png"/>';
  var item = document.getElementById("add_item").value;
  FrienchFries_List.sort();
  htmldata = "";
  for (var i = 0; i <FrienchFries_List.length; i++) {
    htmldata = htmldata + imgtags + FienchFries_List[i] + "<br>";
  }
  document.getElementById("display_addedmenu").innerHTML = htmldata;
}
function add_sauce() {
  var item = document.getElementById("add_item").value;
  FrienchFries_List.push(item);
  add_frenchitem();
}
