<form class="form-signin" action="/buses_percentage" method="POST">
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
        <input type="number" min="0" max="100" name="demand_percentage" id="bus_quantity" class="form-control" placeholder="Percentage of demand to cover" required>
    </div>
    <div class="row">
        <button class="add_margin_top_md add_margin_bottom_md btn btn-primary">Create buses</button>
    </div>
</form><!-- /form -->