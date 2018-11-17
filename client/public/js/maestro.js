var selectedStudentIdx, selectedGroupIdx, theGroups;
function addFeedback(){
	var group = theGroups.grupos[selectedGroupIdx], student = group.alumnos[0];
	var params = {};
	params.idgrupo = group.id;
	params.nocontrol = student.id;
	params.parcial = $("#select").val().split(" ")[1];
	params.mensaje = $("#textarea").val();
	console.log(params);
	$.ajax({
		type: "POST",
		url: "/api/observacion",
		data: params,
		success: function(){
			$(".modal").removeClass("visible");
		}
	});
}
function closeModal(){
	$(".modal").removeClass("visible");
}
$(document).ready(function(){
	var url_string = window.location.href;
	var url = new URL(url_string);
	var id = url.searchParams.get("id");
	$.ajax({
		url: "/api/grupos/"+id,
		success: function(data){
			theGroups = data;
			$("#profilePic").attr("src", theGroups.maestro.foto);
			$("#nombre").html(theGroups.maestro.nombre);
			$("#departamento").html(theGroups.maestro.departamento);
			var groupsHTML = '';
			for(var groupIdx = 0; groupIdx < theGroups.grupos.length; groupIdx++){
				var group = theGroups.grupos[groupIdx];
				groupsHTML += '<div class="group"><h2 class="groupName">'+group.nombre+'</h2>';
				for(var studentIdx = 0; studentIdx < group.alumnos.length; studentIdx++){
					var student = group.alumnos[studentIdx];
					groupsHTML += '<div class="student">';
					groupsHTML += '<span>'+student.nombre+'</span>';
					groupsHTML += '<div>';
					for(var gradeIdx = 0; gradeIdx < student.parciales.length; gradeIdx++){
						var grade = student.parciales[gradeIdx];
						groupsHTML += '<div class="grade '+(grade.retroalimentacion ? 'feedbacked' : '')+'">Parcial '+(gradeIdx+1)+'</div>';
					}
					groupsHTML += '</div>';
					groupsHTML += '<i class="fa fa-paper-plane" student-idx="'+studentIdx+'" group-idx="'+groupIdx+'"></i>';
					groupsHTML += '</div>';
				}
				groupsHTML += '</div>';
			}
			$("#groups").html(groupsHTML);
			$(".groupName").click(function(e){
				var element = $(e.currentTarget);
				element.parent().toggleClass("expanded");
			});
			$("i").click(function(e){
				var element = $(e.currentTarget);
				selectedStudentIdx = element.attr("student-idx");
				selectedGroupIdx = element.attr("group-idx");
				$(".modal").addClass("visible");
			});
		}
	});
});