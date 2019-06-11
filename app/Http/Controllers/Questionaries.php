<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Questionary;
use App\User;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;

class Questionaries extends Controller
{
    
    public function index()
    {
        $user = User::find(Auth::user()->id);
        $questionaries = $user->questionaries()->with('questions.answers')->get();
        return $questionaries;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Questionary::create($request->all());
		return response()->json(["message"=>"Creado correctamente"]);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::user()){
            $this->questionary=Questionary::find($id);
            return response()->json($this->questionary);
        } else {
            $this->questionary = Questionary::find($id);
            $this->questions = $this->questionary->questions()->with('answers')->get();
            return response()->json( $this->questions );
        }
        
		
    }
	
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->questionary=Questionary::find($id);
		$this->questionary->fill($request->all());
		$this->questionary->save();
		return response()->json(["mensaje"=>"Actualizacion exitosa"]);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->questionary=Questionary::find($id);
        $this->questionary->delete();
    }
}
