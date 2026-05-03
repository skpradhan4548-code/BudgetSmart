const tipsDatabase = {
  grocery: [
    "1. Weekly list banao aur sirf wahi kharido — impulsive buying band karo!",
    "2. DMart ya local mandi se kharido — Blinkit se 20-30% sasta milega!",
    "3. Bulk mein kharido — atta, rice, dal 5kg mein lena 1kg se sasta hota hai!",
    "4. Season ke fruits aur vegetables kharido — off-season mein 3x mehenga hota hai!",
    "5. Store brand products try karo — branded se 40% sasta hota hai same quality!"
  ],
  electricity: [
    "1. AC 24-25 degree pe rakho — 1 degree kam karne se 6% bijli bachti hai!",
    "2. LED bulbs lagao — normal bulb se 80% kam bijli use karte hain!",
    "3. Ghar se nikalne se pehle sab switch off karo — standby mode bhi bijli khata hai!",
    "4. Washing machine full load pe chalao — half load mein same bijli lagti hai!",
    "5. Fridge ko wall se 10cm door rakho — cooling better hogi, bijli kam lagegi!"
  ],
  default: [
    "1. Pehle zaroorat aur shauk mein fark karo — sirf zaroorat ki cheezein kharido!",
    "2. 50-30-20 rule follow karo — 50% needs, 30% wants, 20% savings!",
    "3. EMI se bachao — jo afford nahi kar sakte cash mein, wo mat kharido!",
    "4. Har mahine budget banao aur track karo — BudgetSmart ka use karo!",
    "5. Chhoti chhoti savings bhi count karti hain — roz ₹50 bachao = ₹18,000 saal mein!"
  ]
};

function getTips() {
  let problem = document.getElementById('user-problem').value.toLowerCase();

  if (problem === '') {
    alert('Pehle apni problem likho!');
    return;
  }

  document.getElementById('tips-result').innerHTML =
    '<p style="color: #2d6a4f;">⏳ Tips dhundh raha hai...</p>';

  setTimeout(() => {
    let tips = tipsDatabase.default;

    if (problem.includes('grocery') || problem.includes('khaana') || problem.includes('sabzi')) {
      tips = tipsDatabase.grocery;
    } else if (problem.includes('bijli') || problem.includes('electricity') || problem.includes('light')) {
      tips = tipsDatabase.electricity;
    }

    let html = tips.map(tip =>
      `<p style="padding: 10px 0; border-bottom: 1px solid #eee; color: #444;">${tip}</p>`
    ).join('');

    document.getElementById('tips-result').innerHTML = html;
  }, 1000);
}