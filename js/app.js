

function getHtml(name, value) 
{
	var obj = $("<li>"+ name + ":  "+value+"</li>");
	return obj;
}


$('#getBlockHeight').click(function(){
	var content = "";
	content = $('#blockHeight').val();

	var myNode = $("#resultZone").children();
	myNode.remove();

	var hash = "";
	var time = "";
	var fees = "";
	var total = "";
	var ntx = "";

	if(content.length==64)
	{
	    $.ajax(
	    {
	        type:'GET',
	        url: 'https://api.blockcypher.com/v1/btc/main/blocks/' + content,

	        success: function(response)
	        {
	        	console.log(response);
	        	hash=response.hash;
	        	time=response.time;
	        	fees=response.fees;
	        	total=response.total;
	        	ntx = response.n_tx;

	        	$('#resultZone').append('<h4> Hash entered </h4>');
	        	$("#resultZone").append(getHtml("hash", hash));
	        	$('#resultZone').append(getHtml("time", time));
	        	$('#resultZone').append(getHtml("fees", fees));
	        	$('#resultZone').append(getHtml("total", total));
	        	$('#resultZone').append(getHtml("ntx", ntx));

	        },
	        error: function(error)
	        {
	            alert('problem');
	        }

	    });
	}
	else {
		$.ajax( //block height
	    {
	        type:'GET',
	        url: 'https://api.blockcypher.com/v1/btc/main/blocks/' + content,

	        success: function(response)
	        {
	        	console.log(response);
	        	hash=response.hash;
	        	time=response.time;
	        	fees=response.fees;
	        	total=response.total;
	        	ntx = response.n_tx;

	        	$('#resultZone').append('<h4> Block entered </h4>');
	        	$("#resultZone").append(getHtml("hash", hash));
	        	$('#resultZone').append(getHtml("time", time));
	        	$('#resultZone').append(getHtml("fees", fees));
	        	$('#resultZone').append(getHtml("total", total));
	        	$('#resultZone').append(getHtml("ntx", ntx));

	        },
	        error: function(error)
	        {
	            alert('problem');
	        }

	    });
	}
});


$('#getAddressInfo').click(function(){
	var content = "";
	content = $('#addressInfo').val();

	var myNode = $("#resultZone").children();
	myNode.remove();

	var address = "";
	var balance = "";
	var ntx = "";

	$.ajax( 
	    {
	        type:'GET',
	        url: 'https://api.blockcypher.com/v1/btc/main/addrs/' + content,

	        success: function(response)
	        {
	        	console.log(response);
	        	address=response.address;
	        	balance = response.balance;
	        	ntx = response.n_tx;

	        	$('#resultZone').append('<h4> Block entered </h4>');
	        	$("#resultZone").append(getHtml("address", address));
	        	$('#resultZone').append(getHtml("balance", balance));
	        	$('#resultZone').append(getHtml("transaction", ntx));

	        },
	        error: function(error)
	        {
	            alert('problem');
	        }

	    });

})