<!DOCTYPE html>
<html lang="en" ng-app="kvmApply">
  <head>
    <meta charset="utf-8">
    <title>The KVM Foundation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="/assets/css/compiled/site.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css">
    <link rel="stylesheet" type="text/css" href="main.css">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    <script src="../assets/js/jquery.min.js" type="text/javascript"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
    <script src="../assets/js/bootstrap.min.js" type="text/javascript"></script>
    
  </head>

  <body class="darker">
    <div class="wrapper">
        <!-- site nav fixed -->
        <nav>
          <div class="navbar">
            <div class="container">
              <div class="nav-container">
                <a href="/">
                  <div class="nav-brand pull-left">
                    <div class="nav-icon"></div>
                    The <strong>KVM</strong> Foundation
                  </div>
                </a>
                <div class="nav-collapse collapse">
                  <ul class="nav pull-right">
                    <li><a href="/index.html#themission">The Mission</a></li>
                    <li><a href="/index.html#thestory">The Story</a></li>
                    <li><a href="/the-team/">The Team</a></li>
                    <li><a href="/get-involved/" class="btn-green-basic">Get Involved</a></li>
                    <li><a href="javascript:void(0)" class="btn-green-basic">Donate</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <!-- /site nav fixed -->

        <div ng-view></div>
   </div>

  <?php require_once('../footer.php'); ?>


  <script src="lib/angular/angular.js"></script>
  <script src="lib/angular/angular-route.js"></script>
  <script src="lib/ui-bootstrap-tpls-0.10.0.min.js"></script>
  <script src="lib/lodash.min.js"></script>
  <script src="lib/restangular.min.js"></script>
  <script src="lib/jquery.color-2.1.2.min.js"></script>
  <script src="js/app.js"></script>
  <script src="features/application/controllers.js"></script>
  <script src="features/info/info.js"></script>
  </body>

</html>