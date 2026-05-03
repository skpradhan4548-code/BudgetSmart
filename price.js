// Grocery items ka fake data
// (Real app mein ye API se aayega)

const priceData = {
  'atta': [
    { store: 'Blinkit', brand: 'Aashirvaad', weight: '5kg', price: 280 },
    { store: 'BigBasket', brand: 'Aashirvaad', weight: '5kg', price: 265 },
    { store: 'DMart', brand: 'Aashirvaad', weight: '5kg', price: 250 },
    { store: 'Zepto', brand: 'Aashirvaad', weight: '5kg', price: 275 },
  ],
  'rice': [
    { store: 'Blinkit', brand: 'India Gate', weight: '5kg', price: 420 },
    { store: 'BigBasket', brand: 'India Gate', weight: '5kg', price: 399 },
    { store: 'DMart', brand: 'India Gate', weight: '5kg', price: 385 },
    { store: 'Zepto', brand: 'India Gate', weight: '5kg', price: 410 },
  ],
  'dal': [
    { store: 'Blinkit', brand: 'Tata Dal', weight: '1kg', price: 145 },
    { store: 'BigBasket', brand: 'Tata Dal', weight: '1kg', price: 138 },
    { store: 'DMart', brand: 'Tata Dal', weight: '1kg', price: 130 },
    { store: 'Zepto', brand: 'Tata Dal', weight: '1kg', price: 142 },
  ],
  'sugar': [
    { store: 'Blinkit', brand: 'Sugar', weight: '1kg', price: 50 },
    { store: 'BigBasket', brand: 'Sugar', weight: '1kg', price: 46 },
    { store: 'DMart', brand: 'Sugar', weight: '1kg', price: 44 },
    { store: 'Zepto', brand: 'Sugar', weight: '1kg', price: 48 },
  ],
  'oil': [
    { store: 'Blinkit', brand: 'Fortune', weight: '1L', price: 180 },
    { store: 'BigBasket', brand: 'Fortune', weight: '1L', price: 172 },
    { store: 'DMart', brand: 'Fortune', weight: '1L', price: 165 },
    { store: 'Zepto', brand: 'Fortune', weight: '1L', price: 175 },
  ],
};

function searchItem() {
  let item = document.getElementById('search-item').value.toLowerCase().trim();
  let resultsDiv = document.getElementById('results');

  if (item === '') {
    alert('Kuch to likho bhai!');
    return;
  }

  if (!priceData[item]) {
    resultsDiv.innerHTML = '<p style="color: red;">Ye item abhi available nahi! Try karo: atta, rice, dal, sugar, oil</p>';
    return;
  }

  let data = priceData[item];

  // Sabse sasta dhundo
  let cheapest = data.reduce((min, curr) => curr.price < min.price ? curr : min);

  // Table banao
  let html = `
    <p style="color: #2d6a4f; font-weight: bold; margin-bottom: 15px;">
      ✅ Sabse Sasta: ${cheapest.store} — ₹${cheapest.price}
    </p>
    <table style="width:100%; border-collapse: collapse;">
      <tr style="background: #f0f4f8;">
        <th style="padding: 10px; text-align: left;">Store</th>
        <th style="padding: 10px; text-align: left;">Brand</th>
        <th style="padding: 10px; text-align: left;">Weight</th>
        <th style="padding: 10px; text-align: left;">Price</th>
      </tr>
  `;

  // Saste se mehenge order mein sort karo
  data.sort((a, b) => a.price - b.price);

  data.forEach((item, index) => {
    let bg = index === 0 ? '#e8f5e9' : 'white';
    html += `
      <tr style="background: ${bg}; border-bottom: 1px solid #eee;">
        <td style="padding: 10px;">${item.store}</td>
        <td style="padding: 10px;">${item.brand}</td>
        <td style="padding: 10px;">${item.weight}</td>
        <td style="padding: 10px; font-weight: bold; color: #2d6a4f;">₹${item.price}</td>
      </tr>
    `;
  });

  html += '</table>';
  resultsDiv.innerHTML = html;
}