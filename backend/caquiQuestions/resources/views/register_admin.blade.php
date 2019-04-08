
<form class="form-signin" action="/register" method="POST">
    @csrf
    <span id="reauth-email" class="reauth-email"></span>
    <input type="text" name="name" id="inputName" class="form-control" placeholder="Name" required autofocus>
    <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <div class="mar-bot5 add_margin_top_md">
        <h5>Type:</h5>
        <select class="form-control" name="type">
            <option value="admin">Admin</option>
            <option value="consultant">Consultant</option>
        </select>
    </div>

    <button class="add_margin_top_md add_margin_bottom_md btn btn-lg btn-primary btn-block btn-signin" type="submit">Register</button>
</form><!-- /form -->