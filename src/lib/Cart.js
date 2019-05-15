class Basket {

  static getContents() {
    return JSON.parse(localStorage.getItem('basket')) || []
  }

  static setContents(contents) {
    localStorage.setItem('basket', JSON.stringify(contents))
  }

}

export default Basket
