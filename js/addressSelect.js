$(function(){
  loadProvince('440000');
})

function loadProvince(regionId){
  $('#id_provSelect').html("");
  $('#id_provSelect').append("<option value=''>请选择省份</option>");
  var jsonStr = getAddress(regionId, 0);
  for(var k in jsonStr){
    $('#id_provSelect').append("<option value='"+k+"'>"+jsonStr[k]+"</option>");
  }
  if(regionId.length!=6){
    $('#id_citySelect').html("");
    $('#id_citySelect').append("<option value=''>请选择城市</option>");
  }else{
    $("#id_provSelect").val(regionId.substring(0, 2)+"0000");
    loadCity(regionId);
  }
}

function loadCity(regionId){
  $("#id_citySelect").html("");
  $("#id_citySelect").append("<option value=''>请选择城市</option>");
  if(regionId.length == 6){
    var jsonStr = getAddress(regionId, 1);
    for(var k in jsonStr){
      $("#id_citySelect").append("<option value='"+k+"'>"+jsonStr[k]+"</option>");
    }
    var str = regionId.substring(0, 2);
    if(str == "11" || str == "12" || str == "31" || str == "50"){
      $("#id_citySelect").val(regionId);
    }else{
      $("#id_citySelect").val(regionId.substring(0, 4)+"00");
    }
  }
}