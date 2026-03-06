function toggleScholar(header) {
    const item = header.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.scholar-item').forEach(el => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  }

  /* Donation form logic */
  /* (Designation buttons are now direct links to LaunchGood) */

  /* Matching gift company search */
  const matchingCompanies = [
    'Adobe', 'Allstate', 'American Express', 'Apple', 'Bank of America',
    'Boeing', 'BP', 'Capital One', 'Chevron', 'Cisco', 'Citigroup', 'Coca-Cola',
    'Comcast', 'Dell', 'Deloitte', 'Disney', 'ExxonMobil', 'Fidelity',
    'General Electric', 'General Motors', 'Goldman Sachs', 'Google', 'Home Depot',
    'Honeywell', 'HP', 'IBM', 'Intel', 'Johnson & Johnson', 'JPMorgan Chase',
    'Lockheed Martin', 'Mastercard', 'McKinsey', 'Merck', 'Meta', 'Microsoft',
    'Morgan Stanley', 'Nike', 'Northrop Grumman', 'Oracle', 'PepsiCo', 'Pfizer',
    'Procter & Gamble', 'Raytheon', 'Salesforce', 'Shell', 'State Farm',
    'T-Mobile', 'Target', 'Tesla', 'UnitedHealth', 'Verizon', 'Visa', 'Walmart',
    'Wells Fargo'
  ];

  function searchMatchingCompany() {
    const input = document.getElementById('companySearch').value.trim().toLowerCase();
    const resultDiv = document.getElementById('matchResult');
    if (!input) { resultDiv.innerHTML = ''; return; }
    const matches = matchingCompanies.filter(c => c.toLowerCase().includes(input));
    if (matches.length > 0) {
      resultDiv.className = 'matching-result found';
      resultDiv.innerHTML = '✓ <strong>' + matches[0] + '</strong> is known to offer matching gifts! Contact your HR department to submit a matching gift request for your donation to Elhaam Foundation.';
    } else {
      resultDiv.className = 'matching-result not-found';
      resultDiv.innerHTML = 'We did not find "' + document.getElementById('companySearch').value + '" in our database, but many companies match and may not be listed here. Please check with your HR or benefits department directly.';
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });