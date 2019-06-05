<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Question;
use App\Answer;

class Questions extends Controller
{
    public function index()
    {
        $question = Question::all();
		return response()->json($question);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $this->question = Question::create($request->all());

        foreach($request->answers as $answer){
            $answer = (object) $answer;
            $answer->question_id = $this->question->id;
            $answer = (array) $answer;
            Answer::create($answer);
        }

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
        $this->question=Question::find($id);
        $this->question->answers = $this->question->answers()->get();
        return response()->json($this->question);
    }

    public function getByQuestionary($id)
    {
        $questions=Question::where('questionary_id', $id)
            ->orderBy('id', 'asc')
            ->get();
        return response()->json($questions);
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
        $this->question=Question::find($id);
		$this->question->fill($request->all());
		$this->question->save();
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
        $this->question=Question::find($id);
        $this->question->delete();
    }
}
