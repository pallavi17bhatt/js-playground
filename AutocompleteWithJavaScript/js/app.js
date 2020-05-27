function billingFunction(){
	var billingName=document.getElementById('billingName');
	var billingZip=document.getElementById('billingZip');
	var isAddressSame=document.getElementById('same').checked;
    
    if(isAddressSame) {
		billingName.value=document.getElementById('shippingName').value;
		billingZip.value=document.getElementById('shippingZip').value;
	} else {
		billingName.value="";
		billingZip.value="";
 	}
}
