var val = location.href.match(/[?&]term=(.*?)[$&]/)[1];   // get params from URL
$('#roomtype').val(val);   //  assign URL param to select field