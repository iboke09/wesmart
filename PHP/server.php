<?php
    header('Access-Control-Allow-Origin: https://wesmart-seven.vercel.app/');
    $to = "fazexxibrahim@gmail.com";
    $name=$_POST["name"]; 
    $emaill=$_POST["email"];
    // $phone=$_POST["phone"];
    $message=$_POST["message"];
    $subject="New Submission Form $emaill" ;
    $body="Name: $name\n\nEmail: $emaill\n\nMessage:\n$message" ; // 3. Send the email
    $headers="From: $emaill" ;
    if(mail($to, $subject, $body, $headers)){
        echo "";
    }else{
        echo "";
    }
// }else{
//     echo"a";
// }
    ?>
<!DOCTYPE html>
<html lang="en" style="overflow-x: hidden">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- <link rel="stylesheet" href="csso/all.min.css" />
<link rel="stylesheet" href="./phpstyle.css" /> -->
<!-- Google Fonts -->
<title>Wesmart</title>
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet" />
<!-- <link rel="icon" href="" /> -->
</head>


<div class="mask"
    style="height: 100vh;width: 100vw;display: flex;align-items: center;justify-content: center;flex-wrap:wrap;flex-direction:column">
    <i class=" fa-solid fa-check iconi" style="color: #53bcc0;
    font-size: 135px;
    display: block;
    border-radius: 50%;
    border: 10px solid;
    padding: 30px;
    margin-bottom: 25px;"></i>
    <p class="p1" style="display:block;  font-family:  cairo , sans-serif;color:#53bcc0;font-size:30px;margin:0">The
        Form
        Submitted
        Successfully
    </p>
    <p class="p2" style=" display:block;font-family:  cairo , sans-serif;color:#53bcc0;font-size:30px;margin:0">Thank
        You for Your
        Message!
    </p>
</div>

</html>

<script>
setTimeout(function() {
    location.href = "/"
}, 4000)
</script>