<form class="form-signin" action="/create_route" method="POST">
    @csrf
    <span id="reauth-email" class="reauth-email"></span>
    <div>Name of the route </div>
    <input type="text" name="name" id="inputName" class="form-control" placeholder="Name" required autofocus>
    <div> Enlistment time of the route (minutes) </div>
    <input type="number" min="0" max="60" name="default_enlistment_time" id="inputDefault_enlistment_time" class="form-control" placeholder="default_enlistment_time" required>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                Starting time of the route <br>(24 hours format)
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 align-center" style="
                width: 11.666667%;
    display: flex;
    left: 7rem;
    padding-top: 1rem;
            ">
                <input type="time" name="start_time" id="inputStart_time" class="form-control col-lg-3" placeholder="start time" required>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                End time of the route <br> (24 hours format)
            </div>
        </div>

        <div class="row">
            <div class="col-md-2 align-center" style="
                width: 11.666667%;
    display: flex;
    left: 7rem;
    padding-top: 1rem;
        ">
                <input type="time" name="finish_time" id="inputFinish_time" class="form-control col-lg-3" placeholder="finish time" required>
            </div>
        </div>

    </div>


        <div>Start point of the route <br>(latitude and longitude)</div>
    <input type="text" name="start_point" id="inputStart_point" class="form-control" placeholder="start_point" required>
            <div>Finish point of the route <br> (latitude and longitude)</div>
    <input type="text" name="finish_point" id="inputFinish_point" class="form-control" placeholder="finish_point" required>

    <button class="add_margin_bottom_md add_margin_top_md btn btn-lg btn-primary btn-block btn-signin" type="submit">Register</button>
</form><!-- /form -->