class Book{
    constructor(title,author,uid) {
        this.title = title;
        this.author = author;
        this.uid = uid;
    }
}

class UI {
    addBookToList(book){
        const bookList = document.getElementById('book-list');
        const tr = document.createElement('tr');
        // let books;
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.uid}</td>
            <a href = "#" class="delete">X</a>
        `;
        bookList.appendChild(tr);
    }
    
    showAlert(message,color) {
        const div = document.createElement('div');
        const parent = document.querySelector('.card-content');
        const form = document.getElementById('book-form');
        div.className = color;
        div.appendChild(document.createTextNode(message));
        parent.insertBefore(div,form);
        setTimeout(function(){
            div.remove();
        },3000)
    }

    clearField(){
        document.getElementById('book-title').value = '';
        document.getElementById('book-author').value = '';
        document.getElementById('uid').value = '';
    }

    deleteBook(target){
        if(target.className === 'delete')
        target.parentElement.parentElement.remove();
    }

}

document.addEventListener('DOMContentLoaded',Store.displayBooks);


document.addEventListener('submit', function(e){
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const uid = document.getElementById('uid').value;
    const book = new Book(title,author,uid);
    const ui = new UI();

    if(title ==='' || author === '' || uid ===''){
        ui.showAlert('Please Enter a valid entry','error');
    }
    else{
        ui.addBookToList(book);
        Store.addBook(book);
        ui.showAlert('Book Added','success');
        ui.clearField();
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed','success');
});



class Store{
    
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI();
            ui.addBookToList(book);
        });
    }
}