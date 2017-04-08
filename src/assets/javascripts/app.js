class app {

  constructor() {
    this.button = document.querySelector('.button')
    this.bind()
  }

  bind() {
    this.button.addEventListener('click', () => {
      alert('Hello world !')
      console.info('Button clicked')
    })
  }

}

new app()