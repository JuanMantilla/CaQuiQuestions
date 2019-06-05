<html>
	<head>
		<title>CaQui Questions!</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<!-- Stylesheets -->
		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/bootstrap-extend.min.css">
		<link rel="stylesheet" href="/css/site.min.css">
		<link rel="stylesheet" href="/css/green.min.css">
		<link rel="stylesheet" href="/css/ownClasses.css">
		<!-- Plugins -->
		<link rel="stylesheet" href="/css/v1.css">
		<link rel="stylesheet" href="/css/profile.min.css">
		<link rel="stylesheet" href="/css/team.min.css">
		<link rel="stylesheet" href="/css/select2.min.css">
		<link rel="stylesheet" href="/css/icheck.min.css">
		<link rel="stylesheet" href="/css/override.css">
		<!--TOAST CSS-->
		<link rel="stylesheet" href="/css/angular-toastr.css">
		<!-- Fonts -->
		<link rel="stylesheet" href="/fonts/weather-icons/weather-icons.css">
		<link rel="stylesheet" href="/fonts/web-icons/web-icons.min.css">
		<link rel="stylesheet" href="/fonts/brand-icons/brand-icons.min.css">
		<link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>

		<!-- <link rel="icon" href="/img/logo.png"> -->
		<!--[if lt IE 9]>
		<script src="/html5shiv/html5shiv.min.js"></script>
		<![endif]-->
		<!--[if lt IE 10]>
		<script src="/media-match/media.match.min.js"></script>
		<script src="/respond/respond.min.js"></script>
		<![endif]-->
    </head>
    <body ng-app="questionsApp"> 
    
    <div ui-view></div>


    <script>
		 apiUrl = "{{$apiUrl}}";
	</script>

	<!-- jQuery -->

	<!-- Core  -->

	<!-- Angular libs -->
	<script src="/bower_components/angular/angular.min.js"></script>
	<script src="/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
	<script src="/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
	<script src="/bower_components/angular-animate/angular-animate.min.js"></script>
	<script src="/bower_components/angular-toastr/dist/angular-toastr.tpls.min.js"></script>
	<script src="/bower_components/angular-click-outside/clickoutside.directive.js"></script>
	<script src="/bower_components/lodash/lodash.js"></script>
	<script src="/bower_components/angular-confirm-modal/angular-confirm.min.js"></script>
	<script src="/bower_components/angular-jwt/dist/angular-jwt.min.js"></script>

	<script src="/bower_components/angular-permission/dist/angular-permission.min.js"></script>
	<script src="/bower_components/angular-permission/dist/angular-permission-ui.min.js"></script>


	<script src="/bower_components/angular-sanitize/angular-sanitize.js"></script>

	<script src="/bower_components/ng-csv/build/ng-csv.min.js"></script>
	<script src="/bower_components/chart.js/dist/Chart.min.js"></script>
	<script src="/bower_components/angular-chart.js/dist/angular-chart.min.js"></script>
	<!-- Module registration -->
	<script src="/js/app/moduleRegistration.js"></script>
	<!-- Module Services -->
	
	<script src="/js/app/services/questionary.js"></script>
	<script src="/js/app/services/user.js"></script>
	<script src="/js/app/services/question.js"></script>
	<!-- Module Controllers -->
	<script src="/js/app/controllers/loginController.js"></script>
	<script src="/js/app/controllers/mainController.js"></script>
	<script src="/js/app/controllers/questionary.js"></script>
	<script src="/js/app/controllers/questions.js"></script>

	<!-- Module App -->

	<script src="/js/app/app.js"></script>

	<!-- Modal Black Box  -->
	<script type="text/ng-template" id="uib/template/modal/backdrop.html">
		<div class="modal-backdrop fade in">
		</div>
	</script>


</body>

</html>
