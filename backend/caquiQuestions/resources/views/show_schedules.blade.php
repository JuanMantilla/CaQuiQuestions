@extends('base')

@section('content')
    <div class="container" style= "margin-left: 38rem;">
        <h1 style = "margin-top: 3rem; text-transform: capitalize"
            > {{ $route->name }}</h1>
        <div class="row ">
            <div class="col-lg-10 table-fes">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Bus</th>
                        <th scope="col">Enlistment time</th>
                        <th scope="col">Departure time</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($schedules as $schedule)
                        <tr>
                            <th scope="row">{{ $schedule->day }}</th>
                            <td>{{ $schedule->bus->name }}</td>
                            <td>{{ $schedule->enlistment_time }}</td>
                            <td>{{ $schedule->departure_time }}</td>
                        </tr>
                    @endforeach

                    </tbody>
                </table>
            </div>
        </div>

    </div>

@endsection