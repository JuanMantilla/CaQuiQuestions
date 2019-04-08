@extends('base')

@section('content')

    <div class="container ">
        <div class="row  border-top home-buttons">
            <div class="col-lg-1">

            </div>
            <div class="col-lg-3" style=" display: block; left: 3rem;">
                <button type="button" class=" btn btn-lg btn-primary btn-block btn-signin"
                        data-toggle="modal" data-target="#create_user_modal">Create new user</button>
                <!-- Modal -->
                <div class="modal fade" id="create_user_modal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="add_margin_top_md align-center">
                                <h4>Create new user</h4>
                            </div>
                            <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
                                <a href="#" class="hi-icon hi-icon-user align-icon-center">location</a>
                            </div>
                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('register_admin')
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row  border-top home-buttons">
            <div class="col-lg-3 align-center">
                <button type="button" class=" btn btn-lg btn-primary btn-block btn-signin"
                        data-toggle="modal" data-target="#create_route_modal">Create route</button>
                <!-- Modal -->
                <div class="modal fade" id="create_route_modal" role="dialog">
                    <div class="modal-dialog">
                        <!-- Modal content-->
                        <div class="modal-content">
                                    <div class="add_margin_top_md align-center">
                                        <h4>Create new Route</h4>
                                    </div>
                                    <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
                                        <a href="#" class="hi-icon hi-icon-location align-icon-center">location</a>
                                    </div>
                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('route_form')
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
            <div class="col-lg-3">
                <button type="button" class=" btn btn-lg btn-primary btn-block btn-signin"
                        data-toggle="modal" data-target="#store_demand_modal">Store demand</button>
                <!-- Modal -->
                <div class="modal fade" id="store_demand_modal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="add_margin_top_md align-center">
                                <h4>Store demand</h4>
                            </div>

                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('demand_form')
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row align-center home-buttons">
            <div class="col-lg-6">
                <button type="button" class=" btn btn-lg btn-primary btn-block"
                        data-toggle="modal" data-target="#create_bus_modal">Calculate buses to satisfy the demand</button>
                <!-- Modal -->
                <div class="modal fade" id="create_bus_modal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="add_margin_top_md align-center">
                                <h4>Calculate number of buses need to satisfy the demand</h4>
                            </div>
                            <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
                                <a href="#" class="hi-icon hi-icon-contract align-icon-center">location</a>
                            </div>
                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('buses_form')
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row align-center home-buttons">
            <div class="col-lg-6">
                <button type="button" class=" btn btn-lg btn-primary btn-block"
                        data-toggle="modal" data-target="#create_fixed_bus_modal">Create a fixed number of buses</button>
                <!-- Modal -->
                <div class="modal fade" id="create_fixed_bus_modal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="add_margin_top_md align-center">
                                <h4>Create a fixed number of buses</h4>
                            </div>
                            <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
                                <a href="#" class="hi-icon hi-icon-contract align-icon-center">location</a>
                            </div>
                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('fixed_buses_form')
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row align-center home-buttons">
            <div class="col-lg-7" style="left: -3rem;">
                <button type="button" class=" btn btn-lg btn-primary btn-block"
                        data-toggle="modal" data-target="#create_percentage_bus_modal">Generate buses based of percentage of demand</button>
                <!-- Modal -->
                <div class="modal fade" id="create_percentage_bus_modal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="add_margin_top_md align-center">
                                <h4>Generate buses based of percentage of demand</h4>
                            </div>
                            <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
                                <a href="#" class="hi-icon hi-icon-contract align-icon-center">location</a>
                            </div>
                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('demand_percentage_buses_form')
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="row align-center home-buttons">
            <div class="col-lg-6">
                <button type="button" class=" btn btn-lg btn-primary btn-block"
                        data-toggle="modal" data-target="#create_scheudle_modal">Generate schedule to Route</button>
                <!-- Modal -->
                <div class="modal fade" id="create_scheudle_modal" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="add_margin_top_md align-center">
                                <h4>Generate schedule to Route</h4>
                            </div>
                            <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
                                <a href="#" class="hi-icon hi-icon-clock align-icon-center">location</a>
                            </div>
                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('generate_schedule_form')
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row align-center home-buttons">
            <div class="col-lg-6">
                <button type="button" class=" btn btn-lg btn-primary btn-block"
                        data-toggle="modal" data-target="#show_schedule">Show schedules of a route</button>
                <!-- Modal -->
                <div class="modal fade" id="show_schedule" role="dialog">
                    <div class="modal-dialog">

                        <!-- Modal content-->
                        <div class="modal-content">
                            <div class="add_margin_top_md align-center">
                                <h4>Show schedules of a route</h4>
                            </div>
                            <div class="hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a mar-top20">
                                <a href="#" class="hi-icon hi-icon-clock align-icon-center">location</a>
                            </div>
                            <div class="col-md-3">

                            </div>
                            <div class="row">
                                <div class="col-md-6 add_margin_top_md">
                                    @include('show_schedule_modal')
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-center home-buttons">
            <div class="col-lg-6">
                <a href="/logout" type="button" class=" btn btn-lg btn-primary btn-block" >Logout</a>
            </div>
        </div>
    </div>
@endsection