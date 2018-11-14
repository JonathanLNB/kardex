<!DOCTYPE html>
<html>
<head>
	<title>Inicio</title>

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

	<!--CSS-->
   <link rel="stylesheet" type="text/css" href="css/main.css">

   <!--Fuente lobster-->
	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">  
</head>
<body>
<div id="bans">
	<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
	  <div class="carousel-inner">
	    <div class="carousel-item active">
	      <img class="d-block w-100" src="imagenes/ban1.jpg" alt="First slide" >
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="imagenes/ban2.jpg" alt="Second slide">
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="imagenes/ban3.jpg" alt="Third slide">
	    </div>
	  </div>
	  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
	    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	    <span class="sr-only">Previous</span>
	  </a>
	  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
	    <span class="carousel-control-next-icon" aria-hidden="true"></span>
	    <span class="sr-only">Next</span>
	  </a>
	</div>	
</div>

<div id="tt">

<div class="row">
  <div class="col-sm-4">
  	<div class="card text-white bg-info mb-4" style="max-width: 22rem;">
  	<div class="card-header">Alumno</div>
  	<div class="card-body">
  	<div class="container">
	  <div class="row">
	    <div class="col">
	   		 <h5 class="card-title">Estudiantes</h5>
	    </div>
	    <div class="col">
	         <img src="imagenes/bolis1.jpg" alt="..." class="rounded-circle">
	    </div>
	  	</div>
	</div>
    <p class="card-text">Accesde y consulta tus calificaciones, observaciones y mensajes enviados por tus profesores.</p>
    <a href="error.php" class="btn btn-primary">Ingresar</a>
  	</div>
  	</div>
  </div>

  <div class="col-sm-4">
    <div class="card text-white bg-secondary mb-4" style="max-width: 22rem;">
  <div class="card-header">Profesor</div>
  <div class="card-body">
  <div class="container">
	  <div class="row">
	    <div class="col">
	   		 <h5 class="card-title">Docentes</h5>
	    </div>
	    <div class="col">
	         <img src="imagenes/bolis2.jpg" alt="..." class="rounded-circle">
	    </div>
	  	</div>
	</div>
    <p class="card-text">Conoce las nuevas herramientas que te ayudaran a realizar actividades de revision, al igual que el centro de mensajeria.</p>
    <a href="error.php" class="btn btn-primary">Ingresar</a>
  </div>
</div>
  </div>

  <div class="col-sm-4">
    <div class="card text-white bg-success mb-4" style="max-width: 22rem;">
  <div class="card-header">Tutor</div>
  <div class="card-body">
    <div class="container">
	  <div class="row">
	    <div class="col">
	   		 <h5 class="card-title">Solo para tutores</h5>
	    </div>
	    <div class="col">
	         <img src="imagenes/bolis3.jpg" alt="..." class="rounded-circle">
	    </div>
	  	</div>
	</div>
    <p class="card-text">Sigue la trayectoria academica de tus tutorados de cerca y realiza observaciones en cualquier momento.</p>
    <a href="error.php" class="btn btn-primary">Ingresar</a>
  </div>
</div>
  </div>


	



</div>

<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-md-auto">
    <form>
  		<div class="form-group">
    		<input id="identificador" class="form-control form-control-lg" type="text" placeholder="identificador">
  		</div>
	</form>
    </div>
  </div>
</div>



<?php include 'footer.php'; ?>