let book = [
  { id: 1, name: "Kha" },
  { id: 2, name: "Ha" },
  { id: 3, name: "Ngoc" },
  { id: 4, name: "Hao" },
  { id: 5, name: "TA" },
];
function searchbook() {
  let idValue = document.getElementById("idBook").value;
  let id = parseInt(idValue);
  let idBook = book.find((book) => book.id === id);
  if (idBook) {
    alert(`Id: ${idBook.id}` + " " + ` Tên: ${idBook.name}`);
  } else {
    alert("không tìm thấy sách");
  }
}
