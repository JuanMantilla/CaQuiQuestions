@extends('base')

@section('content')
    <div class="container">
        <div class="card card-container">
            <img style="padding-left: 45rem; margin: 3rem;" d="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <div style="    margin-left: 34rem;">
                <form class="form-signin col-lg-7" action="/register" method="POST">
                    @csrf
                    <span id="reauth-email" class="reauth-email"></span>
                    <input type="text" name="name" id="inputName" class="form-control add_margin_bottom_md" placeholder="Name" required autofocus>
                    <input type="email" name="email" id="inputEmail" class="form-control add_margin_bottom_md" placeholder="Email address" required autofocus>
                    <input type="password" name="password" id="inputPassword" class="form-control add_margin_bottom_md" placeholder="Password" required>
                    <button class="btn btn-lg btn-primary btn-block btn-signin add_margin_bottom_md" type="submit">Register</button>
                </form><!-- /form -->
                <a href="/" class="forgot-password">
                    back to sign in
                </a>
            </div>

        </div><!-- /card-container -->
    </div><!-- /container -->
@endsection