<form class="form-signin" action="/buses_fixed" method="POST">
    @csrf
    <div class="mar-bot5">
        <h5>Select route:</h5>
        <select class="form-control" name="route">
            @foreach ($routes as $route)
                <option value="{{ $route->id }}">{{ $route->name }}</option>
            @endforeach
        </select>
    </div>
    <div>
        <input type="number" min="0" max="60" name="bus_quantity" id="bus_quantity" class="form-control" placeholder="Number of buses" required>
    </div>
    <div class="row">
        <button class="add_margin_top_md add_margin_bottom_md btn btn-primary">Create buses</button>
    </div>
</form><!-- /form -->