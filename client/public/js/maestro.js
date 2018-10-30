var selectedStudentIdx, selectedGradeIdx, theGroups;
function addFeedback(){
	console.log(selectedStudentIdx, selectedGradeIdx);
	console.log($("#select").val().split(" ")[1], $("#textarea").val());
	$(".modal").removeClass("visible");
}
function closeModal(){
	$(".modal").removeClass("visible");
}
$(document).ready(function(){
    theGroups = {
		"grupos": [
			{
				"alumnos": [
					{
						"id": "String",
						"nombre": "String",
						"parciales": [
							{
								"calificacion": "Number",
								"retroalimentacion": "String"
							}
						]
					}
				],
				"id": "String",
				"nombre": "String"
			}
		],
		"maestro": {
			"departamento": "String",
			"foto": "String",
			"id": "String",
			"nombre": "String"
		}
	};
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
		selectedGradeIdx = element.attr("group-idx");
		$(".modal").addClass("visible");
	});
});