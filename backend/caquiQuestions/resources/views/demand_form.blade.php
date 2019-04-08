
        <form class="form-signin" action="/store_demand" method="POST" enctype="multipart/form-data">
            @csrf
            <span id="reauth-email" class="reauth-email"></span>
            <h5 >Select route:</h5>
            <select class="form-control add_margin_bottom_md" name="route">
                @foreach ($routes as $route)
                    <option value="{{ $route->id }}">{{ $route->name }}</option>
                @endforeach
            </select>
            <input class="add_margin_bottom_md" type="file" name="demand" id="demand" class="form-control" required>

            <button class="add_margin_bottom_md btn btn-lg btn-primary btn-block btn-signin" type="submit">Register</button>
        </form><!-- /form -->
