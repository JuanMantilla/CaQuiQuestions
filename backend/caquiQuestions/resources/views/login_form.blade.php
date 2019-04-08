@extends('base')

@section('content')
    <div class="container">
        <div class="card card-container">
            <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
            <img style="padding-left: 45rem; margin: 3rem;" id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <div style="    margin-left: 34rem;">
                <form class="form-signin col-lg-7" action="/login" method="POST">
                    @csrf
                    <span id="reauth-email" class="reauth-email"></span>
                    <input type="email" name="email" id="inputEmail" class="form-control form-check-input add_margin_bottom_md" placeholder="Email address" required autofocus>
                    <input type="password" name="password" id="inputPassword" class="form-control add_margin_bottom_md" placeholder="Password" required>
                    <button class="btn btn-lg btn-primary btn-block btn-signin add_margin_bottom_md" type="submit">Login</button>
                </form><!-- /form -->
                <a href="/register" class="forgot-password">
                    New user?
                </a>
            </div>

        </div><!-- /card-container -->
    </div><!-- /container -->
@endsection