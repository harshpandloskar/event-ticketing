<!DOCTYPE html>
<html lang="en">
<head>
  <title>Contact us</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="assets/main.js"></script>
  <link rel="stylesheet" href="assets/main.css">
  <link rel="manifest" href="manifest.json">
  <script>
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(function() {
              console.log('Service Worker Registered');
        });
    }
  </script>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="index.php">Movies</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="index.php">Home</a></li>
      </ul>
    </div>
  </div>
</nav>
<!-- 
<div class="jumbotron">
  <div class="container text-center">
    <h2>DBS - Movies</h2> 
  </div>
</div> -->

<!-- Modal -->
<div id="submitDetails" class="modal fade" role="dialog">
        <div class="modal-dialog">
        
            <!-- Modal content-->
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Thanks for reaching out!</h4>
            </div>
            <div class="modal-body">
                <p>Thanks for writing! We will get in touch with you shortly</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
            </div>
        
        </div>
        </div>
  
<div class="jumbotron container-fluid bg-3 text-center">    
        <div class="container">
        <h2>Please feel free to reach out to me</h2><br /><br/>
        <form class="form-horizontal center-block contactus-form">
            <div class="form-group">
            <label class="control-label col-sm-2" for="name">Name:</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" required>
            </div>
            </div>
            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-10">          
                <input type="email" class="form-control" id="email" placeholder="Enter Email" name="email" required>
            </div>
            </div>
            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Phone number:</label>
            <div class="col-sm-10">          
                <input type="text" class="form-control" id="phone" placeholder="Enter phone number" name="phone" required>
            </div>
            </div>
            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Your query:</label>
            <div class="col-sm-10">          
                <textarea class="form-control" rows="5" id="comment" placeholder="Enter query" required></textarea>
            </div>
            </div>
            
            <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
                <button class="btn btn-default" type="button" data-toggle="modal" data-target="#submitDetails">Submit</button>
            </div>
            </div>
        </form>
        </div>
</div><br/><br/>

<footer class="container-fluid text-center">
  <p>Harsh Pandloskar (10384363) | MSc In Information Systems with Computing</p><br>
  <p>Movies PWA | Web Assignment</p>
</footer>

</body>
</html>
