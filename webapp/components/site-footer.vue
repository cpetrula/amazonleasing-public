<template>
	<div id="site-footer" class="container-fluid">
		
			<div class="container">
			<div class="row">
				<div class="col p-5">
					<h5><span class="text-danger">About</span> Us</h5>
					<hr />
					<p>Amazon Leasing has the largest selection of exotic cars in Los Angeles. Lease your dream luxury car today.</p>					
				</div>
				<div class="col p-5">
						<h5><span class="text-danger">Our</span> Hours</h5>
						<hr />
						<ul>
							<li>
								<span>Monday</span>
								<span>08:00 - 6:00</span>
							</li>
							<li>
								<span>Tuesday</span>
								<span>08:00 - 6:00</span>
							</li>
							<li>
								<span>Wednesday</span>
								<span>08:00 - 6:00</span>
							</li>
							<li>
								<span>Thursday</span>
								<span>08:00 - 6:00</span>
							</li>
							<li>
								<span>Friday</span>
								<span>08:00 - 6:00</span>
							</li>
							<li class="is_closed">
								<span>Saturday</span>
								<span>Closed</span>
							</li>
							<li class="is_closed">
								<span>Sunday</span>
								<span>Closed</span>
							</li>
						</ul>					
				</div>
				<div class="col p-5">
						<h5><span class="text-danger">Contact</span> Us</h5>
						<hr />
					<p><i class="fas fa-phone-alt"></i>818.555.1212</p>
						<p><i class="fas fa-print"></i>818.555.1213</p>
						<p><i class="fas fa-envelope"></i>sales@amazonleasing.com</p>
						<p class="social-media-icons"><i class="fab fa-facebook"></i>
							<i class="fab fa-youtube"></i>
							<i class="fab fa-instagram"></i>
						</p>
				</div>
			</div>
	</div>
		
	</div>
</template>
<style>
	#site-footer {
		background-color:#262626;
		color:#fff;
	}
	#site-footer hr {
		border-color:#e6e6e6;
	}
	#site-footer .is_closed {
		color: #f0506e;
	}
	#site-footer .fa-phone-alt,
	#site-footer .fa-print,
	#site-footer .fa-envelope
	{
		margin-right:10px;
	}
	#site-footer .social-media-icons svg {
		font-size:28pt;
		margin-right:10px;
		color:#506ef0;
	}
	#site-footer ul {
		padding-left:0 !important;
	}
	#site-footer ul li:first-child {
    padding-top: 0;
    border-top: none;
}
	#site-footer li {
    list-style: none;
}
	#site-footer ul li {
    padding: 5px 0;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #333 !important;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -moz-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
}
</style>