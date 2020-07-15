<template>
  	<div id="home">
		<div class="uk-container">
	  	<div uk-grid uk-height-match>
			<div class="uk-width-3-4">
				<div class="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slideshow="autoplay:true;animation: push;min-height: 300; max-height: 400">

					<ul class="uk-slideshow-items">
						<li>
							<img src="/images/slide-classic-cars.jpg" alt="" uk-cover>
							<div class="uk-position-center uk-position-small uk-text-center uk-light">
								<h2 class="uk-margin-remove">Center</h2>
								<p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</li>
						<li>
							<img src="/images/1972-ford-bronco.jpeg" alt="" uk-cover>
							<div class="uk-position-bottom uk-position-medium uk-text-center uk-light">
								<h3 class="uk-margin-remove">Bottom</h3>
								<p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</li>
						<li>
							<img src="/images/020410432034.jpg" alt="" uk-cover>
							<div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
								<h3 class="uk-margin-remove">Overlay Bottom</h3>
								<p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</li>
					</ul>

					<div class="uk-light">
						<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
						<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
					</div>

				</div>
			</div>
			<div class="uk-section uk-section-muted uk-width-1-4">Search Form</div>
		</div>
	</div>

  
	  
	  <!-- Featured Vechiles //-->
	  <div class="uk-container ">
		  
	  <h3 class="uk-heading uk-text-large"><span class="uk-text-danger">Featured</span> Vehicles</h3>
	<hr/>
		  
		  
	  <div uk-slider>

    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

        <ul class="uk-slider-items uk-child-width-1-4@s uk-grid" uk-height-match=".uk-card">
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="https://amazonleasing.com/admin/autos/07/070812052024.jpg" alt="">
                    </div>
                    <div>
                        <div class="">2005 Ferrari Vintage Superamerica</div>
                        <div>$2,999 +tax</div>
						<div class="detail-btn-container"><button class="uk-button uk-button-danger uk-button-small">Details</button></div>
                    </div>
					
						
					
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="" alt="">
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Headline</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>
	</div>


	  
  </div>
</template>
<style>
	.uk-navbar {
		margin-bottom:0px !important;
	}
	.detail-btn-container {
		position:absolute;
		bottom:10px;
		left:10px;
	}
</style>