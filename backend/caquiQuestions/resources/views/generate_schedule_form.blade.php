<form class="form-signin" action="/schedule" method="POST">
    @csrf
    <div class="mar-bot5">
        <h5>Select route:</h5>
        <select class="form-control" name="route">
            @foreach ($routes as $route)
                <option value="{{ $route->id }}">{{ $route->name }}</option>
            @endforeach
        </select>
    </div>
    <div class="row">
        <button class="add_margin_top_md add_margin_bottom_md btn btn-primary">Create buses from route</button>
    </div>
</form><!-- /form -->