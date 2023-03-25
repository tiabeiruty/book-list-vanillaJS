//ADD LABEL IN HTML


const bookItself = document.querySelector('#input-book')
const bookAuthor = document.querySelector('#input-author')
const bookButton = document.querySelector('#button-book')
let cache = {}
// const authorButton = document.querySelector('#button-author')
const theTable = document.querySelector('#tb')
const row = theTable.insertRow()
const form = document.querySelector('#book-name')

function onAddInformation(e) {
    e.preventDefault()
    for (let keys in cache) {
        
        if (bookAuthor.value === keys && bookItself.value === cache[keys]) {
            alert(`${bookItself.value} by ${bookAuthor.value} already exists!`)  
            return
        } 
        
    }
        
        theTable.innerHTML += `
            <tr>
                <td>${bookItself.value}</td>
                <td>${bookAuthor.value}</td>
                <td><button class="delete-btn">Delete</button></td>
            </tr>
            `
            cache[bookAuthor.value] = bookItself.value
    
    
}
console.log(cache)
function onDelete(e) {
    const btn = e.target
    if (btn.classList[0] === 'delete-btn') {
        btn.closest('tr').remove()
        delete cache[bookAuthor.value]
    }
}
form.addEventListener('submit', onAddInformation)
theTable.addEventListener('click', onDelete)

// bookButton.addEventListener('click', addBook)
// authorButton.addEventListener('click', addAuthor)

// function addBook(event) {
//     event.preventDefault()
//     let bookCell = row.insertCell()
//     bookCell.innerHTML = bookItself.value
    
//     // console.log(bookItself.value)
// }
// function addAuthor(event) {
//     event.preventDefault()
//     let authorCell = row.insertCell()
//     authorCell.innerHTML = bookAuthor.value
// }



