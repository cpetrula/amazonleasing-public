<template>
	<div id="site-nav">
<nav class="navbar navbar-expand-lg navbar-dark  container">
	<a class="navbar-brand" href="#"><span class="logo-amazon-text">Amazon</span> Leasing</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	  <span class="mr-auto"></span>
    <ul class="navbar-nav mr-0 pr-0">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Lease Calculator</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Credit Application</a>
      </li>
	<li class="nav-item">
        <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Dealer Lease Specials</a>
      </li>
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
	</div>

	<!-- <div id="public-nav" class="container fixed-top">
		<div class="container-lg">
			  <nav class="navbar">
				<div class="navbar-left">
					<a class="uk-navbar-item uk-logo" href="#">Amazon Leasing</a>
				</div> 
				<div class="uk-navbar-right">
				 <ul class="uk-navbar-nav">
					 <li><a href="">Test</a></li>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/calculator">Lease Calculator</router-link></li>
						<li><router-link to="/credit-application">Credit Application</router-link></li>
					 <li><router-link to="/credit-application">Credit Application</router-link></li>
					</ul>
				  </div>
				</nav>
		</div>

  </div> -->
</template>
  <style>

	 #site-nav {
		background-color: #262626;
		margin-bottom:20px !important;
	}
	  .navbar {
		  /* background-color:#262626 !important; */
	  }
	  .logo-amazon-text {
		  border-top: 3px solid #dc3545;
		   
	  }
  </style>