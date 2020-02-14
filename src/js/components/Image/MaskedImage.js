export default class MaskedImage {
  constructor(className) {
    this.className = className
  }

  get inner() {
    return `
    <svg viewBox="0 0 133.63 133.714"  class="image__bg">
      <path d="M61.27 133.55c-12.789-1.408-25.036-6.666-35.97-15.444-12.417-9.969-21.778-24-24.663-36.969-.786-3.532-.857-9.458-.144-12.13.774-2.904 2.18-5.422 4.234-7.585 3.027-3.186 7.205-5.657 15.798-9.342 10.014-4.294 16.466-7.913 21.299-11.947 6.336-5.29 9.574-10.375 14.044-22.057 2.486-6.498 3.893-9.48 5.65-11.971C64.7 1.593 69.197-.33 75.69.045c5.405.313 10.118 1.706 16.67 4.926 7.204 3.54 13.662 8.233 19.85 14.421 11.725 11.725 18.928 25.558 21.082 40.488.517 3.583.428 13.017-.16 16.933-2.144 14.299-8.661 27.335-18.692 37.39-5.385 5.398-10.913 9.35-17.846 12.759-6.502 3.196-12.83 5.162-20.028 6.22-3.339.492-12.235.706-15.294.369z" />
    </svg>

    <svg class="image__img" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 140 140" >
        <defs>
          <clipPath id="${this.id}" clipPathUnits="userSpaceOnUse">
            <path  d="M61.27 133.55c-12.789-1.408-25.036-6.666-35.97-15.444-12.417-9.969-21.778-24-24.663-36.969-.786-3.532-.857-9.458-.144-12.13.774-2.904 2.18-5.422 4.234-7.585 3.027-3.186 7.205-5.657 15.798-9.342 10.014-4.294 16.466-7.913 21.299-11.947 6.336-5.29 9.574-10.375 14.044-22.057 2.486-6.498 3.893-9.48 5.65-11.971C64.7 1.593 69.197-.33 75.69.045c5.405.313 10.118 1.706 16.67 4.926 7.204 3.54 13.662 8.233 19.85 14.421 11.725 11.725 18.928 25.558 21.082 40.488.517 3.583.428 13.017-.16 16.933-2.144 14.299-8.661 27.335-18.692 37.39-5.385 5.398-10.913 9.35-17.846 12.759-6.502 3.196-12.83 5.162-20.028 6.22-3.339.492-12.235.706-15.294.369z" />
          </clipPath>
        </defs>
        <image width="100%" height="100%" clip-path="url(#${this.id})" preserveAspectRatio="xMinYMin slice" xlink:href="${this.href}" />
      </svg>
    `
  }

  init() {
    this.imgs = [...document.querySelectorAll(this.className)]
    if (!this.imgs.length) return

    this._intersectElements()
    this._initAll()
  }

  _initAll() {
    this.imgs.forEach(img => {
      this.observer.observe(img)
    })
  }

  _intersectElements() {
    this.observer = new IntersectionObserver(this.loadImages.bind(this))
  }

  loadImages(entries, observer) {
    entries.forEach(entry => {
      const { target } = entry

      if (entry.isIntersecting) {
        this.id = `image-${new Date().getTime()}-${Math.random()}`
        this.href = target.dataset.src
        if (!this.href) return

        target.innerHTML = this.inner
      }
    })
  }
}
