class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;

    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:

    if (this.tabData === "all") {
      this.cards = document.querySelectorAll(".card");
    } else {
      this.cards = document.querySelectorAll(
        `.card[data-tab="${this.tabData}"]`
      );
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card));
    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active-tab"));
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => (card.style.display = "none"));

    this.tabElement.classList.toggle("active-tab");
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = "flex";
  }
}

const tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));
