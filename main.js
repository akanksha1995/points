window.onload = function() {

const cardData = [
    {
      "type": "buy",
      "amount": 2000,
      "cost": 250.00
    },
    {
      "type": "buy",
      "amount": 4000,
      "cost": 450.00
    },
    {
      "type": "buy",
      "amount": 7000,
      "cost": 600.00
    }
  ];

  let container = document.querySelector('#card-container-id');
  let cnt = 0;
  cardData.forEach((result, idx) => {
    const card = document.createElement('div');
    card.id = '#cnt'+cnt;
    card.classList = 'card';

    const card_content = `<p>Buy <span class="amount"> ${result.amount} </span> miles <br><span class="cost">$${result.cost} </span></p>`
    card.innerHTML = card_content;
    container.appendChild(card);
    cnt++;
});

document.getElementById('#cnt0').classList.add('selected');
    let cards = document.getElementsByClassName("card");
  
    for (var i = 0; i < cards.length; i++) {
        cards.item(i).addEventListener('click', select_card);
        cards.item(i).addEventListener('click', change_order_summary);
    }

    function select_card (event) {
        event.stopPropagation;
        event.preventDefault;
       // 
       let cards = document.querySelectorAll('div.card');
       for (var i = 0; i < cards.length; i++) {
           cards.item(i).classList.remove('selected');
       }
       event.target.closest('div').classList.add('selected');
    }

    function change_order_summary(event) {
        let amount = this.querySelector('.amount').innerText;
        let cost = this.querySelector('.cost').innerText;
    
        document.querySelector('.miles').innerText = amount;
        document.querySelector('.total-cost').innerText = cost;
    
    }

}