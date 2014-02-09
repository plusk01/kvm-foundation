<?php
	/*

		** FOR APPLICANTS **
		How does learning Conversational English help you in your life?

		What are your career goals? How do you want us to help you accomplish those?

		Why are you a good addition to KVM? How will you help us accomplish our mission?

		What are some of your goals in life?

		Tell us about your family. How many sibilings do you have? What do your parents do for work?

		** FOR INTERNS **
		KVM is an adapting and growing strength in India. How can you help us to move it forward?

		This is not just a summer English teaching program. This is an internship that incorporates aspects of business,
		collaboration, administrative work, innovation, problem solving, language study, and cultural immersion.
		What skill sets can you bring to the table? (i.e. what makes you awesome?)
	*/
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The KVM Foundation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Le styles -->
    <link rel="stylesheet" type="text/css" href="/assets/css/compiled/site.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/responsive.css">
    <link rel="stylesheet" type="text/css" href="main.css">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

        <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../assets/js/jquery.min.js" type="text/javascript"></script>
    <!-- <script src="../assets/js/jquery.smooth-scroll.min.js" type="text/javascript"></script>
    <script src="../assets/js/navigation.min.js" type="text/javascript"></script> -->
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
                    <li><a href="/index.html#aboutus">About us</a></li>
                    <li><a href="javascript:void(0)">Meet the kids</a></li>
                    <li><a href="javascript:void(0)">Meet the team</a></li>
                    <li><a href="/get-involved/" class="btn-green-basic">Get Involved</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <!-- /site nav fixed -->


        <!-- application form -->
        <div class="application-form">
          <div class="application-form-container">
            <form action="/apply/" method="POST" class="application-form-base">
              
            <div class="row">
              <div class="span6">
                <!-- the basics -->
                <fieldset>
                  <legend>Personal Information</legend>

                  <div class="form-row">
                    <div class="row">
                      <div class="span3 form-split">
                        <label>First Name</label>
                        <input class="span3" name="first_name" value="" type="text" placeholder="">
                      </div>

                      <div class="span3 form-split">
                        <label>Last Name</label>
                        <input class="span3" name="last_name" value="" type="text" placeholder="">
                      </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="row">
                      <div class="span3 form-split">
                        <label>Email</label>
                    
                        <input class="span3" name="email" type="text" value="" placeholder="">
                      </div>
                      <div class="span3 form-split">
                        <label>Date of Birth</label>
                        
                        <input class="span3" name="dob" type="text" value="" placeholder="(e.g. 01-Jan-1985)">
                      </div>
                    </div>
                  </div>

                </fieldset>
                <!-- /the basics -->
              </div>
              <div class="span5 offset1">

                <!-- education -->
                <fieldset>
                  <legend>Education</legend>

                  <div class="form-row">
                    <label>Highest Education Achieved</label>
                    <input class="span7" name="education" type="text" value="" placeholder="">
                  </div>

                  <div class="form-row">
                    <label>Field of Study</label>
                    <input class="span7" name="field_study" type="text" value="" placeholder="">
                  </div>

                </fieldset>
                <!-- /education -->

              </div>
            </div>

              <hr>

              <div class="row">
                <div class="span6">

                  <!-- employment -->
                  <fieldset>
                    <legend>Employment</legend>
                    <div class="form-row">
                      
                      <label class="radio">
                        <span></span>
                        
                          <input type="radio" name="employment_status" id="employment_status1" value="1" checked>
                        
                          <input type="radio" name="employment_status" id="employment_status1" value="1">
                        
                        Self-Employed
                      </label>
                      <label class="radio">
                        <span></span>
                        
                          <input type="radio" name="employment_status" id="employment_status2" value="2" checked>
                        
                          <input type="radio" name="employment_status" id="employment_status2" value="2">
                        
                        Employed
                      </label>
                      <label class="radio">
                        <span></span>
                        
                          <input type="radio" name="employment_status" id="employment_status3" value="3" checked>
                        
                          <input type="radio" name="employment_status" id="employment_status3" value="3">
                        
                        Unemployed &amp; Looking
                      </label>
                      <label class="radio">
                        <span></span>
                        
                          <input type="radio" name="employment_status" id="employment_status4" value="4" checked>
                        
                          <input type="radio" name="employment_status" id="employment_status4" value="4">
                        
                        Unemployed &amp; Not Looking
                      </label>
                      <label class="radio">
                        <span></span>
                        
                          <input type="radio" name="employment_status" id="employment_status5" value="5" checked>
                        
                          <input type="radio" name="employment_status" id="employment_status5" value="5">
                        
                        Student
                      </label>
                    </div>

                    <div class="form-row">
                      <div class="row">
                        <div class="span3 form-split">
                          <label>Your family's average income</label>
                          <input class="span3" name="family_income" type="text" value="" placeholder="">
                        </div>
                        <div class="span3 form-split">
                          <label>Your personal average income</label>
                          <input class="span3" name="personal_income" type="text" value="" placeholder="">
                        </div>
                      </div>
                    </div>

                  </fieldset>
                  <!-- /employment -->
                </div>

                <div class="span5 offset1">

                  <fieldset>
                  <legend>&nbsp;</legend>
                    <div class="form-row">
                      <label>Why should you be in the KVM English Program?</label>

                      <textarea rows="9" class="span7" name="reason"></textarea>
                    </div>
                  </fieldset>
                </div>
              </div>


              <!-- submit -->
              <div class="submit">
                <input type="submit" class="btn-green btn" value="Submit Application">
              </div>
              <!-- submit -->
            </form>
          </div>
        </div>
        <!-- /application form -->
        

   </div>


<!-- footer -->
    <div class="footer">
      <div class="footer-container">
        <div class="row">
          <!-- links -->
          <div class="links span9">
            <ul>
              <li><a href="#aboutus">About us</a></li>
              <li><a href="javascript:void(0)">Meet the kids</a></li>
              <li><a href="javascript:void(0)">Meet the team</a></li>
              <li><a href="/get-involved/" class="btn-green-basic">Get Involved</a></li>
            </ul>
          </div>
          <!-- /links -->
          <!-- social -->
          <div class="social span3">
            <!-- <a href="http://www.twitter.com/"><div class="icon-filler icon-twitter"></div></a> -->
            <a href="https://www.facebook.com/pages/The-KVM-Foundation/209052765927687"><div class="icon-filler icon-facebook"></div></a>
          </div>
          <!-- /social -->
        </div>
      </div>
    </div>
    <!-- /footer -->

  </body>

</html>