//webapp/mixins/calc-functions.js
export default {
	methods: {
		getReferenceData() {
			$.ajax({
				type: "GET",
				url :  "server/get_residual_percents_for_credit.php",
				success : function (data, textStatus, jqXHR) {
					data=$.parseJSON(data)[0];
					amazon.residual_percents_for_credit.a_credit=data.a_credit;
					amazon.residual_percents_for_credit.b_credit=data.b_credit;
					amazon.residual_percents_for_credit.c_credit=data.c_credit;
					amazon.residual_percents_for_credit.d_credit=data.d_credit;
					amazon.residual_percents_for_credit.f_credit=data.f_credit;
				}
			})
		}
	},	
	buildEstimatedMilesList(defaultMileage) {
		var estMilesList=$("#est_miles_driven");
		estMilesList.children().remove();
	  	defaultMileage=parseInt(defaultMileage);
		for (var i=defaultMileage;i<=15000;) {
			estMilesList.append($('<option></option>').val(i).html(amazon.Utils.formatNumber(i)));
			i=i+500;
		}
	},
	getResidual(calcData) {
		var makes=amazon.vehicles;
		var selectedMakeObj=getObjects(makes,"make",calcData.make_calc);
		var models=selectedMakeObj[0].models;
		var selectedModelObj=getObjects(models,"model",calcData.model_calc);
		var styles=selectedModelObj[0].styles;
		var styleObj=getObjects(styles,"style",calcData.style_calc);

		var years=(styleObj[0] && styleObj[0].years) ? styleObj[0].years : false;
		if (years==false) {
			return 0;
		}
		defaultMileage=styleObj[0].default_mileage;

		var term=parseInt(calcData.term)/12;
		var year=parseInt(calcData.vyear);
		var resYear=year-term;
		for (var i=0;i<years.length;i++) {
			if (resYear===parseInt(years[i].year)) {
				return years[i].residual;
			}
		}
		return 0;
	},
	getDefaultMileage(calcData) {
	
		var d=new Date();
		var m=d.getMonth();
		var y=d.getFullYear();
		if (m>=9) { //October considered start of new year
			y=y+1;
		}
		vyear=calcData.vyear;
		var totalYears=y-parseInt(vyear);
		var default_mileage=((totalYears*defaultMileage) + defaultMileage*(parseInt(calcData.term)/12));
		return default_mileage;
	},
	getMileageAdjustmentPricePerMile(calcData) {
		var residual=getResidual(calcData);
		if (residual>=200000) {
			return 2;
		}
		else if (residual>=175000 && residual<200000) {
			return 1.75;
		}
		else if (residual>=150000 && residual<175000) {
			return 1.5;
		}
		else if (residual>=125000 && residual<150000) {
			return 1.25;
		}
		else if (residual>=100000 && residual<125000) {
			return 1;
		}
		else if (residual>=75000 && residual<100000) {
			return .75;
		}
		else if (residual>=50000 && residual<75000) {
			return .50;
		}
		else {
			return .40
		}
	},
	getMileageAdjustment(calcData) {
		var current_mileage=(calcData.mileage) ? parseInt(calcData.mileage) : 0;
		var term=parseInt(calcData.term)/12;
		var totalDefaultMileage=getDefaultMileage(calcData);
		var miles_per_year=parseInt(calcData.est_miles_driven || calcData.annual_mileage);
		var est_total_miles_at_end_of_lease=parseInt(current_mileage) + (parseInt(miles_per_year) * term);
		var mileageAdjustment = est_total_miles_at_end_of_lease - totalDefaultMileage;
		if  (mileageAdjustment > 0) {
			mileageAdjustment=mileageAdjustment * getMileageAdjustmentPricePerMile(calcData);
		}
		else {
			mileageAdjustment=0;
		}	
		return mileageAdjustment;
	},
	getObjects(obj, key, val) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getObjects(obj[i], key, val));
			} else if (i == key && obj[key] == val) {
				objects.push(obj);
			}
		}
		return objects;
	},
	setSelObj(fo,value) {
	  for (var i = 0; i < fo.options.length; i++) {
		if (value==fo.options[i].value) { 
		  fo.options[i].selected=true;
		}
	  }
	},
	getPaymentFromTValue(calcData,callback) {
  
	  var tvData = {
		"apr":calcData.apr,
		"residual":calcData.residual,
		"net_cap_cost":calcData.net_cap_cost,
		"term":calcData.calculated_term
	  }
	
	  amazon.Resource.Autos.getTValuePayment(tvData,function(paymentData){

		var first_payment;
			var first_payment_criteria;
		var base_payment = (paymentData.UnknownValue) ? parseFloat(paymentData.UnknownValue) : 0;
			var pmt_tax=base_payment*parseFloat(calcData.taxrate/100);
			var month_pmt=parseFloat(base_payment)+parseFloat(pmt_tax);
		var deposit=0;
		if (calcData.lease_criteria=="tier1" || calcData.lease_criteria=="subprime" ) {
		  first_payment=month_pmt*2;
			  first_payment_criteria="First & Last Payment";
		}
			else if (calcData.lease_criteria=="tier2" ) {
		  deposit=calcData.deposit;
				first_payment=month_pmt;
				first_payment_criteria="First Payment";
			}

			var total_down=calcData.adv_pmt+calcData.cap_reduction_tax+parseFloat(first_payment)+calcData.deposit+parseFloat(calcData.license_fee);

		var paymentInfo={
		  "term":calcData.term,
		  "calculated_term":calcData.calculated_term,
		  "apr":calcData.apr,
				"price":calcData.price,
		  "taxrate":calcData.taxrate,
				"mileage":calcData.mileage,
				"annual_mileage":calcData.annual_mileage,
				"adv_pmt":calcData.adv_pmt,
				"min_adv_pmt":calcData.min_adv_pmt,
				"license_fee":calcData.license_fee,
				"admin_fee":calcData.admin_fee,
				"deposit":calcData.deposit,
				"residual":calcData.residual,
				"cap_reduction_tax":calcData.cap_reduction_tax,
				"net_cap_cost":calcData.net_cap_cost,
				"depreciation_fee":null,
				"finance_fee":null,
				"base_payment":base_payment,
				"base_payment_tax":pmt_tax,
				"monthly_payment":month_pmt,
				"first_payment":first_payment,
				"first_payment_criteria":first_payment_criteria,
				"total_down":total_down,
				"dealer":calcData.dealer,
				"description":calcData.description,
				"dealer_phone":calcData.deal_phone,
		  "vin":calcData.vin,
		  "expirationDate":calcData.expirationDate
			};
		if (callback) callback(paymentInfo);
			return paymentInfo;
	  })
	},
	generatePayment(calcData,callback) {
			//credit_rating=document.form1.credit.options[document.form1.credit.selectedIndex].value;
			var credit_rating=calcData.credit_rating;
			var sell_price=calcData.price;
	//   if (sell_price && parseFloat(sell_price)<100000) {

	//     return {};
	//   }
			var term=parseInt(calcData.term);
			var adv_percent;
		var apr;
			var residual=parseInt(getResidual(calcData));
		var calculated_term;

			if (residual==0) { //could not find residual
				if (callback) callback(0);
				return 0;
			}
			var default_mileage=parseInt(getDefaultMileage(calcData));
			var leaseCriteria=calcData.lease_criteria;
			var isCaliforniaResident = calcData.is_cal_resident;

			credit_rating="A";

			var admin_fee;
			if (typeof sell_price=="string") {
				sell_price=sell_price.replace("\$","")
				sell_price=sell_price.replace("\,","")			
			}
			sell_price=parseFloat(sell_price);
			var year=parseInt(calcData.year_calc);

			var deposit=2250;
			admin_fee=1495;
		if (sell_price>= 200000) { 
		  admin_fee=1995; 
		}

		if (sell_price >= 700000) {
		  adv_percent=.15;
		  term=60;
		}
		else if (sell_price>=300000 && sell_price<700000) { 
		  adv_percent=.1;
		}
		else if (sell_price>=250000 && sell_price<300000) {
		  adv_percent=.07;
		}
		else if (sell_price>=150000 && sell_price<250000) { 
		  adv_percent=.05;
		}
		else if (sell_price<150000) {
		  adv_percent=.03;
		}

		if (year <= 2005) {
		  adv_percent = .1;
		}

		if (leaseCriteria=="tier1") {

		  deposit=0;
		  apr=.0475;
		  residual_percent_for_credit=amazon.residual_percents_for_credit.a_credit;
		  residual=residual*residual_percent_for_credit;
		  calculated_term=term-2;
		  $("[name=first_payment]").html("First & Last Payment");

		}
		else if (leaseCriteria=="tier2") {
		  calculated_term=term-1;

		  if (sell_price <= 150000) {
			deposit=2250;
		  }
		  else if (sell_price > 150000 && sell_price <= 200000) {
			deposit=2500;
		  }
		  else { //sell_price > 200000
			deposit=3000;
		  }

		  // begin rates
		  if (year>=2015) {
			  apr = (term==72) ? 5.7 : 5.45; 
		  }
		  else if (year >= 2011) {
			  apr = (term==72) ? 5.85 : 5.6; 
		  }
		  else if (year < 2011) {
			apr = (term==72) ? 6.45 : 6.2;
		  }
		  // end rates

		  apr=apr/100;
		  residual_percent_for_credit=amazon.residual_percents_for_credit.a_credit;
		  residual=residual*residual_percent_for_credit;
		  $("[name=first_payment]").html("First Payment");
		}
		else if (leaseCriteria=="subprime") {
		  calculated_term=term-2;
		  admin_fee=sell_price*.04;
		  min_adv_pmt=sell_price*.26;
		  adv_percent=.26;
		  adv_pmt=(calcData.adv_pmt>=min_adv_pmt) ? calcData.adv_pmt: min_adv_pmt;
		  net_cap_cost=sell_price-adv_pmt;
		  apr=.13;
		  residual=net_cap_cost*.35;
		  $("[name=first_payment]").html("First & Last Payment");
		}
			var originalResidual = residual;
			residual=residual-getMileageAdjustment(calcData);
			min_adv_pmt=sell_price*adv_percent;
			calcData.adv_pmt=parseFloat(calcData.adv_pmt);	

			if (calcData.adv_pmt && (calcData.adv_pmt<=min_adv_pmt)) {
				calcData.adv_pmt=min_adv_pmt;
			}
			else if (!calcData.adv_pmt) {
				calcData.adv_pmt=min_adv_pmt;
			}

			license=(calcData.license) ? 150 : parseFloat(sell_price)*.008;

			sell_price=parseFloat(sell_price)+parseFloat(admin_fee);

			var capreduction=calcData.adv_pmt;
			var capreductiontax=(calcData.adv_pmt*calcData.taxrate)/100;
			var net_cap_cost=sell_price-calcData.adv_pmt;

			var paymentInfo={
		  "apr":apr,
		  "term":term,
		  "calculated_term":calculated_term,
		  "lease_criteria":leaseCriteria,
		  "taxrate":calcData.taxrate,
				"price":calcData.price,
				"mileage":calcData.mileage,
				"annual_mileage":calcData.annual_mileage,
				"adv_pmt":calcData.adv_pmt,
				"min_adv_pmt":min_adv_pmt,
				"license_fee":license,
				"admin_fee":admin_fee,
				"deposit":deposit,
				"residual":residual,
				"cap_reduction_tax":capreductiontax,
				"net_cap_cost":net_cap_cost,
				"depreciation_fee":null,
				"finance_fee":null,
				"base_payment":null,
				"base_payment_tax":null,
				"monthly_payment":null,
				"first_payment":null,
				"first_payment_criteria":null,
				"total_down":null,
				"dealer":calcData.dealer,
				"description":calcData.description,
				"dealer_phone":calcData.deal_phone,
		  "vin":calcData.vin,
		  "expirationDate":calcData.expirationDate
			};	

	  $("#error-container").html(JSON.stringify(paymentInfo));
		return getPaymentFromTValue(paymentInfo,callback);

	}
};