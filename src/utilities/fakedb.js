// use localStorage to manage the cart data

const addDb = id => {
    const quantity = localStorage.getItem(id)
    if(quantity) {
        console.log('Already exist ')
        const newQuantity = +quantity + 1;
        localStorage.setItem(id, newQuantity);
    }else {
        console.log('New Item')
        localStorage.setItem(id, 1);
    }
}

export default addDb;