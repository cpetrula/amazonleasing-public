<template>
	<div id="public-nav" class="uk-container-expand">
		<div class="uk-container">
			  <nav class="uk-navbar-container uk-light"  uk-navbar>
				<div class="uk-navbar-left">
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

  </div>
</template>
  <style>
    #public-nav {
      	background-color:#262626 !important;
		margin-bottom:20px !important;
    }
	  .uk-navbar-container {
		  background-color:#262626 !important;
	  }
  </style>