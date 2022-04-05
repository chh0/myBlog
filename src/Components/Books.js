import React from 'react'
import books from "../mds/books"
import "../style/Books.css"

const Book = () => {
    let List = []
    // let colorList = [
    //     "rgb(211, 34, 94)",
    //     "rgb(123, 23, 14)",
    //     "rgb(32, 13, 94)",
    //     "rgb(76, 193, 134)",
    //     "rgb(176, 223, 188)",
    //     "rgb(98, 123, 234)",
    //     "rgb(234, 133, 54)",
    //     "rgb(199, 12, 130)",
    //     "rgb(75, 74, 66)",
    // ]
    for(let i of books){
        List.push(
            <div class="BookCard">
                <a href={i.link} target="_blank" rel="noreferrer">
                    <h1>{i.name}</h1>
                    <p>{i.comment}</p>
                </a>
            </div>
        )
    }
    // let tagNameStyle = {}
    // let cnt = 0 
    return (
        <div id="Book">
            <h1>chh的书架</h1>
            <div id='Bookbox'>
                {List}
            </div>
        </div>
    )
}

export default Book;