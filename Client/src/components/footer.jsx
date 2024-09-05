
const year = new Date().getFullYear()
console.log(year)
function Footer(){
    return(
        <>
            <footer>
                <p>COPYRIGHT &copy; <span>{year}</span></p>
            </footer>
        </>
    )
}

export default Footer