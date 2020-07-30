<template>
  	<div id="home">

		<div class="container" >
	  		<div class="row mt-4 bg-light shadow mr-0 ml-0">
				<div class="col-md-8 pl-0">
					<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
					  <ol class="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					  </ol>
					  <div class="carousel-inner" role="listbox" style="max-height:300px !important;">
						<div class="carousel-item active">
						  <img src="/images/020410432034.jpg" class="img-fluid d-block w-100" alt="...">
						  <div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						  </div>
						</div>
						<div class="carousel-item">
						  <img src="/images/slide-classic-cars.jpg" class="img-fluid d-block w-100" alt="...">
						  <div class="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						  </div>
						</div>
						<div class="carousel-item">
						  <img src="/images/1972-ford-bronco.jpeg" class="img-fluid d-block w-100" alt="...">
						  <div class="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						  </div>
						</div>
					  </div>
					  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					  </a>
					  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					  </a>
				</div>
			</div>		
			<div class="col-md-4 p-4">
				<form>
					<h3>
						<span class="text-danger">Find</span> Your New Car
	</h3>
					<label>Make</label>
					<select class="form-control">
						<option></option>				
					</select>
					<label>Model</label>
					<select class="form-control">
						<option></option>				
					</select>
					<button id="search-btn" class="float-right btn btn-outline-danger mt-10">Search</button>
				</form>
			</div>
		</div>
			
	</div>
	
  
	  
	  <!-- Featured Vechiles //-->
	<div class="container mt-5 mb-5">
		  
	  	<h3><span class="text-danger">Featured</span> Vehicles</h3>
		<hr/>
		  	<div class="row">
			  	<div class="col">
				  	<div class="card mb-3 h-100">
					  <img src="https://amazonleasing.com/admin/autos/01/tn_011008541951.JPG" class="card-img-top" alt="...">
					  <div class="card-body">
						<h5 class="card-title">2020 Lamborghini Urus SUV</h5>
						<p class="card-text">$2,594.51 per month</p>
					  </div>
						<div class="card-footer"><button class="btn btn-danger">View Details</button></div>
					</div>
				</div>
							  	<div class="col">
				  	<div class="card mb-3">
					  <img src="https://amazonleasing.com/admin/autos/01/tn_011008541951.JPG" class="card-img-top" alt="...">
					  <div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p class="card-text"><button class="btn btn-danger">View Details</button></p>
					  </div>
					</div>
				</div>
							  	<div class="col">
				  	<div class="card mb-3">
					  <img src="https://amazonleasing.com/admin/autos/01/tn_011008541951.JPG" class="card-img-top" alt="...">
					  <div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p class="card-text"><button class="btn btn-danger">View Details</button></p>
					  </div>
					</div>
				</div>
							  	<div class="col">
				  	<div class="card mb-3">
					  <img src="https://amazonleasing.com/admin/autos/01/tn_011008541951.JPG" class="card-img-top" alt="...">
					  <div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p class="card-text"><button class="btn btn-danger">View Details</button></p>
					  </div>
					</div>
				</div>
			</div>
	</div>
		
</div>

</template>
<style>

	.detail-btn-container {
		position:absolute;
		bottom:10px;
		left:10px;
	}
	#search-btn {
		position:absolute;
		bottom:20px;
		right:25px;
	}
	
</style>