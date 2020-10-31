
/*
When user presses submit button (onclick), take the values for investment horizon and risk tolerance, then list investments that correlate to those values.

If investment horizon <1 year:
  return: Prime Money Market Fund

  If investment horizon 1-3 years:
  return: Short-term Bond Index Fund

  If investment horizon 3-10 years:
  return: Total Bond Market Index Fund

  If investment horizon >10 years:
  return: Total Stock Market Index Fund
  */


  // Target page elements that require functionality
let invest = document.querySelector('#submit-investing-profile');
let riskTolerance = document.getElementsByName('radioButton');
let investmentHorizon = document.querySelector('#investmentHorizon');
let outputInvestments = document.querySelector('.outputInvestmentsList');

// Event listeners
invest.addEventListener('click', listInvestmentOptions);



// Define functionality to apply to page elements
function listInvestmentOptions(){
  if(riskTolerance[0].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'ultraShortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
        <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMMXX' target='_blank' class= 'fundLinks'>Prime Money Market Fund (VMMXX)</a></li>
        <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMFXX' target='_blank' class= 'fundLinks'>Federal Money Market Fund (VMFXX)</a></li>
    </ul>`;
  }
  else if(riskTolerance[0].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'shortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMMXX' target='_blank' class= 'fundLinks'>Prime Money Market Fund (VMMXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMFXX' target='_blank' class= 'fundLinks'>Federal Money Market Fund (VMFXX)</a></li>
    </ul>`;
  }
  else if(riskTolerance[0].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'mediumTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMMXX' target='_blank' class= 'fundLinks'>Prime Money Market Fund (VMMXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMFXX' target='_blank' class= 'fundLinks'>Federal Money Market Fund (VMFXX)</a></li>
    </ul>`;
  }
  else if(riskTolerance[0].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'longTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMMXX' target='_blank' class= 'fundLinks'>Prime Money Market Fund (VMMXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMFXX' target='_blank' class= 'fundLinks'>Federal Money Market Fund (VMFXX)</a></li>
    </ul>`;
  }
  else if(riskTolerance[1].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'ultraShortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMMXX' target='_blank' class= 'fundLinks'>Prime Money Market Fund (VMMXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMFXX' target='_blank' class= 'fundLinks'>Federal Money Market Fund (VMFXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VUBFX' target='_blank' class= 'fundLinks'>Ultra-Short-Term Bond Fund (VUBFX)</a></li>
    </ul>`;
  }
  else if(riskTolerance[1].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'shortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BSV' target='_blank' class= 'fundLinks'>Short-Term Bond ETF (BSV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VGSH' target='_blank' class= 'fundLinks'>Short-Term Treasury ETF (VGSH)</a></li>
    </ul>`;
  }
  else if(riskTolerance[1].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'mediumTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BIV' target='_blank' class= 'fundLinks'>Intermediate-Term Bond ETF (BIV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BND' target='_blank' class= 'fundLinks'>Total Bond Market ETF (BND)</a></li>
    </ul>`;
  }
  else if(riskTolerance[1].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'longTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BND' target='_blank' class= 'fundLinks'>Total Bond Market ETF (BND)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTC' target='_blank' class= 'fundLinks'>Total Corporate Bond ETF (VTC)</a></li>
    </ul>`;
  }
  else if(riskTolerance[2].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'ultraShortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMMXX' target='_blank' class= 'fundLinks'>Prime Money Market Fund (VMMXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMFXX' target='_blank' class= 'fundLinks'>Federal Money Market Fund (VMFXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VUBFX' target='_blank' class= 'fundLinks'>Ultra-Short-Term Bond Fund (VUBFX)</a></li>
    </ul>`;
  }
  else if(riskTolerance[2].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'shortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BSV' target='_blank' class= 'fundLinks'>Short-Term Bond ETF (BSV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VCSH' target='_blank' class= 'fundLinks'>Short-Term Corporate Bond ETF (VCSH)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VGSH' target='_blank' class= 'fundLinks'>Short-Term Treasury ETF (VGSH)</a></li>
    </ul>`;
  }
  else if(riskTolerance[2].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'mediumTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BIV' target='_blank' class= 'fundLinks'>Intermediate-Term Bond ETF (BIV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BND' target='_blank' class= 'fundLinks'>Total Bond Market ETF (BND)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VCIT' target='_blank' class= 'fundLinks'>Intermediate-Term Corporate Bond ETF (VCIT)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTC' target='_blank' class= 'fundLinks'>Total Corporate Bond ETF (VTC)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BNDX' target='_blank' class= 'fundLinks'>Total International Bond ETF (BNDX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VXUS' target='_blank' class= 'fundLinks'>Total International Stock ETF (VXUS)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTI' target='_blank' class= 'fundLinks'>Total Stock Market ETF (VTI)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VOO' target='_blank' class= 'fundLinks'>S&P 500 ETF (VOO)</a></li>
    </ul>`;
  }
  else if(riskTolerance[2].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'longTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BND' target='_blank' class= 'fundLinks'>Total Bond Market ETF (BND)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTC' target='_blank' class= 'fundLinks'>Total Corporate Bond ETF (VTC)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BNDX' target='_blank' class= 'fundLinks'>Total International Bond ETF (BNDX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VXUS' target='_blank' class= 'fundLinks'>Total International Stock ETF (VXUS)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTI' target='_blank' class= 'fundLinks'>Total Stock Market ETF (VTI)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VOO' target='_blank' class= 'fundLinks'>S&P 500 ETF (VOO)</a></li>
    </ul>`;
  }
  else if(riskTolerance[3].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'ultraShortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMMXX' target='_blank' class= 'fundLinks'>Prime Money Market Fund (VMMXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VMFXX' target='_blank' class= 'fundLinks'>Federal Money Market Fund (VMFXX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/mutual-funds/profile/VUBFX' target='_blank' class= 'fundLinks'>Ultra-Short-Term Bond Fund (VUBFX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BSV' target='_blank' class= 'fundLinks'>Short-Term Bond ETF (BSV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VCSH' target='_blank' class= 'fundLinks'>Short-Term Corporate Bond ETF (VCSH)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VGSH' target='_blank' class= 'fundLinks'>Short-Term Treasury ETF (VGSH)</a></li>
    </ul>`;
  }
  else if(riskTolerance[3].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'shortTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BSV' target='_blank' class= 'fundLinks'>Short-Term Bond ETF (BSV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VCSH' target='_blank' class= 'fundLinks'>Short-Term Corporate Bond ETF (VCSH)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VGSH' target='_blank' class= 'fundLinks'>Short-Term Treasury ETF (VGSH)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BIV' target='_blank' class= 'fundLinks'>Intermediate-Term Bond ETF (BIV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BND' target='_blank' class= 'fundLinks'>Total Bond Market ETF (BND)</a></li>
    </ul>`;
  }
  else if(riskTolerance[3].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'mediumTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BND' target='_blank' class= 'fundLinks'>Total Bond Market ETF (BND)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTC' target='_blank' class= 'fundLinks'>Total Corporate Bond ETF (VTC)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BNDX' target='_blank' class= 'fundLinks'>Total International Bond ETF (BNDX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VXUS' target='_blank' class= 'fundLinks'>Total International Stock ETF (VXUS)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTI' target='_blank' class= 'fundLinks'>Total Stock Market ETF (VTI)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VOO' target='_blank' class= 'fundLinks'>S&P 500 ETF (VOO)</a></li>
    </ul>`;
  }
  else if(riskTolerance[3].checked && investmentHorizon.options[investmentHorizon.selectedIndex].value === 'longTerm')
  {
    outputInvestments.innerHTML = 
    `<ul>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BND' target='_blank' class= 'fundLinks'>Total Bond Market ETF (BND)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTC' target='_blank' class= 'fundLinks'>Total Corporate Bond ETF (VTC)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/BNDX' target='_blank' class= 'fundLinks'>Total International Bond ETF (BNDX)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VXUS' target='_blank' class= 'fundLinks'>Total International Stock ETF (VXUS)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VTI' target='_blank' class= 'fundLinks'>Total Stock Market ETF (VTI)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VOO' target='_blank' class= 'fundLinks'>S&P 500 ETF (VOO)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/EDV' target='_blank' class= 'fundLinks'>Extended Duration Treasury ETF (EDV)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VOT' target='_blank' class= 'fundLinks'>Mid-Cap Growth ETF (VOT)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VBK' target='_blank' class= 'fundLinks'>Small-Cap Growth ETF (VBK)</a></li>
    <li id='item1'><a href= 'https://investor.vanguard.com/etf/profile/VWO' target='_blank' class= 'fundLinks'>FTSE Emerging Markets ETF (VWO) </a></li>
    </ul>`;
  }

  else
  {
    alert('Please choose an option for Investment Horizon and Risk Tolerance.');
  }
};