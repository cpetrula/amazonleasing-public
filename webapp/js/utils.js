(function () {
	function roundDollar (amount){
		var s = "";
		var decimal;

		amount = parseFloat(amount);
		if (!(isNaN(amount)))
		{
			amount = Math.round(amount * 100);
			amount = amount / 100;
		s = new String(amount);
		decimal = s.indexOf(".");
		if (decimal == -1){
			s+=".00";
			}else{
				if (decimal == (s.length - 2)){
				s+="0";}
				}
				}else{
				s= "0.00";
				}
		return s;
	}
	function formatCurrency (num,showCents) {
		if (num) {
			num = num.toString().replace(/\$|\,/g,'');
			if(isNaN(num))
			num = "0";
			sign = (num == (num = Math.abs(num)));
			num = Math.floor(num*100+0.50000000001);
			cents = num%100;
			num = Math.floor(num/100).toString();
			if(cents<10)
			cents = "0" + cents;
			cents = (showCents) ? "."+cents : "";
			for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			num = num.substring(0,num.length-(4*i+3))+','+
			num.substring(num.length-(4*i+3));
			return (((sign)?'':'-') + '$' + num + cents);
		}
		else {
		  return 0;
		}

	}
	module.exports = {
		roundDollar : roundDollar,
		formatCurrency : formatCurrency
	}
	
})();